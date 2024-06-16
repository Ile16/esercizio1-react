
import { Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import CommentList from "./CommentList";


function SingleBook({book, selected, onSelect}){
    // console.log(book)
    // console.log(selected)

    return(
        <Col> 
            <Card className="my-4"  
                style={{width:'300px', minHeight:'700px', border: selected ? '2px solid red' : 'none'}}
                onClick={onSelect}
                data-testid={"cards"}>
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