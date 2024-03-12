// Button.js

import React from 'react';
import './Button.css'; // Import the CSS file for button styles

function Button({ backgroundColor,width, height, onClick,textColor, bold, shadow, location, fontSize, children }) {
  const buttonClassName = `button ${textColor}-text ${shadow? 'box-shadow':''}`;
    const buttonStyle ={
        fontSize: fontSize,
        fontWeight: bold? 'bold': 'normal',
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        ...location
    };
  return (
    <button className={buttonClassName} onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
