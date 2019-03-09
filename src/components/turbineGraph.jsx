import React, { Component } from "react";
import { Badge } from "reactstrap";
import axios from "axios";
import { Chart } from "react-charts";

class TurbineGraph extends Component {
  state = {
    serverTemperatures: {},
    graphData: {
      label: "Series 1",
      data: [{}]
    },
    graphDataTwo: {
      label: "Series 2",
      data: [{}]
    }
  };

  async componentDidMount() {
    this.getServerData();
    this.startTimer();
  }

  async getServerData() {
    const serverTemperatures = await axios.get(
      "https://hardwareswbne.v1.readiness.io/tmp?since=1552112015571&limit=10"
    );
    //console.log(serverTemperatures);

    const serverData = serverTemperatures.data;

    const newData = [{}];
    const newDataTwo = [{}];
    for (let index = 0; index < serverData.length; ++index) {
      console.log(serverData[index]);
      newData.push({
        x: serverData[index].inserted_at,
        y: serverData[index].reading
      });
      const inverse = (1 / (serverData[index].reading * 0.02)).toString();
      console.log(inverse);
      newDataTwo.push({
        x: serverData[index].inserted_at,
        y: inverse
      });
    }

    const graphData = { ...this.state.graphData };
    const graphDataTwo = { ...this.state.graphDataTwo };
    graphData.data = newData;
    graphDataTwo.data = newDataTwo;
    this.setState({ serverTemperatures, graphData, graphDataTwo });
  }

  startTimer() {
    setInterval(() => this.getServerData(), 2000);
  }

  render() {
    const style = {
      align: "center"
    };

    const { graphData, graphDataTwo } = this.state;
    console.log(graphData);
    console.log(graphDataTwo);
    return (
      <React.Fragment>
        <div
          style={{
            width: "400px",
            height: "300px"
          }}
        >
          <Chart
            data={[
              {
                label: "Series 1",
                data: graphData.data
              }
              // {
              //   label: "Series 2",
              //   data: graphData.data
              // }
            ]}
            axes={[
              { primary: true, type: "linear", position: "bottom" },
              { type: "linear", position: "left" }
            ]}
            style={style}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TurbineGraph;
