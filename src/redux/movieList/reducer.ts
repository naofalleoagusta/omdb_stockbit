import { INITIAL_STATE, GET_MOVIE_LIST } from "./constant";

const reducer = (state = INITIAL_STATE, payload: any) => {
  switch (payload.type) {
    case GET_MOVIE_LIST.error:
    case GET_MOVIE_LIST.loading:
      return {
        ...state,
      };
    case GET_MOVIE_LIST.success:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
        listings: payload.data.search,
        allLoaded: payload.data.totalResults < 21 ? true : false,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
