import React from "react";
import ig from "../assets/ig.jpg";

const SuggestionCard = () => {
  return (
    <div className="flex w-full justify-between px-4 py-1.5 bg-white border-l border-r">
      <div className="flex space-x-2.5">
        <div className="flex items-center rounded-full overflow-hidden border self-center">
          <img className="w-11" alt="ig" src={ig} />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">instagram</p>
          <p className="text-sm text-gray-400">Instagram</p>
          <p className="text-xs text-gray-400">Instagram Official Account</p>
        </div>
      </div>
      <div className="flex">
        <button className="self-center bg-blue-500 text-white font-semibold rounded text-sm py-1.5 px-2.5">
          Follow
        </button>
      </div>
    </div>
  );
};

export default SuggestionCard;
