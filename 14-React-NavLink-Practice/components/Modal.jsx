import React from "react";
import { createPortal } from "react-dom";

function Modal({ setIsOpen }) {
  return createPortal(
    <div
      onClick={() => {
        setIsOpen(false);
      }}
      className="fixed inset-0 flex items-center justify-center bg-black/40 px-4"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-2xl grow rounded-lg bg-white p-4 shadow-lg"
      >
        <div className="text-xl font-bold">Sign In</div>
        <div className="-mx-4 my-3 flex flex-wrap gap-4 border-y px-4 py-4">
          <input
            placeholder="Username"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="text"
          />
          <input
            placeholder="Password"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="password"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#portal"),
  );
}

export default Modal;
