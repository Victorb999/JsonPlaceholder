import { lazy } from "react";

const Home = lazy(() => import("../components/Home"));
const Posts = lazy(() => import("../components/Posts"));
const ToDos = lazy(() => import("../components/ToDos"));
const Albums = lazy(() => import("../components/Albums"));

const routes = () => [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/posts",
    component: Posts,
    exact: true
  },
  {
    path: "/todos",
    component: ToDos,
    exact: true
  },
  {
    path: "/albums",
    component: Albums,
    exact: true
  }
];

export default routes;
