import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Jobs = lazy(() => import("../views/ui/Jobs"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Login = lazy(() => import("../views/Login"));

/*****Routes******/

const ThemeRoutes = [
  {
  
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="starter" /> },
      { path: "starter", element: <Starter /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/jobs", exact: true, element: <Jobs /> },
      
      { path: "/updateJob/:id", exact: true, element: <Forms /> },
    
    ],
  },
];

export default ThemeRoutes;
