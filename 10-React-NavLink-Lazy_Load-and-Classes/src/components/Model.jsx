import React from "react";
import { createPortal } from "react-dom";

function Model({ isClose, setIsClose, header, footer, children }) {
  return createPortal(
    <div
      onClick={() => {
        setIsClose(true);
      }}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 ${isClose ? "hidden" : ""}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="m-4 flex w-full max-w-2xl grow flex-col gap-4 rounded-lg bg-white p-4 shadow-lg"
      >
        {header}
        <div className="-mx-4 flex flex-wrap gap-4 border-y-2 p-4">
          {children}
        </div>
        <div className="flex justify-end gap-3">{footer}</div>
      </div>
    </div>,
    document.getElementById("portal"),
  );
}

export default Model;
