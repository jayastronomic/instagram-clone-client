import React, { useEffect, useState } from "react";
import "../styles/UserProfile.css";
import UserInfo from "./UserInfo";
import UserMedia from "./UserMedia";

import { photos } from "../seedData/photos";

const UserProfile = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-58-half-rem md:px-5 lg:px-0">
        <UserInfo />
        <UserMedia photos={photos} />
      </div>
    </div>
  );
};

export default UserProfile;
