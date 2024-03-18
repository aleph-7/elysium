import React, { useState } from "react";
import "./subbooking.css";
import SERVER_ROOT_PATH from "../../../../../config";

function PreBooking() {
  const [data, setData] = useState({});
  const [selectedTime, setSelectedTime] = useState("");
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [allowPlayerSelection, setAllowPlayerSelection] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const userid = localStorage.getItem("userMongoId");
  const sport = localStorage.getItem("type_of_sport");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (allowPlayerSelection && users.length === 0) {
      alert("Please add at least one playmate!");
      return;
    }

    const res = await fetch(SERVER_ROOT_PATH + "/badminton/pre_booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slot: selectedTime,
        type: "",
        players: users,
        user_id: userid,
        sport_type: sport,
      }),
    });

    setSelectedTime("");
    setUsers([]);
    setInputValue("");
    setAllowPlayerSelection(false);
    setShowWarning(false);
  };

  const handleSelectChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddUser = async () => {
    if (inputValue.trim() !== "") {
      const response = await fetch(
        SERVER_ROOT_PATH + "/checkUser/${inputValue}"
      );
      const data = await response.json();

      if (data.exists) {
        if (users.length < 4) {
          setUsers([...users, inputValue]);
          setInputValue("");
        } else {
          setShowWarning(true);
        }
      } else {
        setInputValue("");
        alert("User doesn't exist!");
      }
    }
  };

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  return (
    <form
      className="active-booking-form"
      onSubmit={(e) => {
        handleSubmit(e);
        e.target.reset();
      }}
    >
      <div className="booking-area">
        <div className="play-area">
          <div className="drop">
            <p className="labeeels">Time-Slot</p>
            <select
              className="drop-down"
              style={{ width: "200px" }}
              value={selectedTime}
              onChange={handleSelectChange}
            >
              <option value="6:00 - 7:00">6:00 - 7:00</option>
              <option value="7:00 - 8:00">7:00 - 8:00</option>
              <option value="8:00 - 9:00">8:00 - 9:00</option>
              <option value="16:00 - 17:00">16:00 - 17:00</option>
              <option value="17:00 - 18:00">17:00 - 18:00</option>
              <option value="18:00 - 19:00">18:00 - 19:00</option>
              <option value="19:00 - 20:00">19:00 - 20:00</option>
              <option value="20:00 - 21:00">20:00 - 21:00</option>
            </select>
          </div>
        </div>
        <div className="select">
          <p className="labeeels">Select Playmate(s)</p>
          <div>
            <input
              type="checkbox"
              checked={allowPlayerSelection}
              onChange={() => setAllowPlayerSelection(!allowPlayerSelection)}
            />
            <label>Allow Player Selection</label>
          </div>
          <div>
            {allowPlayerSelection && (
              <>
                <div className="players-list">
                  <div>
                    <input
                      className="show_cont"
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="Enter username"
                    />
                  </div>
                  <div>
                    <button
                      onClick={handleAddUser}
                      className="redButton"
                      type="button"
                    >
                      Add User
                    </button>
                  </div>
                </div>

                <ul>
                  {users.map((user, index) => (
                    <li key={index}>{user}</li>
                  ))}
                </ul>

                {showWarning && (
                  <div className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={handleCloseWarning}>
                        &times;
                      </span>
                      <p>Maximum number of entries reached!</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        {/* </div> */}
        <div className="buttonContainer">
          <button
            className="orangeButtonnn"
            onClick={() => setUsers([])}
            type="button"
          >
            Clear
          </button>
          <button className="greenButtonnn" type="submit">
            Apply
          </button>
          <br />
        </div>
      </div>
    </form>
  );
}

export default PreBooking;
