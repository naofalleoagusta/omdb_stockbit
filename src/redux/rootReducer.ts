import { combineReducers } from "redux";
import movieList from "./movieList/reducer";
import optionList from "./options/reducer";
import movieDetail from "./moviesDetail/reducer";
import apiReducer from "./api/";

const appReducer = combineReducers({
  app: apiReducer,
  movieList: movieList,
  options: optionList,
  movieDetail: movieDetail,
});

export default appReducer;
