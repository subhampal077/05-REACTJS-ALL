import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../components/Home.jsx";
import Contact from "../components/Contact.jsx";
// import About from "../components/About.jsx";
import "./index.css";
import { lazy } from "react";

// In case of default export
const About = lazy(() => import("../components/About.jsx"));

// In case of named export
// const About = lazy(() =>
//   import("../components/About.jsx").then((module) => ({
//     default: module.About,
//   })),
// );

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
