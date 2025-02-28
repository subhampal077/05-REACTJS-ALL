import React, { useState } from "react";
import viteLogo from "../Vite.js.png";
import { NavLink } from "react-router";
import Modal from "./Modal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-4 shadow-md md:px-6">
      <img src={viteLogo} alt="vite-logo" className="w-8" />

      <ul className="flex gap-5">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Sign In
          </button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
        </li>
      </ul>
    </header>
  );
}

export default Header;
