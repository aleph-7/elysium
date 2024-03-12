import { useState } from "react";
// import "../../header/Header.css";
import Table from "../../table.jsx";
import {Slots_data} from "./Slots_data.jsx";



function Slots() {
  return (
    <Table noOfRows={4} noOfColumns={5} rowEntries={Slots_data} />
  );
}

export default Slots;
