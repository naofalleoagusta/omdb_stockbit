import { combineReducers } from "redux";
import movieList from "./movieList/reducer";
import optionList from "./options/reducer";

const appReducer = combineReducers({
  movieList: movieList,
  options: optionList,
});

export default appReducer;
