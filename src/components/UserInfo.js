import React from "react";
import "../styles/UserInfo.css";
import UserInfoMB from "./componentVariants.js/UserInfoMB";
import { users } from "../seedData/users";
import UserStats from "./UserStats";

const UserInfo = () => {
  const firstUser = users[0];
  return (
    <div className="flex flex-col justify-center md:px-5">
      <UserInfoMB firstUser={firstUser} />
      <div className="flex flex-col px-4 pt-4 pb-5 border-b md:hidden">
        <div className="flex">
          <div className="flex items-center rounded-full overflow-hidden border self-start">
            <img className="w-20" alt="avatar" src={firstUser.avatar_url} />
          </div>
          <div className="flex flex-col w-64 ml-6">
            <div className="flex">
              <p className="text-2xl font-light">{firstUser.username}</p>
              <div className="flex items-center space-x-4 transform -translate-y-0.5 pl-2">
                <div className="fas fa-certificate text-blue-500 relative">
                  <i className="fas fa-check text-black text-xs text-black text-2xs transform absolute right-1 text-white"></i>
                </div>
                <div className="text-xl font-bold space-x-0.5">
                  <span>&#183;</span>
                  <span>&#183;</span>
                  <span>&#183;</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-5">
              <button className="bg-blue-500 text-sm font-semibold text-white py-1.5 rounded">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-6">
          <p className="font-semibold text-sm">
            {firstUser.first_name + " " + firstUser.last_name}
          </p>
          <p className="text-gray-400 text-sm">Public Figure</p>
          <p className="text-sm">
            Husband to @DrBiden, proud father and grandfather. Ready to build
            back better for all Americans. Official account is @POTUS.
          </p>
          <a href=""></a>
        </div>
      </div>
      <UserStats />
    </div>
  );
};

export default UserInfo;
