import { useState, useEffect } from "react";
import Table from "./table copy";
import React from "react";
import Button from "./button";
import "./page3.css";
import SERVER_ROOT_PATH from "../../../config";

const page3 = () => {
  const [message, setMessage] = useState("");
  const fetchInfo = async () => {
    return await fetch(
      SERVER_ROOT_PATH +
        "/counsellor_page_user_3/?patient_id=" +
        localStorage.getItem("userMongoId")
    )
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  };
  useEffect(() => {
    fetchInfo();
    console.log(message);
  }, []);
  return (
    <Table noOfRows={message.length} noOfColumns={4} rowEntries={message} />
  );
};

export default page3;
