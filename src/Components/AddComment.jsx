import React from "react";
import { Form, FormLabel } from "react-bootstrap";

function AddComment() {
    return(
        <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" placheholder="Leave a comment">
            <FormLabel>Leave a Comment</FormLabel>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Disabled select menu</Form.Label>
            <Form.Select >
                <option>Disabled select</option>
            </Form.Select>
        </Form.Group>
        
        </>
    )
}

export default AddComment