//Install react-datepicker library
//command : npm install react-datepicker

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./reactDatepicker.css";
import styled, { css, createGlobalStyle } from "styled-components";

const DatePickerWrapperStyles = createGlobalStyle`
    .date_picker.full-width {
        width: 100%;
    }
`;

const ReactDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const minDate = new Date();
  const maxDate = new Date();
  return (
    <div className="reactDatePicker">
      <DatePicker
        //inline
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="DD/MM/YYYY"
        minDate={minDate}
      ></DatePicker>
    </div>
  );
};

export default ReactDatepicker;
