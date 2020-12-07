import React from "react";
import { Navbar, Nav, Icon, Dropdown } from "rsuite";

const TopBar = () => {
  return (
    <Navbar appearance="inverse">
      <Navbar.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="dashboard" />}>Dashboard</Nav.Item>
          <Nav.Item icon={<Icon icon="angle-right" />}>Location</Nav.Item>
          <Nav.Item icon={<Icon icon="angle-right" />}>Location</Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<Icon icon="profile" />}>Employee Name</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default TopBar;
