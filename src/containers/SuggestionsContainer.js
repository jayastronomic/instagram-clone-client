import React from "react";
import SuggestionCard from "../cards/SuggestionCard";

const SuggestionsContainer = (props) => {
  return (
    <div className="flex flex-col border-t bg-white h-screen pt-2">
      {props.users.map((user) => {
        return <SuggestionCard user={user} key={user.id} />;
      })}
    </div>
  );
};

export default SuggestionsContainer;
