import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./component/Home";
import Statistics from "./component/Statistics";
import Blog from "./component/Blog";
import ErrorPage from "./component/ErrorPage";
import CardDetails from "./component/CardDetails";
import AppliedJobs from "./component/AppliedJobs"
import customLoader from "./component/Utils/Custom";
import Card from "./component/Card";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path: "/details/:Id",
        element: <CardDetails/>,
        loader: ({params})=> fetch('/jobs.json')
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/jobs",
        element: <AppliedJobs/>,
        loader: customLoader
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
