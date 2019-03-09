import React, { Component } from "react";
import { Row, Col, Badge, Button, ButtonGroup } from "reactstrap";
import axios from "axios";

class TurbineLights extends Component {
  render() {
    let latestReading = this.props.latestReading;
    let displayTemp = Math.round(latestReading * 10) / 10;
    //displayTemp = 0;
    var thresholdTemp = 30;

    let badgeColour = "success";
    let badgeMessage = "System OK";

    if (displayTemp > thresholdTemp) {
      badgeColour = "warning";
      badgeMessage = "Change Oil";
    } else if (displayTemp === 0) {
      badgeColour = "danger";
      badgeMessage = "No connection";
    }

    return (
      <React.Fragment>
        <Row>
          <Col>
            <h1>
              <Badge color={badgeColour} large>
                {badgeMessage}
              </Badge>
            </h1>
            <Row>
              <Col xs="6"> Current Temp</Col>
              <Col> Threshold Temp</Col>
            </Row>
            <Row>
              <Col xs="6">
                <h1> {displayTemp} °C </h1>
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
        </Row>
      </React.Fragment>
    );
  }
}

export default TurbineLights;
