import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Model from "./Model";

function Header() {
  const [isClose, setIsClose] = useState(true);

  return (
    <header className="flex items-center justify-between px-4 py-4 shadow-md md:px-8">
      <NavLink to="/">
        <img className="w-8" src="src\Vite.js.png" alt="logo" />
      </NavLink>

      <ul className="flex gap-5 font-medium">
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) return "font-semibold text-blue-700 underline";
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) return "font-semibold text-blue-700 underline";
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) return "font-semibold text-blue-700 underline";
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => {
              setIsClose(false);
            }}
          >
            Sign In
          </button>

          <Model
            isClose={isClose}
            setIsClose={setIsClose}
            header={<div className="text-xl font-bold">Sign In</div>}
            footer={
              <>
                <button
                  onClick={() => {
                    setIsClose(true);
                  }}
                  className="rounded-md bg-gray-300 px-3 py-0.5 hover:bg-gray-400/80"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsClose(true);
                  }}
                  className="rounded-md bg-blue-300 px-3 py-0.5 hover:bg-blue-400/80"
                >
                  Sign In
                </button>
              </>
            }
          >
            <input
              type="text"
              placeholder="Username"
              className="grow rounded border-2 border-gray-600 px-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="grow rounded border-2 border-gray-600 px-2"
            />
          </Model>
        </li>
      </ul>
    </header>
  );
}

export default Header;
