import { combineReducers } from "redux";
import movieList from "./movieList/reducer";
import optionList from "./options/reducer";
import movieDetail from "./moviesDetail/reducer";

const appReducer = combineReducers({
  movieList: movieList,
  options: optionList,
  movieDetail: movieDetail,
});

export default appReducer;
