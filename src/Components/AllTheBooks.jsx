import React, { useState } from "react";
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";


function AllTheBooks(props){
  // console.log(props)

  // const [ search, setSearch ] = useState('')
  const [selected, setSelected] = useState(false)

  // console.log("books:", props.books)

    return (
      <>
        <Row>
          {props.books
          .filter(book => book.title.toLowerCase().includes(props.searchQuery))
          //iterazione dei libri 
          .map(book =>  <SingleBook 
            key= {book.asin} 
            data-testid="cards"
            book={book} 
            selected={selected === book.asin}
            onSelect={() => setSelected(selected === book.asin ? null : book.asin)}/>)}
        </Row>

      </>

    );
}

export default AllTheBooks;