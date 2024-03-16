import { useEffect, useState } from "react";
import Table_Workshops from "../../../components/workshops/table";
import "./workshop.css";
import SERVER_ROOT_PATH from "../../../../../config.js";

function Workshop() {
  const [message, setMessage] = useState("");
  const fetchInfo = async () => {
    return await fetch(SERVER_ROOT_PATH + "/workshops/hockey")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="workshop">
      <Table_Workshops
        noOfRows={message.length}
        noOfColumns={3}
        rowEntries={message}
      />
    </div>
  );
}

export default Workshop;
