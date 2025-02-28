import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";

import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import CountryDetails from "./components/CountryDetails.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        {/* Dynamic Routing for Country Details  */}
        <Route path="/:country" element={<CountryDetails />} />

        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <App />
//       </>
//     ),
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/:country",
//         element: <CountryDetails />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
