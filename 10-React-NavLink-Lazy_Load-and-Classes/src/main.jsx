import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
// import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

//in case of default export of About component
// const About = lazy(() => import("./components/About.jsx"));

// in case of named export of About component
const About = lazy(() =>
  import("./components/About.jsx").then((module) => {
    return { default: module.About };
  }),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
