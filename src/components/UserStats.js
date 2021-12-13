import React from "react";

const UserStats = () => {
  return (
    <div className="flex justify-around pt-3 pb-2.5 md:hidden">
      <div className="flex flex-col items-center pl-2">
        <p className="font-semibold text-sm">7,200</p>
        <p className="text-gray-500 text-sm">posts</p>
      </div>
      <div className="flex flex-col items-center pl-2">
        <p className="font-semibold text-sm">98m</p>
        <p className="text-gray-500 text-sm">followers</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-sm">1</p>
        <p className="text-gray-500 text-sm">following</p>
      </div>
    </div>
  );
};

export default UserStats;
