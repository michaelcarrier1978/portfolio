import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Navbar, Nav, Col, Row } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Row id="home">
        <Col>
          <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand>michael-carrier.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <div className="anchor-links mt-2">
                <AnchorLink to="/#skills" title="Skills" />
                <AnchorLink to="/#experience" title="Experience" />
                <AnchorLink to="/#projects" title="Projects" />
                <AnchorLink to="/#contact" title="Contact" />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </Col>
      </Row>
      </>
  )
}

export default CustomNavbar
