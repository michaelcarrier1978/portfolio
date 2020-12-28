import React from 'react'
import { Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

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
    <Row className="wrapper justify-content-center my-5 py-5 text-center">
      <Col xl="6" md="10">
          <Image fixed={fixed} className="mb-5"/>
          <h1>Michael Carrier</h1>
          <h4>Software Engineer and full-stack web developer.  Passionate about building a top notch application from start to finish and all things space.</h4>
      </Col>
    </Row>
    </>
  )
}

export default Hero
