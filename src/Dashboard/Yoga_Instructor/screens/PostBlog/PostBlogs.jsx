import React, { useState } from "react";
import "./PostBlogs.css";
function PostBlog() {
  const handleClick = () => {
    // Add your button click event handler here
  };
  const buttonLocation = {
    position: "relative",
    top: "50px",
    right: "-500px",
  };
  return (
    <div className="yoga-postblog-container">
      <div className="title">new blog</div>
      <div className="input-container">
        <input type="text" className="session_name" placeholder="title" />
        <div>
          <input type="text" className="content_1" placeholder="content" />
        </div>
        <div className="button-container"></div>
      </div>
    </div>
  );
}

export default PostBlog;
