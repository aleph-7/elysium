import React from 'react';
import './greeting.css'

const Greeting = ({ Name }) => {
    return (
        <div id="greeting">
            <h1>hey {Name}! how are you today?</h1>
        </div>
    );
};

export default Greeting;