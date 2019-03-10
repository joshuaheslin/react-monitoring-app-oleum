import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Redirect } from "react-router-dom";

import TurbineInfo from "./components/turbineInfo";
import Metrics from "./components/metrics";
import NavTab from "./components/navTab";

import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <NavBar />
        <Container>
          <NavTab />
          <Route exact path="/turbine/:limit" component={TurbineInfo} />
          <Route path="/turbine" component={TurbineInfo} />
          <Route path="/metrics" component={Metrics} />
          <Redirect from="/" to="/turbine" />
        </Container>
      </div>
    );
  }
}

export default App;
