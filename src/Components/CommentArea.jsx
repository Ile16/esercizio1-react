
import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";


const seeComments = "https://striveschool-api.herokuapp.com/api/books/";


function CommentArea( { asin }) {
    const [ comments, setComments ] = useState([])

    
// chiamata fetch per i commenti 
    useEffect(() => {
        fetch(seeComments+asin+"/comments/",
        {
            headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY5YjMyMjg1M2E0ZDAwMTU0ODYyMTEiLCJpYXQiOjE3MTgyNjkyNzMsImV4cCI6MTcxOTQ3ODg3M30.OZwcgdec9rVNJsTYEsaiWPtKC1OWHyoikrbc1oBAIZQ"}
        })
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) =>  console.log ("errore:", error))
    }, [asin])




    return (
        <>
        <CommentList comments={comments}/> {/* salvo le recensioni all'inteerno dello stato */}

        <AddComment />
        </>

        //deve apparire solo al click del SingleBook

    );
}

export default CommentArea;