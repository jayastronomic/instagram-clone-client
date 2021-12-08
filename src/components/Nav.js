import React from "react";
import { Outlet } from "react-router";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="relative flex justify-center px-6 py-2 border-b ">
        <section className="flex justify-between items-center w-rem">
          <div>
            <p className="billabong text-4xl">Instagram</p>
          </div>
          <div className="relative hidden sm:block">
            <input
              className="focus:outline-none border border-gray-300 rounded-sm ig-bg text-sm py-0.5 pl-8 w-52"
              placeholder="Search"
            />
            <i className="absolute text-gray-400 fa-xs fa fa-search left-4 top-2" />
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
