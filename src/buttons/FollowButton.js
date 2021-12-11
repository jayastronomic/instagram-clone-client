import React from "react";

const FollowButton = (props) => {
  return (
    <button
      onClick={() => props.onClick()}
      className="self-center bg-blue-500 text-white font-semibold rounded text-sm py-1.5 px-2.5"
    >
      Follow
    </button>
  );
};

export default FollowButton;
