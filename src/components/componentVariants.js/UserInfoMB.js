import React from "react";

const UserInfoMB = (props) => {
  return (
    <div className="hidden md:flex md:pt-8 md:pb-11 md:pl-12">
      <div className="flex w-5/12">
        <div className="flex items-center rounded-full border overflow-hidden self-start  ">
          <img className="w-36" alt="avatar" src={props.firstUser.avatar_url} />
        </div>
      </div>

      <div className="flex flex-col pl-6">
        {/* First Row */}
        <div className="flex items-center">
          <p className="text-2xl font-light">{props.firstUser.username}</p>
          <div className="fas fa-certificate text-blue-500 relative pl-2">
            <i className="fas fa-check text-black text-xs text-black text-2xs transform absolute right-1 text-white"></i>
          </div>
          <div className="pl-4">
            <button className="bg-blue-500 text-sm font-semibold text-white py-1.5 rounded px-6">
              Follow
            </button>
          </div>
          <div className="pl-2">
            <button className="bg-blue-500 text-sm font-semibold text-white py-1.5 rounded px-3">
              <i class="fas fa-chevron-down"></i>
            </button>
          </div>
          <div className="text-xl font-bold space-x-0.5 pl-4">
            <span>&#183;</span>
            <span>&#183;</span>
            <span>&#183;</span>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex pt-6 space-x-10">
          <span>
            <span className="font-semibold">780</span> posts
          </span>
          <span>
            <span className="font-semibold">17.8m</span> followers
          </span>
          <span>
            {" "}
            <span className="font-semibold">5</span> following
          </span>
        </div>
        {/* Third Row */}
        <div className="flex flex-col pt-6">
          <p className="font-semibold">
            {props.firstUser.first_name + " " + props.firstUser.last_name}
          </p>

          <p className="">
            Husband to @DrBiden, proud father and grandfather. Ready to build
            back better for all Americans. Official account is @POTUS.
          </p>
          <p>vaccines.gov</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoMB;
