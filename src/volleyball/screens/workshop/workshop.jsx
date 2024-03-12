import { useEffect, useState } from "react";
import Table from "./table.jsx";
import "./workshop.css";

function Workshop() {
  const [message, setMessage] = useState("");
  const fetchInfo = async () => {
    return await fetch("http://localhost:6300/volleyball/workshops")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="workshop">
      <Table noOfRows={message.length} noOfColumns={3} rowEntries={message} />
    </div>
  );
}

export default Workshop;
