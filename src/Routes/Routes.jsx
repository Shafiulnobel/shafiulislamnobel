import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import About from "../components/About/About";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
          {
            path:'/',
            element: <Home />
          },
          {
            path:'/about',
            element: <About />
          },
      ]
    },
  ]);

