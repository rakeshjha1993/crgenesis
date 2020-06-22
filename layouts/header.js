import { Component } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "../styles/navBar.scss";

export default class NavBarHeader extends Component {
  static async getInitialProps() {
    return {};
  }
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="#home">CR Genesis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
