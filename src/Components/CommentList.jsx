import React from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";


// commentList riceve la lista di recensioni da CommentArea con una prop {comments}
function CommentList({comments, setAdd, add}){
// console.log(comments)
   
    return (
        <>
            <ListGroup>
                    {comments.map(comment => <SingleComment 
                    key={comment._id} 
                    comment={comment} 
                    setAdd={setAdd}
                    add={add}
                    data-testid="commenti"/> )}
            </ListGroup>
        </>
    )
}

export default CommentList