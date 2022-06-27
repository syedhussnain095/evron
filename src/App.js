import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/Style/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Public/Login/Login";
import Account from "./views/Private/AccountProfile/Account";
import OpenTracker from "./views/Private/OpenTracker/OpenTracker";
import CloseTracker from "./views/Private/CloseTracker/CloseTracker";
import SupportTickets from "./views/Private/SupportTickets/SupportTickets";
import IndividualUpload from "./views/Private/IndividualUpload/IndividualUpload";
import BulkUpload from "./views/Private/BulkUpload/BulkUpload";
import Logout from "./views/Private/Logout/Logout";
import Protected from "./Component/Protected";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route key={"1"} path="/dashboard" element={<Account />}></Route>
          <Route
            key={"2"}
            exact
            path="/opentracker"
            element={<OpenTracker />}
          ></Route>
          <Route
            key={"3"}
            exact
            path="/closetracker"
            element={<CloseTracker />}
          ></Route>
          <Route
            key={"4"}
            exact
            path="/supporttickets"
            element={<SupportTickets />}
          ></Route>
          <Route
            key={"5"}
            exact
            path="/individualupload"
            element={<IndividualUpload />}
          ></Route>
          <Route
            key={"6"}
            exact
            path="/bulkupload"
            element={<BulkUpload />}
          ></Route>
          <Route key={"7"} exact path="/logout" element={<Logout />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
