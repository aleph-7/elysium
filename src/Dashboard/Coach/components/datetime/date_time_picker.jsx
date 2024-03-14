import React, { useState, useRef, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";
// import dayjs, { Dayjs } from 'dayjs';
import "./date_time.css";
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function Date_Time_Picker({ placeholderText, top, left, type }) {
  const [date, setDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  if (type === "date") {
    return (
      <div className="date_time_picker" style={{ top: top, left: left }}>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
          // isClearable
          showYearDropdown
          scrollableMonthYearDropdown
          customInput={<input type="text" className="custom_in" />}
        />
      </div>
    );
  } else {
    return (
      <div className="date_time_picker" style={{ top: top, left: left }}>
        {/* <TimePicker onChange={onChange} value={value} format="hh" isOpen="true"
          hourPlaceholder="hh" maxDetail="hour" 
        /> */}
        {/* <img
          src={input_image}
          onClick={() => console.log("clicked")}
          style={{
            position: "absolute",
            width: "30px",
            height: "90px",
            left: "13px",
          }}
        /> */}
        <select className="time_input" style={{ width: "24vw" }}>
          <option>6:00am-7:00am</option>
          <option>7:00am-8:00am</option>
          <option>8:00am-9:00am</option>
          <option>5:00pm-6:00pm</option>
          <option>6:00pm-7:00pm</option>
          <option>7:00pm-8:00pm</option>
          <option>8:00pm-9:00pm</option>
        </select>
      </div>
    );
  }
}

export default Date_Time_Picker;
