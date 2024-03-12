import React from 'react';
import './page2.css'; // Import the CSS file
import Button from './button';

function page2() {
  return (
    <div id="page" className="page-container">
      {/* Counsellor sec */}
      <div className="sec">
        <p className="labels">Counsellor</p>
        <select className="input" style={{ width: '500px' }}>
          <option>Gottupulla Venkata Aman</option>
        </select>
      </div>

      {/* Date of appointment sec */}
      <div className="sec">
        <p className="labels">Date of appointment</p>
        <select className="input" style={{ width: '200px' }}>
          <option>Date</option>
        </select>
      </div>

      {/* Preferred time sec */}
      <div className="sec">
        <p className="labels">Preferred time</p>
        <input type="text" className="input" style={{ width: '120px' }} defaultValue="3pm" />
        <p className="labels" style={{ margin: '0 10px' }}>to</p>
        <input type="text" className="input" style={{ width: '120px' }} defaultValue="5pm" />
      </div>

      {/* Program, Department, Hall sec */}
      <div className="sec">
        <p className="labels">program:</p>
        <input type="text" className="input" style={{ width: '50px' }} defaultValue="Btech" />
        <p className="labels" style={{ marginLeft: '100px' }}>department:</p>
        <input type="text" className="input" style={{ width: '50px' }} defaultValue="CSE" />
        <p className="labels" style={{ marginLeft: '100px' }}>Hall:</p>
        <input type="text" className="input" style={{ width: '50px' }} defaultValue="5" />
      </div>

      {/* Contact number sec */}
      <div className="sec">
        <p className="labels">Contact number</p>
        <input type="text" className="input" defaultValue="9932776655" />
      </div>

      {/* Save button */}
      <div className="button-container">
        <Button backgroundColor={"#22992E"} size={3} text={"book"} textColor={1}></Button>
      </div>
    </div>
  );
}

export default page2;
