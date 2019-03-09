import React, { Component } from "react";
import { Row, Col, Badge, Button, ButtonGroup } from "reactstrap";
import axios from "axios";

class TurbineLights extends Component {
  state = {
    serverTemperatures: {},
    graphData: {
      label: "Series 1",
      data: [{}]
    }
  };
  async componentDidMount() {
    const serverTemperatures = await axios.get(
      "https://hardwareswbne.v1.readiness.io/tmp?since=0"
    );
    //console.log(serverTemperatures);
    this.setState({ serverTemperatures });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <h1>
              <Badge color="success" large>
                System OK
              </Badge>
            </h1>
            <Row>
              <Col xs="6"> Current Temp</Col>
              <Col> Threshold Temp</Col>
            </Row>
            <Row>
              <Col xs="6">
                <h1> 24 °C </h1>
              </Col>
              <Col>
                {" "}
                <h1> 30 °C </h1>
              </Col>
            </Row>
            <Row>
              <Col xs="6"> </Col>
              <Col />
            </Row>
          </Col>
          {/* <Col>
            <Badge color="warning">Warning</Badge>
          </Col>
          <Col>
            <Badge color="danger">Danger</Badge>
          </Col>
          <Col>
            <Badge color="danger">Danger</Badge>
          </Col> */}
        </Row>
      </React.Fragment>
    );
  }
}

export default TurbineLights;
