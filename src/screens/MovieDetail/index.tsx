import React, { useEffect } from "react";
import { Background } from "../../atoms/Background";
import { Section } from "../../atoms/Section";
import Navbar from "../../components/Navbar";
import { getMovieDetail } from "../../redux/moviesDetail/action";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MovieDetailProps } from "../../redux/moviesDetail/type";

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
  }, [id]); //es-lint
  return (
    <Background color="bg-white">
      <Navbar />
      <Section yPadding="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>test</div>
          <div>test</div>
        </div>
      </Section>
    </Background>
  );
};

export default MovieDetail;
