import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

import ProfileDropdown from "./ProfileDropdown";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-center px-6 py-2.5 border-b bg-white">
        <section className="flex justify-between items-center w-59">
          <div>
            <p className="billabong text-4xl">Instagram</p>
          </div>
          <div className="w-full hidden sm:flex justify-center mr-4">
            <div className="relative">
              <input
                className="focus:outline-none border border-gray-300 rounded-sm ig-bg text-sm py-1.5 pl-8 w-64"
                placeholder="Search"
              />
              <i className="absolute text-gray-400 fa-xs fa fa-search left-4 top-3" />
            </div>
          </div>
          <div className="relative flex items-center text-2xl space-x-6 pr-0.5">
            <Link to="" className="fas fa-home"></Link>
            <Link to="" className="fab fa-facebook-messenger"></Link>
            <Link to="" className="far fa-plus-square"></Link>
            <Link to="" className="far fa-compass"></Link>
            <Link to="" className="far fa-heart"></Link>
            {(isOpen && (
              <i className="far fa-user-circle rounded-full ring-1 ring-black"></i>
            )) || (
              <i
                onClick={() => setIsOpen(true)}
                className="far fa-user-circle  "
              ></i>
            )}{" "}
            {isOpen && <ProfileDropdown setIsOpen={setIsOpen} />}
          </div>
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="inset-0 fixed"
            ></div>
          )}
        </section>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
