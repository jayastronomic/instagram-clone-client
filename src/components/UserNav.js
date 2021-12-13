import React from "react";
import InstaTagLogo from "../icons/instatag.svg";

const UserNav = () => {
  return (
    <div className="md:flex md:justify-center md:border-t md:pt-1.5 md:pb-2">
      <div className="flex justify-around border-t border-b py-2 md:border-b-0 md:border-t-0 md:space-x-14">
        <div className="flex items-center  md:space-x-2">
          <i className="text-xl fas fa-th text-gray-500 md:text-xs"></i>
          <p className="hidden md:block text-xs font-semibold tracking-wider text-gray-500">
            POSTS
          </p>
        </div>
        <div className="flex items-center md:space-x-2">
          <i className="text-2xl far fa-play-circle text-gray-500 md:text-sm"></i>
          <p className="hidden md:block text-xs font-semibold tracking-wider text-gray-500">
            VIDEOS
          </p>
        </div>
        <div className="flex items-center md:space-x-2">
          <img className="w-6 md:w-3" alt="" src={InstaTagLogo} />
          <p className="hidden md:block text-xs font-semibold tracking-wider text-gray-500">
            TAGGED
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
