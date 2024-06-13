import React, { useState } from "react";
import { Row, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";


function AllTheBooks(props){

  const [ search, setSearch ] = useState('')
  const [selected, setSelected] = useState(false)

    return (
      <>
        <Form.Label className="m-3">
          <Form.Control
            type="search"
            placeholder="Search your book..."
            value={search} //prende ciò che scriviamo
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Label>

        <Row>
          {props.books
          .filter(book => book.title.toLowerCase().includes(search))
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