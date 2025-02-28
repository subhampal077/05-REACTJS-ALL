import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />

      <main className="px-4 py-4 md:px-8">
        <Suspense
          fallback={<h1 className="text-xl font-semibold">Loading Page....</h1>}
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default App;
