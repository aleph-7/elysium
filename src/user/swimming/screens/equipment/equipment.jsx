import React, { useState, useRef } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import "./equipment.css";

function EquipmentSelector({ onSelect }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const equipments = ["cork", "badminton racket"];

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleEquipmentSelection = (equipment) => {
    onSelect(equipment);
    setShowDropdown(false);
  };

  const calculateDropdownPosition = () => {
    const buttonRect = dropdownRef.current.getBoundingClientRect();
    return {
      top: buttonRect.bottom - 170, // Adjust the spacing here
      left: buttonRect.left - 130,
    };
  };

  return (
    <div className="equipmentSelector">
      <button className="redButton" onClick={handleButtonClick} ref={dropdownRef}>
        <AiOutlinePlus /> Add Equipment
      </button>
      {showDropdown && (
        <div className="dropdownMenu" style={calculateDropdownPosition()}>
          {equipments.map((equipment, index) => (
            <div key={index} onClick={() => handleEquipmentSelection(equipment)}>
              {equipment}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function countUniqueEntries(list) {
  const uniqueCount = {};
  list.forEach(item => {
    if (uniqueCount[item]) {
      uniqueCount[item]++;
    } else {
      uniqueCount[item] = 1;
    }
  });
  return uniqueCount;
}

function EquipmentPrinter({ equipments }) {
  const counts = countUniqueEntries(equipments);

  return (
    <div>
      {Object.keys(counts).map((equipment, index) => (
        <div key={index}>
          {equipment} (x{counts[equipment]})
        </div>
      ))}
    </div>
  );
}

function Page5() {
  const [selectedEquipments, setSelectedEquipments] = useState([]);

  const handleEquipmentSelection = (equipment) => {
    setSelectedEquipments([...selectedEquipments, equipment]);
  };

  const handleClear = () => {
    setSelectedEquipments([]);
  };

  return (
    <div className="container">
      <div className="select">
        <p className="labels">Corresponding Booking</p>
        <select className="drop-down" style={{ width: '300px' }}>
            <option>today, 5:30pm</option>
        </select>
      </div>
      <div className="select">
        <p className="labels">Select Equipment(s)</p>
        <div className="show_cont" style={{ width: '300px', padding: '8px', marginLeft: "35px"}}>
          <EquipmentPrinter equipments={selectedEquipments} />
        </div>
        <EquipmentSelector onSelect={handleEquipmentSelection} />
      </div>
      <div className="buttonContainer">
        <button className="orangeButtonnn" onClick={handleClear}>Clear</button>
        <button className="greenButtonnn">Apply</button>
        <br/>
      </div>
    </div>
  );
}

export default Page5;
