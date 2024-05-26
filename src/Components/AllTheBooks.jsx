import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";


function AllTheBooks(props){
    return (
        <>
            <Row>
                {props.books.map(book => (
                    <Col> 
                        <Card className="my-4" id="cards" style={{width:'300px', height:'565px'}}>
                            <Card.Img variant="top" src={book.img} className="container-fluid"/>
                            <Card.Body>
                                <Card.Title style={{fontSize: '16px'}}>{book.title}</Card.Title>
                                <Card.Text className="my-4" style={{fontWeight:'600'}}>Prezzo: {book.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </>
    );
}

export default AllTheBooks;