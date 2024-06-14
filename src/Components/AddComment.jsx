import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const sendComments = "https://striveschool-api.herokuapp.com/api/comments/:elementId";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY5YjMyMjg1M2E0ZDAwMTU0ODYyMTEiLCJpYXQiOjE3MTgzNzg2MzEsImV4cCI6MTcxOTU4ODIzMX0.Dxruo7AXRKlX8GqXom0fd51npOt1t97xymC_MSe0sQc"

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
                    Authorization: `Bearer ${token}`}
            })
            .then((response) => response.json())
            .then((data) => {
                setAdd(!add) 
                setComments({ comment: '', rate: 0, elementId: elementId })}) //resettare ai valori predefiniti una volta aggiunto
            .catch((error) => console.error("errore:", error))
    }

    return(
        <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" placheholder="Leave a comment" >
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