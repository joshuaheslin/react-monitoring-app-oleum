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
import logo from "../files/logo.png";

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
    const style = {
      color: "#000"
    };
    return (
      <div>
        <Navbar expand="md" className="navbar-custom">
          <NavbarBrand style={style} className="navbar-custom">
            <img src={logo} width="50" height="50" alt="logo" /> Oleum Analytics
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
    );
  }
}

/*          <Collapse isOpen={this.state.isOpen} navbar>
            {/* <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/turbine">Turbine Data</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/metrics">Metrics</NavLink>
              </NavItem>
            </Nav> */
