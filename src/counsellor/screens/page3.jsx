import Table from "./table";
import React from 'react'
import Button from "./button";
import "./page3.css";


const page3 = () => {



  return (
    <Table noOfRows={4} noOfColumns={4} rowEntries={[["name of the counsellor","Date","Time","Status"],
    ["Gottupulla Venkata Aman","07/02/2024","3:00pm",<Button backgroundColor={"#22992E"} size={2} textColor={1} text={"accepted"}/>],
    ["Aditi Khandelia","08/02/2024","2:00pm",<Button backgroundColor={"#D90000"} size={2} textColor={1} text={"rejected"}/>],
    ["Arush Upadhayaya","07/02/2024","3:00pm",<Button backgroundColor={"#FF820E"} size={2} textColor={1} text={"pending"}/>]]}></Table>
  )
}

export default page3