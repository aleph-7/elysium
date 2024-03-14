import Table from "./table";
import "./check_enrollment.css";

function CheckEnrollment() {
  const rows = 3;
  const columns = 2;
  const rowEntries = [
    ["name", "email-id"],
    ["Akanksha", "akankshawb22@iitk.ac.in"],
    ["Sankalp", "sankalpm22@iitk.ac.in"],
  ];
  return (
    <div className="yoga-check-enrollment-container">
      <div className="dropdown">
        <select>
          <option>5:00pm</option>
          <option>4:00pm</option>
          <option>3:00pm</option>
          <option>2:00pm</option>
          <option>1:00pm</option>
        </select>
      </div>
      <div className="enrollment-container">
        <div className="enrollback"></div>
        <h3>number of enrollments : 2</h3>
        <Table noOfRows={rows} noOfColumns={columns} rowEntries={rowEntries} />
        <div className="second-table">
          <h3>pending requests</h3>
          <Table
            noOfRows={3}
            noOfColumns={3}
            rowEntries={[
              ["name", "transaction-id", "action"],
              [
                "Ritesh",
                "1AHW90249923842",
                <div className="buttons_en">
                  <div className="b1">Verify</div>
                  <div className="b2">Reject</div>
                </div>,
              ],
              [
                "Animesh",
                "1BJS209342803490",
                <div className="buttons_en">
                  <div className="b1">Verify</div>
                  <div className="b2">Reject</div>
                </div>,
              ],
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckEnrollment;
