import { GET_MOVIE_DETAIL } from "./constant";
import axios from "axios";
import baseUrl from "../../configs/api/endpoint";

export const getMovieDetail = (id: string) => async (dispatch: any) => {
  dispatch({
    type: GET_MOVIE_DETAIL.loading,
  });
  try {
    const res = await axios.get(`${baseUrl}i=${id}`);
    dispatch({
      type: GET_MOVIE_DETAIL.success,
      data: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
