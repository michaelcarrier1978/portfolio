import React from 'react'
import { Tab, Col, Nav, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { FaAsterisk} from "react-icons/fa"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        title
        company
        date
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
    const data = useStaticQuery(query)
    const {allStrapiJobs:{nodes:jobs}} = data
    
    return (
        <>  
            <Col xl="8" md="12">
                <Row>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey={jobs[0].strapiId}>
                            <Col sm={4}>
                                <Nav variant="pills" className="flex-column">
                                    {
                                        jobs.map((item) => {
                                            return <Nav.Item key={item.strapiId}>
                                                    <Nav.Link key={item.strapiId}  eventKey={item.strapiId}>{item.company}</Nav.Link>
                                                </Nav.Item>
                                        })
                                    }
                                </Nav>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    {
                                        jobs.map((item) => {
                                            return <Tab.Pane key={item.strapiId} eventKey={item.strapiId}>
                                        <h3 className="pt-3">{item.title}</h3>
                                        <p>{item.date}</p>
                                        <div key={item.strapiId}>{item.desc.map((description) => {
                                            return<div key={description.id} className="bullets">
                                                <p><FaAsterisk />{description.name}</p>
                                            </div>
                                        })}</div>
                                    </Tab.Pane>
                                        })
                                    }
                                </Tab.Content>
                            </Col>
            </Tab.Container>
            </Row>
            </Col>
        </>
    )
}

export default Jobs
