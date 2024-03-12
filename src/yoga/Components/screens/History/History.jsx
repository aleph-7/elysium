import { useState } from "react";
// import "../../header/Header.css";
import {History_data} from "./History_data.jsx";
import Table from "../../table.jsx";



function History() {
  return (
  
    <Table noOfRows={4} noOfColumns={4} rowEntries={History_data} />
   
  );
}

export default History;
