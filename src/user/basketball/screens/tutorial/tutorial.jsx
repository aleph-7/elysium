import { useEffect, useState } from "react";
import Table from "./table.jsx";
import "./tutorial.css";
import SERVER_ROOT_PATH from "../../../../../config.js";

let rows = 0;
let columns = 3;

function Tutorial() {
  const [message, setMessage] = useState("");
  const fetchInfo = async () => {
    return await fetch(SERVER_ROOT_PATH + "/basketball/tutorials")
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
