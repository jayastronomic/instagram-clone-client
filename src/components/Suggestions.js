import React from "react";
import "../styles/Suggestions.css";
import SuggestionsContainer from "../containers/SuggestionsContainer";
import { users } from "../seedData/users";
const Suggestions = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-rem">
        <p className="font-semibold text-gray-800 pt-6 pb-2.5">
          Suggestions For You
        </p>
        <SuggestionsContainer users={users} />
      </div>
    </div>
  );
};

export default Suggestions;
