import Table from "./table";
import React from 'react'

const page1 = () => {
  return (
    <Table noOfRows={4} noOfColumns={3} rowEntries={[["name of the counsellor","Dates","Timings"],
    ["Gottupulla Venkata Aman","MWF","11:00am-5:30pm"],
    ["Aditi Khandelia","TThF","11:00am-5:30pm"],
    ["Arush Upadhayaya","WThF","11:00am-5:30pm"]]}></Table>
  )
}

export default page1