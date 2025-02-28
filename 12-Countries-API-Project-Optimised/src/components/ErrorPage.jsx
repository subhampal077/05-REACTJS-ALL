import React from "react";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <div
      style={{
        paddingInline: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        height: "90vh",
      }}
    >
      <h1>Oops !</h1>
      <h2>Something went wrong.</h2>
      <p>The page you are looking for does not exist.</p>

      <Link
        to={"/"}
        style={{ color: "red", textDecoration: "underline", fontWeight: "700" }}
      >
        Back To Home
      </Link>
    </div>
  );
}

export default ErrorPage;
