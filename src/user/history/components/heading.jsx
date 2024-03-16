import React from 'react';
import './heading.css'

const Heading = ({ Message }) => {
    return (
        <div id="heading">
            <h1>{Message}</h1>
        </div>
    );
}

export default Heading;