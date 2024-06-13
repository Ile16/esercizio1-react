import { useState } from "react";
import { Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";


function SingleBook({book}){
    const [selected, setSelected] = useState(false)

    return(
        <Col> 
            <Card className="my-4" 
            id="cards" 
            style={{width:'300px', minHeight:'700px', border: selected ? '2px solid red' : 'none'}}
            onClick={() => setSelected(!selected)}>
                <Card.Img variant="top" src={book.img} className="container-fluid" style={{minHeight: '400px'}}/>
                <Card.Body>
                    <Card.Title style={{fontSize: '16px'}}>{book.title}</Card.Title>
                    <Card.Text className="my-4" style={{fontWeight:'600'}}>Prezzo: {book.price}</Card.Text>
                </Card.Body>
            </Card>
            {selected && <CommentArea asin={book.asin}/>} 
            {/* qui dico che se l'elemento è selezionato allora mostrami CommentArea  */}
            {/* passo inoltre un parametro per collegare il commento ad un id del libro commentato. 
            ASIN CORRISPONDE ALL'ID */}
        </Col>
    );
}

export default SingleBook;