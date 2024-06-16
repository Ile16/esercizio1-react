import React from "react";
import { ListGroup } from "react-bootstrap";

function SingleComment( {comment}){
    return(
        <>
            <ListGroup data-testid="commenti">
                {comment.comment}
        
            </ListGroup>

        </>
    )
}

export default SingleComment