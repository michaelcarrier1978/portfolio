import React from 'react'
import { Row, Col } from "react-bootstrap"

const footer = () => {
    return (
        <>
                <Row noGutters>
                    <Col className="footer-col">
                    <footer>
                        <span>
                        © {new Date().getFullYear()}, Built with 
                        {` Gatsby.js `}
                        
                        </span>
                    </footer>
                    </Col>
                </Row>
        </>
    )
}

export default footer
