import React, { Component } from "react";
import MetricCard from "./metricCard";
import { Row, Col, Badge } from "reactstrap";
import Chart from "chart.js";

class Metrics extends Component {
  state = {};
  render() {
    const styles = {
      padding: "15px"
    };
    const info = [
      {
        title: "72%",
        subtitle: "Compatibility",
        description: "No criticals, no errors, no warnings, no notices"
      },
      {
        title: "40%",
        subtitle: "Performance",
        description: "No criticals, no errors, no warnings, no notices"
      },
      {
        title: "82%",
        subtitle: "Tasks",
        description: "No criticals, no errors, no warnings, no notices"
      },
      {
        title: "12%",
        subtitle: "Downtime",
        description: "No criticals, no errors, no warnings, no notices"
      }
    ];
    return (
      <React.Fragment>
        <h3 style={styles}>
          Turbine Oil Metrics <Badge color="info">Metrics</Badge>
        </h3>
        <Row>
          <Col>
            <MetricCard info={info[0]} />
          </Col>
          <Col>
            <MetricCard info={info[1]} />
          </Col>
          <Col>
            <MetricCard info={info[2]} />
          </Col>
          <Col>
            <MetricCard info={info[3]} />
          </Col>
        </Row>
        {/* <Button onClick={this.sendSMS}>Send SMS</Button> */}
      </React.Fragment>
    );
  }
}

export default Metrics;
