import { useEffect, useState } from "react";
import "./workshop.css";
import Table_Workshop from "../../../components/workshops/table_workshop.jsx";

function Workshop() {
  const [message, setMessage] = useState("");
  const fetchInfo = async () => {
    return await fetch("http://localhost:6300/workshops/basketball")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="workshop">
      <Table_Workshop
        sport="badminton"
        noOfRows={message.length}
        noOfColumns={3}
        rowEntries={message}
      />
    </div>
  );
}

export default Workshop;
