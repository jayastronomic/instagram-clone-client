import React from "react";
import { Outlet } from "react-router";
import "../styles/Nav.css";

const Nav = () => {
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
          <div className="flex items-center text-2xl space-x-6">
            <i class="fas fa-home"></i>
            <i class="fab fa-facebook-messenger"></i>
            <i class="far fa-plus-square"></i>
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user-circle"></i>
          </div>
        </section>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
