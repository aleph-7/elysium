import { useEffect, useState } from "react";
import Table from "./table.jsx";
import "./tutorial.css";

function Tutorial() {
  const [message, setMessage] = useState("");
  const fetchInfo = async () => {
    return await fetch("http://localhost:6300/tutorials")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="tutorial">
      <Table noOfRows={message.length} noOfColumns={3} rowEntries={message} />
    </div>
  );
}

export default Tutorial;
