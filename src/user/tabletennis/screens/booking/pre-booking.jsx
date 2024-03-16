import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import "./subbooking.css";

function SearchInput({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div className = "search">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="lookup"
        className="searchInput"
      />
      <AiOutlineSearch onClick={() => onSearch(query)} className="searchIcon" />
    </div>
  );
}

function Prebooking() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSearch = (query) => {
    // Example: Perform search operation, and set search results
    setSearchResults([
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
    ]);
  };

  const handleAddItem = (user) => {
    setSelectedUsers([...selectedUsers, user]);
  };

  return (
    <div className="booking-area">
      <div className = "play-area">
      <div className="drop">
        <p className="labeeels">Time-Slot</p>
        <select className="drop-down" style={{ width: '200px' }}>
            <option>5:30pm</option>
        </select>
        <p className="labeeels"> Playmate(s)? </p>
        <input type="checkbox" />
        
        </div>
        </div>
      <div className="select">
          <p className="labeeels">Select Playmate(s)</p>
           <div className="show_cont">
            <UserPrinter users={selectedUsers} />
          </div>
        </div>
       
        <div className="inputContainer">
            <SearchInput onSearch={handleSearch} />
            <UserSelector onSelect={handleAddItem} />
          </div>
        <div className="buttonContainer">
          <button className="orangeButtonnn" onClick={() => setSelectedUsers([])}>Clear</button>
          <button className="greenButtonnn">Apply</button>
          <br/>
      </div>
    </div>
  );
}

function UserSelector({ onSelect }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleUserSelection = (user) => {
    onSelect(user);
    setShowDropdown(false);
  };

  return (
    <div className="userSelector">
      <button className="redButton" onClick={handleButtonClick}>
        Add User
      </button>
      {showDropdown && (
        <div className="dropdownMenu1">
          {/* Replace with your user list */}
          <div onClick={() => handleUserSelection("User 1")}>User 1</div>
          <div onClick={() => handleUserSelection("User 2")}>User 2</div>
          <div onClick={() => handleUserSelection("User 3")}>User 3</div>
        </div>
      )}
    </div>
  );
}

function UserPrinter({ users }) {
  return (
    <div className="printer">
      {users.map((user, index) => (
        <div key={index}>
          {user}
        </div>
      ))}
    </div>
  );
}

export default Prebooking;
