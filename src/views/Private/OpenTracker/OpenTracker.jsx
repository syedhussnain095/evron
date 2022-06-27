import React from "react";
import { Input, Button } from 'antd';
import Header from "../../../Component/Header";
const OpenTracker = () => {
  const { Search } = Input;

  return (
    <>
      <Header />
      <div className="main_body shadow">

        <div className="text-center">
          <p>Live Tracker</p>
        </div>
        <div className="search">
          <Search
            placeholder="input search text"
            style={{
              width: 200,
            }}
          />
        </div>
        <div className="my-3">
          <p>Not Submitted Case</p>
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
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-3">
          <div className="my-2" style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Reject Case</p>
            <Button className="btn_Login" >Send to CAM</Button>
          </div>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OpenTracker;
