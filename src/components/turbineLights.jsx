import React, { Component } from "react";
import { Row, Col, Badge, Button, ButtonGroup } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";

class TurbineLights extends Component {
  render() {
    let latestReading = this.props.latestReading;
    let displayTemp = Math.round(latestReading * 10) / 10;
    //displayTemp = 0;
    var thresholdTemp = 30;

    let badgeColour = "success";
    let badgeMessage = "System OK";

    let toastIdHigh = "warning";
    let toastIdLow = "zero";

    if (displayTemp > thresholdTemp) {
      badgeColour = "warning";
      badgeMessage = "Soot Content";
      if (!toast.isActive(toastIdHigh)) {
        toast.warn("Soot content is too high. Please check it.", {
          toastId: toastIdHigh
        });
      }
    } else if (displayTemp === 0) {
      badgeColour = "danger";
      badgeMessage = "No connection";
      if (!toast.isActive(toastIdLow)) {
        toast.error("Connection lost! Please reconnect the sensor", {
          toastId: toastIdLow
        });
      }
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
              <Col xs="6"> Current</Col>
              <Col> Threshold</Col>
            </Row>
            <Row>
              <Col xs="6">
                <h1>
                  {" "}
                  {displayTemp} <small>ppm</small>
                </h1>
              </Col>
              <Col>
                {" "}
                <h1>
                  {" "}
                  30 <small>ppm</small>{" "}
                </h1>
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
