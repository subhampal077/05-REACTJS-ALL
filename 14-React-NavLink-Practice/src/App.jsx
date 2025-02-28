import React, { Suspense } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <main className="px-4 py-4 md:px-6">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default App;

// your code works without explicitly using <Suspense> because React Router v6+ (and v7+) internally handles the lazy loading of components.
