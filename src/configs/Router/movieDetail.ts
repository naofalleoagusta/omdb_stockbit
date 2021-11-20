
import { lazy } from "react";
const MovieDetail = lazy(() => import("../../screens/MovieDetail"));

const movieDetailRoutes = [
  {
    element: MovieDetail,
    path: "/detail/:id",
    key: "home",
    exact: true,
  },
];

export default movieDetailRoutes;
