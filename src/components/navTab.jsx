import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import logo from "../files/logo.png";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink to="/turbine" className="nav-link">
              Turbines
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/metrics" className="nav-link">
              Metrics
            </NavLink>
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
