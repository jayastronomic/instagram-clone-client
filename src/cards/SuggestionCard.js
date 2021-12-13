import React, { useState } from "react";
import ig from "../assets/ig.jpg";
import { Link } from "react-router-dom";
import FollowButton from "../buttons/FollowButton";
import FollowingButton from "../buttons/FollowingButton";

const SuggestionCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="flex w-full justify-between px-4 py-1 bg-white border-l border-r">
      <div className="flex space-x-2.5">
        <div className="flex items-center rounded-full overflow-hidden border self-center">
          <img className="w-11" alt="ig" src={props.user.avatar_url} />
        </div>
        <div className="flex flex-col">
          <Link
            to={`/${props.user.username}`}
            className="text-sm font-semibold hover:underline"
          >
            {props.user.username}
          </Link>
          <p className="text-sm text-gray-400">
            {props.user.first_name + " " + props.user.last_name}
          </p>
          <p className="text-xs text-gray-400">Instagram Official Account</p>
        </div>
      </div>

      <div className="flex">
        {isClicked ? (
          <FollowingButton onClick={onClick} />
        ) : (
          <FollowButton onClick={onClick} />
        )}
      </div>
    </div>
  );
};

export default SuggestionCard;
