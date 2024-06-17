import { Form } from "react-bootstrap";

function SearchBook( {search, handleSearch }){

    return(
        <>
            <Form.Label className="m-3" data-testid="carte">
                <Form.Control
                    type="search"
                    placeholder="Search your book..."
                    value={search} //prende ciò che scriviamo
                    onChange={handleSearch}
                />
            </Form.Label>
        </>
    )
}

export default SearchBook