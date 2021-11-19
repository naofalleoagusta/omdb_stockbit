import { combineReducers } from "redux";
import homeReducer from "./home/reducer";

const appReducer = combineReducers({
  home: homeReducer,
});

export default appReducer;
