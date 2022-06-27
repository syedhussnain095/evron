import React from 'react'
import { DatePicker, Button } from 'antd';
import Header from "../../../Component/Header";
const { RangePicker } = DatePicker;
const CloseTracker = () => {
  return (
    <>
      <Header />
      <div className="main_body shadow">

        <div className="text-center">
          <p>Close Tracker</p>
        </div>
        <div className="date-picker" style={{ display: "flex", justifyContent: "space-between" }}>
          <div className=""> <RangePicker /></div>
          <div className=""> <Button className="btn_Login">Download</Button></div>
        </div>
        <div className="my-3">
          <table className='table border shadow'>
            <thead>
              <tr>
                <th scope="col">Ref.</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Contact #</th>
                <th scope="col">Created On</th>
                <th scope="col">Client ID</th>
                <th scope="col">Candidate Name</th>
                <th scope="col">TAT</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CloseTracker