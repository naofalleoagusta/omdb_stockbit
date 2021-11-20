
import { lazy } from "react";
const MovieList = lazy(() => import("../../screens/MovieList"));

const movieListRoutes = [
  {
    element: MovieList,
    path: "/search",
    key: "home",
    exact: true,
  },
];

export default movieListRoutes;
