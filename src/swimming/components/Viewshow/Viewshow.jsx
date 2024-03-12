import React from "react";
import "./viewshow.css";

const Viewshow = () => {
  return (
    <div className="Viewshow">
      <div className="wrapper">
        <h3>pool membership</h3>
        <div className="wrapper2">
          <h3>kushagra srivastava</h3>

          <p>
            valid for the month of
            <span style={{ fontWeight: "bold" }}> March 2024</span>
          </p>
        </div>
      </div>
      <img className="img2" src="https://media.licdn.com/dms/image/D5603AQEb5WQt18VDNg/profile-displayphoto-shrink_400_400/0/1665764834666?e=1714608000&v=beta&t=Myj5poesLSRJglBPh_gYEG04hgiGe0iuylN_veYldyk"></img>
    </div>
  );
};

export default Viewshow;