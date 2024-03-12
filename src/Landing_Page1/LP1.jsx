import React from 'react';
import ReactDOM from 'react-dom/client';
import './LP1.css';
import iitkBasketballImage from './iitk_basketball.png';
import badmintonCourtImage from './badminton_courts_available.png';
import cricketCourtImage from './cricket_courts_available.png';
import LandingPageNewsArticle from './LandingPageNewsArticle.jsx';
import CourtsAvailable from "./CourtsAvailable.jsx";
import UpcomingBookings from './UpcomingBookings.jsx';
import Header from "../Header";


const BookingsRows = 3;
const BookingsColumns = 3;
const BookingsText = [
  ["squash", "2nd February", "2pm-3pm"],
  ["squash", "2nd February", "4pm-5pm"],
  ["badminton", "2nd February", "5pm-6pm"],
];

const CourtsRows=2;
const CourtsColumns=2;
const CourtsText=[
  ["2 pm", <button id="BookNowButton">Book Now</button>],
  ["3 pm", <button id="BookNowButton">Book Now</button>]
];

function LP1(){
return (

    <div id="MainPage">
    <Header />
      <LandingPageNewsArticle imageurl={iitkBasketballImage} Headline={"IITK BASKETBALL ON TOP"}/>
      <div id="Content">
        <UpcomingBookings noOfRows={BookingsRows} noOfColumns={BookingsColumns} rowEntries={BookingsText} Headline='UPCOMING BOOKINGS'/>
        <CourtsAvailable imageurl1={badmintonCourtImage} imageurl2={cricketCourtImage} noOfRows={CourtsRows} noOfColumns={CourtsColumns} rowEntries={CourtsText} Headline='COURTS AVAILABLE'/>
      </div>
    </div>

);
}
export default LP1;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

