import { INITIAL_STATE, GET_MOVIE_DASHBOARD } from "./constant";

const reducer = (state = INITIAL_STATE, payload: any) => {
  switch (payload.type) {
    case GET_MOVIE_DASHBOARD.error:
    case GET_MOVIE_DASHBOARD.loading:
      return {
        ...state,
      };
    case GET_MOVIE_DASHBOARD.success:
      return {
        ...state,
        list: payload?.data?.data,
      };
    default:
      return state;
  }
};

export default reducer;
