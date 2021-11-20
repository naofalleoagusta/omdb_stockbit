import { GET_MOVIE_LIST, RESET_MOVIE_LIST } from "./constant";
import axios from "axios";
import baseUrl from "../../configs/api/endpoint";

export const resetAllLoaded = () => {
  return {
    type: "RESET_ALL_LOADED",
  };
};

export const getMovies =
  (keyword: string) => async (dispatch: any, getState: any) => {
    const { movieList } = getState();
    console.log(movieList);
    const page = movieList.pageNumber;
    dispatch({
      type: GET_MOVIE_LIST.loading,
    });
    try {
      const res = await axios.get(`${baseUrl}s=${keyword}&page=${page}`);
      dispatch({
        type: GET_MOVIE_LIST.success,
        data: { search: res.data.Search, totalResults: res.data.totalResults },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const resetMovies = () => (dispatch: any) => {
  dispatch({
    type: RESET_MOVIE_LIST,
  });
};
