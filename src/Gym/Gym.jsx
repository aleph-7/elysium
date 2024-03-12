import React from 'react'
// import ReactDOM from 'react-dom/client';
import CardStack from './components/card_stack/CardStack.jsx';
import Header from '../Header.jsx';


function Gym() {
    return (
      <>
          <Header></Header>
          <CardStack />
      </>
    );
  }
  
export default Gym;