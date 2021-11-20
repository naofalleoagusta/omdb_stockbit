/**
 * Default state for role
 */
import actionTypeGenerator from "../../helpers/actionTypeGenerator";

export const INITIAL_STATE = {
  movieDetail:{}
};

/**
 * ACTION_TYPE for role
 */
export const GET_MOVIE_DETAIL = actionTypeGenerator("GET_MOVIE_DETAIL");
