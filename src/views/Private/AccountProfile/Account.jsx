import React from "react";
import { Button, Form, Input, Row, Col, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import Header from "../../../Component/Header";
const { Dragger } = Upload;
const Account = () => {
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
      <div className="my-5 py-5 main_body shadow">
        <Form
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 22,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Form.Item
                label="User ID"
                rules={[
                  {
                    required: true,
                    message: "User ID is required!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter User ID"
                  className="for_input_design"
                  allowClear
                  style={{ padding: "10px 10px" }}
                />
              </Form.Item>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Form.Item
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Password is required!",
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter Password"
                  className="for_input_design "
                  allowClear
                  style={{ padding: "10px 10px" }}
                />
              </Form.Item>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Form.Item
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Name is required!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Name"
                  className="for_input_design "
                  allowClear
                  style={{ padding: "10px 10px" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Form.Item
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Email is required!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Email"
                  className="for_input_design "
                  allowClear
                  style={{ padding: "10px 10px" }}
                />
              </Form.Item>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Form.Item
                label="Contact Number"
                rules={[
                  {
                    required: true,
                    message: "Contact Number is required!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Contact Number"
                  className="for_input_design "
                  allowClear
                  style={{ padding: "10px 10px" }}
                />
              </Form.Item>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Form.Item
                label="Role"
                rules={[
                  {
                    required: true,
                    message: "Role is required!",
                  },
                ]}
              >
                <Select placeholder="Select Role" allowClear>
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Form.Item
                label="Address"
                rules={[
                  {
                    required: true,
                    message: "Address is required!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Address"
                  className="for_input_design "
                  allowClear
                  style={{ padding: "10px 10px" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 24 }}
            >
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
              </Dragger>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Button className="btn_Login" htmlType="submit">
              Upload
            </Button>
            <Button className="mx-3" type="danger" htmlType="submit">
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Account;
