import React, { useState } from "react";
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";


function AllTheBooks(props){
  

  // const [ search, setSearch ] = useState('')
  const [selected, setSelected] = useState(false)

    return (
      <>
        <Row>
          {props.books
          .filter(book => book.title.toLowerCase().includes(props.searchQuery))
          .map(book =>  <SingleBook 
            key= {book.asin} 
            book={book} 
            selected={selected === book.asin}
            onSelect={() => setSelected(selected === book.asin ? null : book.asin)}/>)}
        </Row>

      </>

    );
}

export default AllTheBooks;