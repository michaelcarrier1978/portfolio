import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Row, Col } from "react-bootstrap"

const query = graphql`
  {
    image: file(relativePath: {eq: "resume-2020.png"}) {
      childImageSharp {
        fixed(height: 1000, width: 800){
          ...GatsbyImageSharpFixed
        }
      }
    }
    pdf: file(relativePath: {eq: "resume-2020.pdf"}) {
      publicURL
    }
  }
`

const Resume = () => {
    const {
       image: {
        childImageSharp: { fixed },
        },
        pdf: {publicURL}
    } = useStaticQuery(query)

    return (
        <>
            <Layout>
                <SEO title="resume" />
                <Row className="justify-content-center my-5 py-5 text-center">
                    <Col lg="12"> 
                        <Image fixed={fixed} className="mb-5"/>
                    </Col>
                    <Col lg="12 ">
                        <a href={publicURL} download>Download resume</a>
                    </Col>
                </Row>
            </Layout>
        </>
    )  
  }

export default Resume