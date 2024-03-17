import React, { useState, useEffect } from "react";
import "./History.css";
import Table_History from "./components/table.jsx";
import Greeting from "./components/greeting.jsx";
import Header from "../../Header.jsx";
const Name = "kushagra";
const Message = "YOUR BOOKING HISTORY";

const History = () => {
  const [message, setMessage] = useState("");
  console.log(localStorage.getItem("userMongoId"));
  const fetchInfo = async () => {
    return await fetch("http://localhost:6300/user/get_booking_history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("userMongoId"),
      }),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };
  console.log(message);

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div>
      <Header />
      <Greeting Name={Name} />
      <Heading Message={Message} />
      <Table_History
        noOfRows={message.length}
        noOfColumns={3}
        rowEntries={message}
      />
    </div>
  );
};

export default History;
