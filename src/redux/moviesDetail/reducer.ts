import { INITIAL_STATE, GET_MOVIE_DETAIL } from "./constant";

const reducer = (state = INITIAL_STATE, payload: any) => {
  switch (payload.type) {
    case GET_MOVIE_DETAIL.error:
    case GET_MOVIE_DETAIL.loading:
      return {
        ...state,
      };
    case GET_MOVIE_DETAIL.success:
      return {
        ...state,
        movieDetail:payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
