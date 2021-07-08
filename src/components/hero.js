import React from 'react'
import { Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import LinkedinImg from '../images/linkedin.png'
import GithubImg from '../images/github.png'

const query =  graphql`
  {
    file(relativePath: {eq: "IMG-1678.jpg"}) {
      childImageSharp {
        fixed(height: 300, width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(query)

  return (
    <>
    <Row className="wrapper justify-content-center mt-5 pt-5 text-center">
      <Col xl="6" md="10">
          <Image fixed={fixed} className="mb-5"/>
          <h1>Michael Carrier</h1>
          <h4>Software Engineer and full-stack web developer in Utah.  Passionate about building a top notch application from start to finish and all things space.</h4>
      </Col>
    </Row>
    <Row className="justify-content-center wrapper">
      <Col>
        <Link to="https://www.linkedin.com/in/michael-carrier-2a472352/"><img src={LinkedinImg} className="social-icon float-right"/></Link>
      </Col>
      <Col>
        <Link to="https://github.com/michaelcarrier1978"><img src={GithubImg} className="social-icon"/></Link>
      </Col>
    </Row>
    </>
  )
}

export default Hero
