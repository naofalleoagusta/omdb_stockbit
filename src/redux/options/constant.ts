/**
 * Default state for role
 */
import actionTypeGenerator from "../../helpers/actionTypeGenerator";

export const INITIAL_STATE = {
  options: [],
};

/**
 * ACTION_TYPE for role
 */
export const GET_OPTION = actionTypeGenerator("GET_OPTION");
