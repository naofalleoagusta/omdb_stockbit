/**
 * Default state for role
 */
import actionTypeGenerator from "../../helpers/actionTypeGenerator";

export const INITIAL_STATE = {
  allLoaded: false,
  pageNumber: 0,
  loading: false,
  listings: [],
};

/**
 * ACTION_TYPE for role
 */
export const GET_MOVIE_LIST = actionTypeGenerator("GET_MOVIE_LIST");
