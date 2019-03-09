import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let { user } = this.props;
    return (
      <div>
        <Navbar color="light" expand="md">
          <NavbarBrand>Oleum Analytics</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/turbine">Turbine Data</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/metrics">Metrics</NavLink>
              </NavItem>
            </Nav> */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
