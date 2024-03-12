import React from 'react';
import './info.css';

const Info = ({Rating, Acceptances, Rejections}) => {
    return (
        <div id="info">
            <button id="rating">{Rating}</button>
            <button id="acceptances">{Acceptances}</button>
            <button id="rejections">{Rejections}</button>
        </div>
    );
};

export default Info;