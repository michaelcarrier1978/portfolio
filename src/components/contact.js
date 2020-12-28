import React from 'react'
import { Form, Button } from "react-bootstrap"

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
        </>
    )
}

export default contact
