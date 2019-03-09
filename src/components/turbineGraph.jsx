import React, { Component } from "react";
import { Badge, Row, Col } from "reactstrap";
import axios from "axios";
import { Chart } from "react-charts";
import TurbineLights from "./turbineLights";

class TurbineGraph extends Component {
  state = {
    serverTemperatures: {},
    graphData: {
      label: "Series 1",
      data: []
    },
    graphDataTwo: {
      label: "Series 2",
      data: []
    },
    latestReading: 24
  };

  async componentDidMount() {
    this.getServerData();
    this.startTimer();
  }

  async getServerData() {
    const serverTemperatures = await axios.get(
      "https://hardwareswbne.v1.readiness.io/tmp?since=1552127274165&limit=80"
    );
    console.log(serverTemperatures.data);

    const serverData = serverTemperatures.data;

    const newData = [];
    const newDataTwo = [];
    let latestReading = 0;

    for (let index = 0; index < serverData.length; ++index) {
      //console.log(serverData[index]);
      const reading = serverData[index].reading;
      const timestamp = serverData[index].inserted_at;
      newData.push({
        x: timestamp,
        y: reading
      });
      const inverse = 1 / (reading * 0.02);
      //console.log(inverse);
      newDataTwo.push({
        x: timestamp,
        y: inverse
      });
      latestReading = serverData[serverData.length - 1].reading;
    }
    this.checkFlag(serverData);

    const graphData = { ...this.state.graphData };
    const graphDataTwo = { ...this.state.graphDataTwo };
    graphData.data = newData;
    graphDataTwo.data = newDataTwo;
    this.setState({
      serverTemperatures,
      graphData,
      graphDataTwo,
      latestReading
    });
  }

  async checkFlag(serverData) {
    if (serverData.flag == 1) {
      let response = await axios.post(
        "https://oleum-node.herokuapp.com/sms/+61431473207"
      );
      console.log(response);
      response = await axios.post(
        "https://oleum-node.herokuapp.com/sms/+61429959598"
      );
      console.log(response);
      response = await axios.post(
        "https://oleum-node.herokuapp.com/sms/+61423114926"
      );
      console.log(response);
    }
  }

  startTimer() {
    setInterval(() => this.getServerData(), 1000);
  }

  render() {
    const style = {
      align: "center"
    };

    const { graphData, graphDataTwo } = this.state;
    //console.log(graphData);
    //console.log(graphDataTwo);

    return (
      <React.Fragment>
        <Col>
          {" "}
          <div
            style={{
              width: "700px",
              height: "500px"
            }}
          >
            <Chart
              data={[
                {
                  label: "Series 1",
                  data: graphData.data
                }
              ]}
              axes={[
                { primary: true, type: "linear", position: "bottom" },
                { type: "linear", position: "left" }
              ]}
              style={style}
            />
          </div>
        </Col>
        <Col>
          <TurbineLights latestReading={this.state.latestReading} />
        </Col>
      </React.Fragment>
    );
  }
}

export default TurbineGraph;
