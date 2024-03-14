import React, { useRef, useEffect, useState } from "react";
import "./taskbar.css";

const normalColor = "#EDBABA";
const selectedColor = "#ef3e3e";

const getTextLength = (text, fontSize) => {
  // Create a temporary canvas element
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Set the font size and font family
  context.font = `${fontSize}px Poppins`;

  // Measure the width of the text
  const textWidth = context.measureText(text).width;
  console.log("text width of ", text,": ",textWidth);
  // Return the width of the text
  return textWidth;
};

function wrapText(text, width, fontSize) {
  fontSize = 1.8/100 * window.innerWidth;
  width = width/100 * window.innerWidth;
  var text_width = getTextLength(text, fontSize);
  console.log("box width: ",width);
  if (text_width >= width){
    return 4.29;
  }
  else{
    return 8.58
  }
};

function marg(index, n) {
  if (index === 0) {
    return 0;
  } else {
    return 1.36;
  }
};

function color(index, defaultSelected, color1,color2){
  if(index===defaultSelected){
    return color1;
  }else{
    return color2;
  }

};

function Taskbar({ items, onClicks, defaultSelected = 0 }) {
  var n = items.length;
  var width_box = (82 - (n - 1) * 1.36) / n;
  return (
    <div className="taskbar">
      {items.map((item, index) => (
        <div
          className="tile"
          key={index}
          style={{
            width: `${width_box}vw`, // Varying width based on index
            backgroundColor: `${color(index, defaultSelected, selectedColor, normalColor)}`,
            marginLeft: `${marg(index, n)}vw`,
          }}
          // onClick={onClicks[index]}
        >
          <div
            className="text"
            style={{
              width: `${width_box}vw`,
              color: `${ color(index,defaultSelected,"white","black") }`,
              lineHeight: `${wrapText(item, width_box, 1.8)}vh`,
            }}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Taskbar;
