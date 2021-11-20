import { GET_MOVIE_LIST } from "./constant";
import axios from "axios";
import baseUrl from "../../configs/api/endpoint";

export const getMovies = (keyword: string) => async (dispatch: any) => {
  dispatch({
    type: GET_MOVIE_LIST.loading,
  });
  try {
    const res = await axios.get(`${baseUrl}s=${keyword}`);
    dispatch({
      type: GET_MOVIE_LIST.success,
      data: { search: res.data.Search, totalResults: res.data.totalResults },
    });
  } catch (error) {
    console.log(error);
  }
};
