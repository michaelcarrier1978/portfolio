import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jobs from "../components/jobs"
import Projects from "../components/projects"
import Skills from "../components/Skills"
import Contact from "../components/contact"
import Hero from '../components/hero'

const IndexPage = () => (
  <>
  <Container fluid>
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`gatsby`, `Michael Carrier`, `Michael Carrier portfolio`, `Contact Michael Carrier`]} />
      <Hero />
        <Row id="skills" className="justify-content-center">
          <Col sm="12" className="pt-3">
          <h2>Skills</h2>
        </Col>
          <Skills/>
        </Row>
        <Row id="experience" className="justify-content-center">
          <Col sm={12} className="pt-3">
            <h2>Experience</h2>
        </Col>
            <Jobs />
        </Row>
        {/* <Col sm={12}>
          <h2>Recent projects</h2>
        </Col> */}
        <Row id="projects" className="justify-content-center">
          <Col sm={12} className="pt-3">
          <h2>Projects</h2>
        </Col>
          <Projects />
        </Row>
        <Row id="contact" className="justify-content-center">
          <Col sm={12} className="pt-3">
            <h2>Contact</h2>
          </Col>
          <Contact />
        </Row>        
    </Layout>
  </Container>
  </>
)

export default IndexPage
