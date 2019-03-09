import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Nav tabs>
        <NavItem>
          <NavLink tag={Link} to="/turbine">
            Turbines
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/metrics">
            Metrics
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default NavBar;
