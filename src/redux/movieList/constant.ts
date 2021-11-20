/**
 * Default state for role
 */
import actionTypeGenerator from "../../helpers/actionTypeGenerator";

export const INITIAL_STATE = {
  allLoaded: false,
  pageNumber: 1,
  loading: false,
  listings: [],
};

/**
 * ACTION_TYPE for role
 */
export const GET_MOVIE_LIST = actionTypeGenerator("GET_MOVIE_LIST");
export const RESET_MOVIE_LIST = "RESET_MOVIE_LIST";
export const RESET_ALL_LOADED = "RESET_ALL_LOADED";
