import react from 'react';
import './UpcomingBookings.css';
import Table from './table.jsx';


const UpcomingBookings = ({ noOfRows, noOfColumns, rowEntries, Headline}) => {
    return(
        <div id="UpcomingBookings">
          <Table noOfRows={noOfRows} noOfColumns={noOfColumns} rowEntries={rowEntries} Headline={Headline}/>
        </div>
    )
}

export default UpcomingBookings;