import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const sendComments = "https://striveschool-api.herokuapp.com/api/comments/";


function AddComment( {elementId, setAdd, add} ) {

    const [ comments, setComments ] = useState({ comment: '', rate: 0, elementId: elementId })

//funzione che serve a gestire l'input lasciato dall'utente
// la e(vent) contiene l'informazione sull'input
    let commentHandler = (e) => {

        setComments({
            ...comments, //SPREAD OPERATOR che copia le proprietà presenti di comments nello stato 
            comment: e.target.value, //sovrascriviamo il valore della proprietà comment con il valore attuale dell'input
            elementId: elementId
        })
    }

    let rateHandler = (e) => {
        
        setComments({
            ...comments,
            rate: e.target.value,
            elementId: elementId
        })
    }

    let sendComment = () => {
        fetch(sendComments,
            {
                method:"POST",
                body: JSON.stringify(comments),
                headers: { 
                    'Content-type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZlZmUzOTlkOTU1NzAwMTVjY2MwYTUiLCJpYXQiOjE3MTg1NTAwNzMsImV4cCI6MTcxOTc1OTY3M30.QKZ7M_lFliPGGHbMgPhMdWsdqtr63FBeA_vTqWLDULs"}
            })
            .then((response) => response.json())
            .then((data) => {
                setAdd(!add) 
                setComments({ comment: '', rate: 0, elementId: elementId },
                console.log(data))})//resettare ai valori predefiniti una volta aggiunto
            .catch((error) => console.error(error))
    }

    return(
        <>
        <Form.Group className="mb-3" >
            <Form.Control 
                as="textarea" 
                rows={3} 
                type="text" 
                placeholder="Add your comment..." 
                onChange={commentHandler}/>
            <Button variant="secondary" onClick={sendComment}>Invio</Button>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Select onChange={rateHandler}>
                <option>Rating the book</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
        </Form.Group>
        
        </>
    )
}

export default AddComment