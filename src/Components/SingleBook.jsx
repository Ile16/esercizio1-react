
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
                <Card.Img variant="top" 
                // src={book.img}
                src={book && book.img ? book.img : "https://images-na.ssl-images-amazon.com/images/I/71WdFQNYSJL.jpg"} 
                className="container-fluid" 
                style={{minHeight: '400px'}}/>
                <Card.Body>
                    <Card.Title style={{fontSize: '16px'}}>{book && book.title ? book.title : "Justice on Trial: The Kavanaugh Confirmation and the Future of the Supreme Court"}</Card.Title>
                    <Card.Text className="my-4" style={{fontWeight:'600'}}>Prezzo: {book && book.price ? book.price : 17.39}</Card.Text>
                </Card.Body>
            </Card>
            {selected && <CommentArea asin={book.asin} data-testid="comment" />} 
            {/* qui dico che se l'elemento è selezionato allora mostrami CommentArea  */}
            {/* passo inoltre un parametro per collegare il commento ad un id del libro commentato. 
            ASIN CORRISPONDE ALL'ID */}
        </Col>
    );
}

export default SingleBook;