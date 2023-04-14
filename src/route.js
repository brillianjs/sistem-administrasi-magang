import { lazy } from "react";

export const routes = [
  {
    title: "Homepage",
    component: lazy(() => import("./pages/Homepage")),
    exact: true,
    path: "/",
  },
];
