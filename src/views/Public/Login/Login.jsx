import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import "./Login.scss";
import LoginOne from "../../../assets/Images/LoginOne.jpg";
import LoginTwo from "../../../assets/Images/LoginTwo.jpg";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate.push("/dashboard");
    }
  }, []);

  async function login() {
    let item = { email, password };
    let result = await fetch(process.env.LOGIN_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate.push("/dashboard");
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <section className="Login_Outer">
        <div className="Outer_Login">
          <div className="for_flex  px-2">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="form_img text-center">
                <img
                  src={LoginOne}
                  alt="LoginOne"
                  className="form-control border-0"
                />
              </div>
              <div className="form_input_data_login_form_one mt-5 text-center">
                Hi, Welcome
              </div>
              <div className="form_input_data_login_form_two mt-4 mb-4 text-center">
                Enter your credentials to continue
              </div>
              <div className="form_input_data_login_form_main mt-2">
                <Form
                  name="basic"
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<BiUserCircle />}
                      placeholder="Enter User Name"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<AiOutlineLock />}
                      placeholder="Enter Password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 15,
                    }}
                  >
                    <Button
                      onClick={login}
                      className="btn_Login w-50"
                      htmlType="submit"
                    >
                      Login
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <div className="d-flex justify-content-between last_login_data px-2">
                      <p>Developed By Orax Solutions Provider</p>

                      <p>Video Tutorial</p>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 not_For_display">
              <div className="login_img_right_side">
                <img
                  src={LoginTwo}
                  alt="LoginTwo"
                  className="form-control border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
