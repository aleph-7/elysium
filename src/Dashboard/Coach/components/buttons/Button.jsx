// Button.js

import React from 'react';
import './Button.css'; // Import the CSS file for button styles

function Button({backgroundColor,size,textColor,text}) {
  let buttonClassName = 'button';

  // Set button size based on the value of the size prop 1 for small, 2 for medium and 3 for large
  // Set the textColor as 1 for white text and 2 for black text
  // Pass the text to be written in the button under parameter text
  switch (size) {
    case 1:
      buttonClassName += ' small';
      break;
    case 2:
      buttonClassName += ' medium';
      break;
    case 3:
      buttonClassName += ' large';
      break;
    default:
      buttonClassName += ' small'; // Default to small size if no size is specified
  }

  // Set text color based on the value of the textColor prop
  switch (textColor) {
    case 1:
      buttonClassName += ' white-text';
      break;
    case 2:
      buttonClassName += ' black-text';
      break;
    default:
      buttonClassName += ' black-text'; // Default to black text if no color is specified
  }
    const buttonStyle ={
        backgroundColor: backgroundColor,
    };
  return (
    <button className={buttonClassName} style={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;
