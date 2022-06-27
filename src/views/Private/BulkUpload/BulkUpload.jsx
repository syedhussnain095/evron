import React from 'react'
import { InboxOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import Header from "../../../Component/Header";
const { Dragger } = Upload;
const BulkUpload = () => {
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

    onChange(info) {
      const { status } = info.file;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <>
      <Header />
      <div className="text-center main_body shadow">
        <p>Download Bulk Upload Excel File Type</p>
        <Button className="btn_Login" >Donwload</Button> <br /><br /><br />
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger> <br /><br /><br />
        <Button className="btn_Login">Upload</Button> Total Records Found
      </div>
    </>
  )
}

export default BulkUpload