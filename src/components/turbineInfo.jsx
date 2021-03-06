import React, { Component } from "react";
import TurbineGraph from "./turbineGraph";
import { Container, Row, Col, Badge, Button } from "reactstrap";
import TurbineLights from "./turbineLights";
import axios from "axios";
//import { sendTwilioSMS } from "../services/twilio";
import { toast } from "react-toastify";
import Graph from "./graph";

class TurbineInfo extends Component {
  state = {};

  async sendSMS() {
    const response = await axios.post("https://oleum-node.herokuapp.com/sms");
    console.log(response);
  }

  render() {
    const styles = {
      padding: "15px"
    };
    const limit = this.props.match.params.limit;
    console.log(limit);

    return (
      <React.Fragment>
        <h3 style={styles}>
          Wind Turbine <Badge color="secondary">Data</Badge>
        </h3>
        <Row>
          {/* <Graph /> */}
          {/* <TurbineGraph /> */}
          <Col>
            <TurbineGraph limit={limit} />
          </Col>
        </Row>
        <Button onClick={this.sendSMS}>View Full Report</Button>
      </React.Fragment>
    );
  }
}

export default TurbineInfo;
