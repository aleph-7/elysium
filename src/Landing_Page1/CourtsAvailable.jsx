import react from 'react';
import './CourtsAvailable.css';
import Table from './table.jsx';

const CourtsAvailable = ({ imageurl1, imageurl2, noOfRows, noOfColumns, rowEntries, Headline}) => {
    return(
        <div id="CourtsAvailable">
          <Table noOfRows={noOfRows} noOfColumns={noOfColumns} rowEntries={rowEntries} Headline={Headline}/>
        </div>
    )
}

export default CourtsAvailable;
