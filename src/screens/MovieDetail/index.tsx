import React, { useEffect } from "react";
import { Background } from "../../atoms/Background";
import { Section } from "../../atoms/Section";
import Navbar from "../../components/Navbar";
import { getMovieDetail } from "../../redux/moviesDetail/action";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MovieDetailProps } from "../../redux/moviesDetail/type";
import Label from "../../atoms/Label";
import CastSection from "../../components/CastSection";
import ImageModal from "../../components/ImageModal";

const MovieDetail: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { movieDetail } = useSelector(
    ({ movieDetail }: { movieDetail: MovieDetailProps }) => {
      return { movieDetail: movieDetail.movieDetail };
    }
  );
  useEffect(() => {
    if (!!id) {
      dispatch(getMovieDetail(id));
    }
  }, [id]); //eslint-disable-line
  return (
    <Background color="bg-white">
      <Navbar />
      <Section yPadding="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-4">
          <div>
            <ImageModal src={movieDetail.Poster} alt={movieDetail.Title} />
          </div>
          <div>
            <h1 className="text-3xl text-black font-semibold mb-4">
              {movieDetail.Title}
            </h1>
            <div className="flex flex-wrap gap-2">
              <Label>{movieDetail.Genre}</Label>
              <Label>{movieDetail.Rated}</Label>
              <Label>{movieDetail.Runtime}</Label>
              <Label>{movieDetail.Year}</Label>
              <Label>{movieDetail.Language}</Label>
              <Label>{movieDetail.Country}</Label>
              <Label>{movieDetail.Type}</Label>
            </div>
            <CastSection title="THE CAST" content={movieDetail.Actors} />
            <CastSection title="THE DIRECTOR" content={movieDetail.Director} />
            <CastSection title="THE WRITER" content={movieDetail.Writer} />
            <CastSection title="THE AWARDS" content={movieDetail.Awards} />
            <CastSection title="THE PLOT" content={movieDetail.Plot} />
            {movieDetail.Type === "movie" && (
              <CastSection title="BOX OFFICE" content={movieDetail.BoxOffice} />
            )}
            <h2 className="text-xl text-black mb-2 mt-4">RATING</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              {(movieDetail?.Ratings || []).map((item, idx) => {
                return (
                  <div key={`film-rating-${idx}`} className="text-center">
                    <p>{item.Source}</p>
                    <p>{item.Value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export default MovieDetail;
