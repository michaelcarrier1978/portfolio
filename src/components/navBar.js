import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby"
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
                <Link to="/" className="link-no-style">
                  <Nav.Link as="span" eventKey="home">
                    Home
                  </Nav.Link>
                </Link>
                <AnchorLink to="/#skills" title="Skills" />
                <AnchorLink to="/#experience" title="Experience" />
                <AnchorLink to="/#projects" title="Projects" />
                <AnchorLink to="/#contact" title="Contact" />
                <Link to="/resume" className="link-no-style">
                  <Nav.Link as="span" eventKey="resume">
                    Resume
                  </Nav.Link>
                </Link>
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
