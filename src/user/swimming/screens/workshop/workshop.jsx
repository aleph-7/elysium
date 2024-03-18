import { useEffect, useState } from "react";
import "./workshop.css";
import Table_Workshop from "../../../components/workshops/table_workshop.jsx";
import SERVER_ROOT_PATH from "../../../../../config.js";

function Workshop() {
  const [message, setMessage] = useState("");
  const fetchInfo = async () => {
    return await fetch(SERVER_ROOT_PATH + "/workshops/swimming")
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
