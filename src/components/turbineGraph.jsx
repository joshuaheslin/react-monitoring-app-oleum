import React, { Component } from "react";
import { Badge, Row, Col } from "reactstrap";
import axios from "axios";
import { Chart } from "react-charts";
import TurbineLights from "./turbineLights";

import CanvasJSReact from "../canvasjs-2.3.1/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
      "https://hardwareswbne.v1.readiness.io/tmp?limit=20" //since=1552144765&
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
        x: timestamp / 1000000000,
        y: parseFloat(reading)
      });
      const inverse = 1 / (reading * 0.02);
      //console.log(inverse);
      newDataTwo.push({
        x: timestamp,
        y: inverse
      });
      latestReading = serverData[serverData.length - 1].reading;
    }
    //this.checkFlag(serverData);

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

  // async checkFlag(serverData) {
  //   if (serverData.flag == 1) {
  //     let response = await axios.post(
  //       "https://oleum-node.herokuapp.com/sms/+61431473207"
  //     );
  //     console.log(response);
  //     response = await axios.post(
  //       "https://oleum-node.herokuapp.com/sms/+61429959598"
  //     );
  //     console.log(response);
  //     response = await axios.post(
  //       "https://oleum-node.herokuapp.com/sms/+61423114926"
  //     );
  //     console.log(response);
  //   }
  // }

  startTimer() {
    setInterval(() => this.getServerData(), 1000);
  }

  render() {
    const style = {
      align: "center"
    };

    const { graphData, graphDataTwo } = this.state;
    const data = graphData.data;
    //console.log(graphData);
    //console.log(graphDataTwo);

    const sampleData = [
      { x: 1, y: 64 },
      { x: 2, y: 61 },
      { x: 3, y: 64 },
      { x: 4, y: 62 },
      { x: 5, y: 64 },
      { x: 6, y: 60 },
      { x: 7, y: 58 },
      { x: 8, y: 59 },
      { x: 9, y: 53 },
      { x: 10, y: 54 },
      { x: 11, y: 61 },
      { x: 12, y: 60 },
      { x: 13, y: 55 },
      { x: 14, y: 60 },
      { x: 15, y: 56 },
      { x: 16, y: 60 },
      { x: 17, y: 59.5 },
      { x: 18, y: 63 },
      { x: 19, y: 58 },
      { x: 20, y: 54 },
      { x: 21, y: 59 },
      { x: 22, y: 64 },
      { x: 23, y: 59 }
    ];

    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      title: {
        text: ""
      },
      axisY: {
        title: "Temperature",
        includeZero: true,
        suffix: " °C"
      },
      axisX: {
        title: "Time",
        prefix: "",
        interval: 2
      },
      data: [
        {
          type: "line",
          toolTipContent: "Temp: {y} °C",
          dataPoints: data //sampleData // data //[{ x: 1, y: 64 }, { x: 2, y: 61 }]
        }
      ]
    };

    return (
      <React.Fragment>
        <Row>
          <Col xs={8}>
            <CanvasJSChart options={options} />
            {/* <div
            style={{
              width: "700px",
              height: "500px",
              primaryAxes: "0"
            }}
          >
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            {/* <Chart
              data={[
                {
                  label: "Oil Temperature",
                  data: graphData.data
                }
                // {
                //   label: "Series 2",
                //   data: [{ x: 0, y: 0 }, { x: 0, y: 50 }]
                // }
              ]}
              axes={[
                { primary: true, type: "time", position: "bottom", show: true },
                { type: "linear", position: "left" }
              ]}
              style={style}
              // primaryCursor
              // secondaryCursor
              tooltip
            /> */}
          </Col>
          <Col>
            <TurbineLights latestReading={this.state.latestReading} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TurbineGraph;
