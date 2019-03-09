import React, { Component } from "react";
import TurbineGraph from "./turbineGraph";
import { Container, Row, Col, Badge, Button } from "reactstrap";
import TurbineLights from "./turbineLights";
//import { sendTwilioSMS } from "../services/twilio";

class TurbineInfo extends Component {
  state = {};

  // sendSMS() {
  //   sendTwilioSMS();
  // }

  render() {
    const styles = {
      padding: "15px"
    };
    return (
      <React.Fragment>
        <h3 style={styles}>
          Wind Turbine <Badge color="secondary">Data</Badge>
        </h3>
        <Row>
          <Col>
            <TurbineGraph />
          </Col>
          <Col>
            <TurbineLights />
          </Col>
        </Row>
        <Button onClick={this.sendSMS}>Send SMS</Button>
      </React.Fragment>
    );
  }
}

export default TurbineInfo;
