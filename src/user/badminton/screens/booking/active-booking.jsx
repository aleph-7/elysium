import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./subbooking.css";

// function SearchInput({ onSearch }) {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       onSearch(query);
//     }
//   };

//   return (
//     <div className = "search">
//       <input
//         type="text"
//         value={query}
//         onChange={handleInputChange}
//         onKeyPress={handleKeyPress}
//         placeholder="lookup"
//         className="searchInput"
//       />
//       <AiOutlineSearch onClick={() => onSearch(query)} className="searchIcon" />
//     </div>
//   );
// }

function UserList() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddUser = () => {
    if (inputValue.trim() !== "") {
      setUsers([...users, inputValue]);
      setInputValue("");
    }
  };

  return (
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
          <button onClick={handleAddUser} className="redButton">
            Add User
          </button>
        </div>
      </div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}

function ActiveBooking() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSearch = (query) => {
    // Example: Perform search operation, and set search results
    setSearchResults([
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
      { id: 3, name: "User 3" },
    ]);
  };

  const handleAddItem = (user) => {
    setSelectedUsers([...selectedUsers, user]);
  };

  const [data, setData] = useState({});

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
    const res = await fetch("http://localhost:6300/badminton/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slot: selectedTime,
        type: "active",
        players: users,
        user_id: userid,
        sport_type: sport,
      }),
    });
  };

  const [selectedTime, setSelectedTime] = useState("");

  const handleSelectChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddUser = () => {
    if (inputValue.trim() !== "") {
      if (users.length < 4) {
        setUsers([...users, inputValue]);
        setInputValue("");
      } else {
        setShowWarning(true);
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
                <button onClick={handleAddUser} className="redButton">
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
          </div>
        </div>

        <div className="buttonContainer">
          <button
            className="orangeButtonnn"
            onClick={() => setSelectedUsers([])}
          >
            Clear
          </button>
          <button className="greenButtonnn">Apply</button>
          <br />
        </div>
      </div>
    </form>
  );
}

// function UserSelector({ onSelect }) {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleButtonClick = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleUserSelection = (user) => {
//     onSelect(user);
//     setShowDropdown(false);
//   };

//   return (
//     <div className="userSelector">
//       <button className="redButton" onClick={handleButtonClick}>
//         Add User
//       </button>
//       {showDropdown && (
//         <div className="dropdownMenu2">
//           {/* Replace with your user list */}
//           <div onClick={() => handleUserSelection("User 1")}>User 1</div>
//           <div onClick={() => handleUserSelection("User 2")}>User 2</div>
//           <div onClick={() => handleUserSelection("User 3")}>User 3</div>
//         </div>
//       )}
//     </div>
//   );
// }

// function UserPrinter({ users }) {
//   return (
//     <div className="printer">
//       {users.map((user, index) => (
//         <div key={index}>
//           {user}
//         </div>
//       ))}
//     </div>
//   );
// }

export default ActiveBooking;
