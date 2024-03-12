import React from 'react';
import ReactDOM from 'react-dom/client';
import './History.css';
import App from './App.jsx';
import Table from './table.jsx'
import Greeting from './greeting.jsx'
import Heading from './heading.jsx'
import Info from './info.jsx'
import Header from "../Header";
const Name='kushagra';
const Message='YOUR BOOKING HISTORY';
const rows = 6;
const columns = 3;
const dummyText = [
  ['facility', 'partners', 'status'],
  ['basketball court', 'solitary', <button id="pending">pending</button>],
  ['basketball court', 'solitary', <button id="accepted">accepted</button>],
  ['basketball court', 'solitary', <button id="rejected">rejected</button>],
  ['basketball court', 'solitary', <button id="rejected">rejected</button>],
  ['basketball court', 'solitary', <button id="rejected">rejected</button>],
  ['basketball court', 'solitary', <button id="rejected">rejected</button>]
];
const Rating=1500;
const Acceptances=5;
const Rejections=3;

function History(){
  return (
    <div>
    <Header />
    <Greeting Name={Name} />
    <Heading Message={Message} />
    <Table noOfRows={rows} noOfColumns={columns} rowEntries={dummyText} />
    <Info Rating={Rating} Acceptances={Acceptances} Rejections={Rejections} />
    </div>
);
}


export default History;