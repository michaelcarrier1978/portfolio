import React from 'react'
import { Form, Button, Col, Row } from "react-bootstrap"
import LinkedinImg from '../images/linkedin.png'
import GithubImg from '../images/github.png'
import { Link } from "gatsby"

const contact = () => {
    return (
        <>
            <Form action="https://formspree.io/f/xdopdzrp" method="POST" className="mb-4 col-md-6">
                <Form.Group controlId="formBasicName">
                    <Form.Control required type="name" placeholder="Name" name="name"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control required type="email" placeholder="Email" name="email" />
                </Form.Group>
                <Form.Group controlId="formBasicTextarea">
                    <Form.Control required type="textarea" as="textarea" name="message" rows={3} placeholder="Message" />
                </Form.Group>
                <Button type="submit">
                    Send
                </Button>
            </Form>
            <Col md="12">
            <Row className="justify-content-center">
                  <Col>
                      <Link to="https://www.linkedin.com/in/michael-carrier-2a472352/"><img src={LinkedinImg} className="social-icon float-right"/></Link>
                  </Col>
                  <Col>
                      <Link to="https://github.com/michaelcarrier1978"><img src={GithubImg} className="social-icon"/></Link>
                  </Col>
              </Row>
          </Col>
        </>
    )
}

export default contact
