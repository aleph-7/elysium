import { useEffect, useState } from "react";
import Table_Tutorial from "../../../components/tutorials/table.jsx";
import "./tutorial.css";
import SERVER_ROOT_PATH from "../../../../../config.js";

function Tutorial() {
  const [message, setMessage] = useState("");
  const fetchInfo = async () => {
    return await fetch(SERVER_ROOT_PATH + "/tutorials/tennis")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="tutorial">
      <Table_Tutorial
        noOfRows={message.length}
        noOfColumns={3}
        rowEntries={message}
      />
    </div>
  );
}

export default Tutorial;
