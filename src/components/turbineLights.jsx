import React, { Component } from "react";
import { Row, Col, Badge } from "reactstrap";
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
        {/* <Row>
          <h3>Oil Monitoring Indicator</h3>
        </Row> */}
        <Row>
          <Col>
            <Badge color="success">Success</Badge>
          </Col>
          <Col>
            <Badge color="warning">Warning</Badge>
          </Col>
          <Col>
            <Badge color="danger">Danger</Badge>
          </Col>
          <Col>
            <Badge color="danger">Danger</Badge>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TurbineLights;
