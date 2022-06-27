import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import Header from "../../../Component/Header";

const SupportTickets = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      <Header />
      <div className="main_body shadow">

        <Button className="btn_Login" onClick={showModal}>
          Create Ticket
        </Button>
        <Modal title={false} closable={false} visible={isModalVisible} footer={null}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p> Create Ticket</p>
            <p> X</p>
          </div>
          <div className="">
            <textarea name="" id="" cols="67" rows="10" placeholder='Create Ticket'></textarea>
          </div>
          <div className="">
            <Button className="btn_Login">Submit</Button>
          </div>
        </Modal>
        <div className="my-3">
          <table className='table border shadow'>
            <thead>
              <tr>
                <th scope="col">Message</th>
                <th scope="col">Created At</th>
                <th scope="col">Assign To</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SupportTickets