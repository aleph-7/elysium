import { useEffect, useState } from "react";
import Table from "./table.jsx";
import "./tutorial.css";

let rows = 0;
let columns = 3;
const dummyText = [
  ["topic", "author", "link"],
  ["Row 2, Col 1", "Row 2, Col 2", <button>click here!</button>],
  ["Row 3, Col 1", "Row 3, Col 2", <button>click here!</button>],
  ["Row 2, Col 1", "Row 2, Col 2", <button>click here!</button>],
  ["Row 3, Col 1", "Row 3, Col 2", <button>click here!</button>],
  ["Row 2, Col 1", "Row 2, Col 2", <button>click here!</button>],
  ["Row 3, Col 1", "Row 3, Col 2", <button>click here!</button>],
];
function Tutorial() {
  const [message, setMessage] = useState("");
  const fetchInfo = async () => {
    return await fetch("http://localhost:6300/tutorials")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  useEffect(() => {
    fetchInfo();

    // console.log(message);
    // let rowEntries = [];
    // rowEntries.push(["topic", "author", "link"]);
    // for (let i = 0; i < message.length; i++) {
    //   rowEntries[i].push(message[i]);
    // }
  }, []);

  return (
    <div className="tutorial">
      <Table
        noOfRows={message.length}
        noOfColumns={columns}
        rowEntries={message}
      />
      {/* <h1>{message}</h1> */}
    </div>
  );
}

export default Tutorial;
