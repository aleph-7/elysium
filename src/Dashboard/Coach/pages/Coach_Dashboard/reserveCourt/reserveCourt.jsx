import React from "react";
import "./reserveCourt.css";
import Date_Time_Picker from "./../../../components/datetime/date_time_picker.jsx";
import Button from "./../../../components/buttons/Button.jsx";

const ReserveCourt = () => {
  return (
    <div>
      <div className="coach-reservecourt-container">
        <input type="text" placeholder="No. of Courts" className="workshop" />
        <Date_Time_Picker
          input_image={"../assets/—Pngtree—vector clock icon_3782163.png"}
          placeholderText={"from"}
          left={"10vw"}
          top={"210px"}
          type={"date"}
        />
        <p className="dash" style={{top:"14vh", left:"37vw"}}>-</p>
        <Date_Time_Picker
          input_image={"../assets/—Pngtree—vector clock icon_3782163.png"}
          placeholderText={"to"}
          left={"40vw"}
          top={"210px"}
          type={"date"}
        />
        <Date_Time_Picker
          input_image={"../assets/—Pngtree—vector clock icon_3782163.png"}
          placeholderText={"from"}
          left={"25vw"}
          top={"35vh"}
        />
        <div style={{position:"absolute", left: "32vw", top: "50vh"}}>
          <Button
            backgroundColor="#22992E"
            textColor={1}
            size={3}
            text="post"
          />
        </div>
      </div>
    </div>
  );
};
export default ReserveCourt;
