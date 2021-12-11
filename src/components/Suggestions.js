import React from "react";
import "../styles/Suggestions.css";
import SuggestionCard from "../cards/SuggestionCard";
const Suggestions = () => {
  const array = Array.from(Array(78).keys());

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-rem">
        <p className="font-semibold text-gray-800 pt-6 pb-2.5">
          Suggestions For You
        </p>
        <div className="flex flex-col border-t bg-white h-screen pt-1">
          {array.map((item) => {
            return <SuggestionCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
