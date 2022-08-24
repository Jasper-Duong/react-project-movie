import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
export default function Header() {
  const homeLinkClassName =
    "flex items-center px-4 -mb-1 border-b-2 border-transparent homeLink";
  return (
    <header className="p-4 bg-gray-100 text-gray-800 fixed w-100 homeHeader">
      <div className="container grid grid-cols-4 h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          aria-label="Back to homepage"
          className="flex items-center col-span-1"
          to='/'
        >
          <i className="icofont-movie homeLogo"></i>
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex justify-center col-span-2">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              className={({ isActive }) =>
                isActive
                  ? homeLinkClassName + " activeHomeLink"
                  : homeLinkClassName
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              className={({ isActive }) =>
                isActive
                  ? homeLinkClassName + " activeHomeLink"
                  : homeLinkClassName
              }
              to="news"
            >
              News
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              className={({ isActive }) =>
                isActive
                  ? homeLinkClassName + " activeHomeLink"
                  : homeLinkClassName
              }
              to="contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex col-span-1">
          <NavLink
            to="sign-in"
            className="self-center px-8 py-3 rounded homeSignIn font-semibold text-gray-50"
          >
            Sign in
          </NavLink>
          <NavLink
            to="sign-up"
            className="self-center px-8 py-3 font-semibold rounded homeSignUp"
          >
            Sign up
          </NavLink>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
