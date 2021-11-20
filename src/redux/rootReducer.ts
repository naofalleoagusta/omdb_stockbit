import { combineReducers } from "redux";
import movieList from "./movieList/reducer";
import optionList from "./options/reducer";
import moviedDetail from "./moviesDetail/reducer";

const appReducer = combineReducers({
  movieList: movieList,
  options: optionList,
  movieDetail: moviedDetail,
});

export default appReducer;
