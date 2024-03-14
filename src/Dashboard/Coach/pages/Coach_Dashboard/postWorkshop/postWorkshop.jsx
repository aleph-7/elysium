import React from "react";
import "./postWorkshop.css";
import Date_Time_Picker from "../../../components/datetime/date_time_picker.jsx";
import Button from "../../../components/buttons/Button.jsx";
// import Header from "../../../header/Header.jsx";
// import Taskbar from "../../../components/taskbar/Taskbar.jsx";

const PostWorkshop = () => {
  return (
    <div>
      <div className="containeer">
        <input type="text" placeholder="workshop name" className="workshop" />
        <Date_Time_Picker
          input_image={"../assets/—Pngtree—vector clock icon_3782163.png"}
          placeholderText={"from"}
          left={"10vw"}
          top={"210px"}
          type={"date"}
        />
        <p className="dash" style={{ top: "137px", left: "37vw" }}>
          -
        </p>
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
          left={"10vw"}
          top={"300px"}
        />
        <p className="dash" style={{ top: "207px", left: "37vw" }}>
          -
        </p>
        <Date_Time_Picker
          input_image={"../assets/—Pngtree—vector clock icon_3782163.png"}
          placeholderText={"to"}
          left={"40vw"}
          top={"300px"}
        />
        <div style={{ position: "absolute", left: "26vw", top: "400px" }}>
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
// style={{ left: "33px", top: "93px" }}
export default PostWorkshop;
