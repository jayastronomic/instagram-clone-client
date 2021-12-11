import React from "react";

const FollowingButton = (props) => {
  return (
    <button
      onClick={() => props.onClick()}
      className="self-center font-semibold rounded text-sm py-1.5 px-2.5 border border-gray-300"
    >
      Following
    </button>
  );
};

export default FollowingButton;
