import React from "react";
import "../styles/ProfileDropdown.css";

const ProfileDropdown = () => {
  return (
    <div className="absolute top-7 left-8 z-10">
      {/* Triangle Point */}
      <div className="flex flex-row-reverse pr-4">
        <div className="pt-3 h-3 overflow-hidden">
          <div className="bg-white h-8 w-10 dd-shadow-point transform rotate-45"></div>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded dd-shadow dd-w">
        <div className="flex items-center py-1.5 transition hover:bg-gray-100 rounded-t pl-4">
          <i className="far fa-user-circle text-base" />
          <span className="text-sm pl-3">Profile</span>
        </div>
        <div className="flex items-center py-1.5 transition hover:bg-gray-100 pl-4">
          <i className="far fa-bookmark text-base" />
          <span className="text-sm pl-3">Saved</span>
        </div>
        <div className="flex items-center py-1.5 transition hover:bg-gray-100 pl-4">
          <i className="fas fa-cog text-base" />
          <span className="text-sm pl-3">Settings</span>
        </div>
        <div className="flex items-center py-1.5 transition hover:bg-gray-100 pl-4">
          <i className="fas fa-sync text-base" />
          <span className="text-sm pl-3">Switch Accounts</span>
        </div>
        <div className="border-t py-2.5 transition hover:bg-gray-100 rounded-b pl-4 text-sm">
          Log Out
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
