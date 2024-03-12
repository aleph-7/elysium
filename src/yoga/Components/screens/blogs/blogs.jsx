import { useState } from "react";
// import "../../header/Header.css";
import {blogs_data} from "./blogs_data.jsx";
import Table from "../../table.jsx";


function blogs() {
  return (

      <Table noOfRows={3} noOfColumns={3} rowEntries={blogs_data} />

  );
}

export default blogs;
