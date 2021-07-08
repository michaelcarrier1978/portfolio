import React from 'react'
import {  Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa";
import { IconContext } from "react-icons";

const query = graphql`
  {
    allStrapiProjects(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tool {
          id
          name
        }
        url
      }
    }
  }
`

const Projects = () => {
    const data = useStaticQuery(query)
    const {allStrapiProjects:{nodes:projects}} = data
   
    return (
        <>
            <Col xl="8" md="12">
              {
                projects.map((item, index) => {
                    return <Col key={item.strapiId} sm={12} className={`project-wrapper project${item.strapiId}`}>
                        <div>
                            <h3>{item.title}</h3>
                        </div>
                        <Row>
                        <Col sm={6}>
                            <p>{item.description}</p>
                            <h4>Development Tools</h4>
                            <IconContext.Provider value={{ color:"white"}}>
                                {
                                    item.tool.map((tools) => {
                                    return<div key={tools.id} className="project-items">
                                        <FaAngleDoubleRight />
                                        <p>{tools.name}</p>
                                    </div> 
                                    })
                                }
                            </IconContext.Provider>
                            {item.url ? <Link to={item.url}>View project</Link> : ''}
                        </Col>
                        <Col sm={6}>
                            {item.image ? <Image fluid={item.image.childImageSharp.fluid} /> : '' }
                        </Col>
                        </Row>
                    </Col>
                })
            }
            </Col>
        </>   
    )
}

export default Projects
