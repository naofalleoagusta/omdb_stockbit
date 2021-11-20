import { lazy } from "react";
const Home = lazy(() => import("../../screens/Home"));
const homeRoutes = [
  {
    element: Home,
    path: "/",
    key: "home",
    exact: true,
  },
];

export default homeRoutes;
