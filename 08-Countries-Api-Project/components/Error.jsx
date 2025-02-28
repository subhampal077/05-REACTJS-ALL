import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <h3>
      Something went wrong!! <br />
      {error.status} {error.statusText}
    </h3>
  );
}
