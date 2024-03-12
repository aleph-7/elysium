import { useEffect, useState } from "react";
import Table from "./table.jsx";
import "./tutorial.css";

let rows = 0;
let columns = 3;

function Tutorial() {
  const [message, setMessage] = useState("");
  const fetchInfo = async () => {
    return await fetch("http://localhost:6300/table_tennis/tutorials")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="tutorial">
      <Table
        noOfRows={message.length}
        noOfColumns={columns}
        rowEntries={message}
      />
    </div>
  );
}

export default Tutorial;
