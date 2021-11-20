import {
  INITIAL_STATE,
  GET_MOVIE_LIST,
  RESET_MOVIE_LIST,
  RESET_ALL_LOADED,
} from "./constant";

const reducer = (state = INITIAL_STATE, payload: any) => {
  switch (payload.type) {
    case GET_MOVIE_LIST.error:
    case GET_MOVIE_LIST.loading:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIE_LIST.success:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
        listings: [...state.listings, ...payload.data.search],
        allLoaded:
          state.listings.length < payload.data.totalResults ? false : true,
        loading: false,
      };
    case RESET_MOVIE_LIST:
      return {
        ...state,
        pageNumber: 1,
        listings: [],
        allLoaded: false,
        loading: false,
      };
    case RESET_ALL_LOADED:
      return { ...state, allLoaded: false };
    default:
      return state;
  }
};

export default reducer;
