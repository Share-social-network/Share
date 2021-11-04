import React from "react";
import Nave from "./Nav";
import Post from "./Post";
import Uposts from "./Uposts";

function feed() {
  return (
    <div>
      <Post />
      <Uposts />
    </div>
  );
}

export default feed;
