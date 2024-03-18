import React from "react";
import { useState, useEffect } from "react";
// import ReactDOM from 'react-dom/client';
import SelfHelpPost from "./self_help_post.jsx";
import Header from "../Header.jsx";
import image_url_post from "../assets/postheadlineauthorimage.png";
import SERVER_ROOT_PATH from "../../../config.js";

function Self_help() {
  const [message, setMessage] = useState({
    title: "",
    content: "",
    counsellor_username: "",
  });
  const fetchInfo = async () => {
    return await fetch(SERVER_ROOT_PATH + "/self_help")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  console.log(message);
  useEffect(() => {
    fetchInfo();
  }, []);

  const image_url = image_url_post;
  const headline = message.title;
  const content = message.content;
  const author = message.counsellor_username;

  return (
    <div>
      <Header></Header>
      <SelfHelpPost
        image_url={image_url}
        headline={headline}
        content={content}
        author={author}
      />
    </div>
  );
}
export default Self_help;
