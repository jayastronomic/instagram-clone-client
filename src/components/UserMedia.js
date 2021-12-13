import React from "react";
import PhotosContainer from "../containers/PhotosContainer";
import UserNav from "./UserNav";

const UserMedia = (props) => {
  return (
    <div>
      <UserNav />
      <PhotosContainer photos={props.photos} />
    </div>
  );
};

export default UserMedia;
