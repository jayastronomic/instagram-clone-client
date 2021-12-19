import React from "react";
import Suggestions from "./Suggestions";
import Feed from "./Feed";

const Home = (props) => {
  return (
    <div>{props.followings.length === 0 ? <Suggestions /> : <Feed />}</div>
  );
};

export default Home;
