import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Col, Row, ProgressBar } from 'react-bootstrap'

const query = graphql`
  {
    allStrapiSkills {
      nodes {
        title
        strapiId
        skill_name {
          name
          id
          rank
        }
      }
    }
  }
`

const Skills = () => {
    const data = useStaticQuery(query)
    const {allStrapiSkills:{nodes:skills}} = data

    return (
        <>
           <Col sm="8">
             <Row>
                {
               skills.map((item) => {
                 return <Col key={item.strapiId} md="4" className="text-center skill">
                   <h4 key={item.strapiId} className="pt-3">{item.title}</h4>
                   <div className="skill-list">
                    {
                      item.skill_name.map((skill) => {
                        return <div key={skill.id}>
                          <p key={skill.id}>{skill.name}</p>
                          <ProgressBar animated now={skill.rank} />
                        </div>
                      })
                    }
                   </div>
                 </Col>
               })
             }
             </Row>
            </Col> 
        </>
    )
}

export default Skills
