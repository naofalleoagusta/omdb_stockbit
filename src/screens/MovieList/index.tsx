import React, { useEffect, useCallback } from "react";
import { Background } from "../../atoms/Background";
import { Section } from "../../atoms/Section";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getMovies,
  resetAllLoaded,
  resetMovies,
} from "../../redux/movieList/action";
import { MovieProps } from "../../redux/movieList/type";
import { MovieListProps } from "../../redux/typeGlobal";
import Card from "../../components/Card";

const MovieList: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const location = useLocation<any>();
  const { movieList } = useSelector(
    ({ movieList }: { movieList: MovieProps }) => {
      return { movieList };
    }
  );
  const value = location.search.slice(3, location.search.length);
  useEffect(() => {
    dispatch(getMovies(value));
    return () => {
      dispatch(resetMovies());
    };
  }, [value]); //eslint-disable-line

  const isBottom = (el: any) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };
  const trackScrolling = useCallback(() => {
    const el = document.getElementById("listing-container");
    if (isBottom(el) && !movieList.loading) {
      dispatch(getMovies(value));
    }
  }, [value, dispatch, movieList.loading]);
  useEffect(() => {
    if (!movieList.allLoaded)
      document.addEventListener("scroll", trackScrolling);
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [trackScrolling, movieList.allLoaded, dispatch]);
  useEffect(() => {
    return () => {
      dispatch(resetAllLoaded());
    };
  }, [dispatch]);
  console.log(movieList);
  return (
    <Background color="bg-white">
      <Navbar />
      <Section yPadding="py-14">
        <h2 className="text-lg font-semibold mb-4">
          Result for keyword:'{value}'
        </h2>
        <div id="listing-container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {!!movieList.listings?.length ? (
              (movieList.listings || []).map(
                (movie: MovieListProps, idx: number) => {
                  return (
                    <Card
                      Title={movie.Title}
                      Year={movie.Year}
                      imdbID={movie.imdbID}
                      Type={movie.Type}
                      Poster={movie.Poster}
                      key={`movie-card-${idx}`}
                    />
                  );
                }
              )
            ) : (
              <h3 className="text-lg font-semibold mb-4"> No Record Found</h3>
            )}
          </div>
        </div>
        {movieList.loading && (
          <span className="text-md font-semibold">Loading...</span>
        )}
      </Section>
    </Background>
  );
};

export default MovieList;
