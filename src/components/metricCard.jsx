import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

class MetricCard extends Component {
  state = {};
  render() {
    const { title, subtitle, description } = this.props.info;
    return (
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>View Full Report</Button>
        </CardBody>
      </Card>
    );
  }
}

export default MetricCard;
