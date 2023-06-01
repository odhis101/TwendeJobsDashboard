import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Jobs = lazy(() => import("../views/ui/Jobs"));
const Forms = lazy(() => import("../views/ui/Forms")); // this a form 
const Login = lazy(() => import("../views/Login"));
const Sms = lazy(() => import("../views/ui/SMS"));
const updateNumber = lazy(() => import("../views/ui/Breadcrumbs"));
const ForgotPassword =  lazy(() => import("../views/ForgotPass"));
const JobsOfTheDay = lazy(() => import("../views/ui/JobsOfTheDay"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />
  },
  {
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="starter" /> },
      { path: "starter", element: <Starter /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/jobs", exact: true, element: <Jobs /> },
      { path: "/updateJob/:id", exact: true, element: <Forms /> },
      { path: "/Sms", exact: true, element: <Sms /> },
      { path: "/jobsOfTheDay", exact: true, element: <JobsOfTheDay /> },
      
      { path: "/updateNumber/:id", exact: true, element: <Alerts /> },
    ],
  },
];

export default ThemeRoutes;