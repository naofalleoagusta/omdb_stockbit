import React, { useEffect } from "react";
import { Background } from "../../atoms/Background";
import { Section } from "../../atoms/Section";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../redux/movieList/action";
import { MovieProps } from "../../redux/movieList/type";
import { MovieListProps } from "../../redux/typeGlobal";
import Card from "../../components/Card";

const MovieList: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const location = useLocation<any>();
  const { listings } = useSelector(
    ({ movieList }: { movieList: MovieProps | undefined }) => {
      return { listings: movieList?.listings };
    }
  );
  const value = location.search.slice(3, location.search.length);
  useEffect(() => {
    dispatch(getMovies(value));
  }, [value]); //es-lint
  return (
    <Background color="bg-white">
      <Navbar />
      <Section yPadding="py-14">
        <h2 className="text-lg font-semibold mb-4">
          Result for keyword:'{value}'
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {(listings || []).map((movie: MovieListProps, idx: number) => {
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
          })}
        </div>
      </Section>
    </Background>
  );
};

export default MovieList;
