import homeRoutes from "./home";
import movieListRoutes from "./movieList";
import movieDetailRoutes from "./movieDetail";

export const router = [...homeRoutes, ...movieListRoutes, ...movieDetailRoutes];
