
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import SearchBook from "./SearchBook";


//TEST 4 verifica, magari con più tests, che il filtraggio dei libri 
//tramite navbar si comporti come previsto PASS

test("ricerca funzionante",  () =>{
    render(< SearchBook />)
    const inputRicerca = screen.getByPlaceholderText(/Search your book.../i)

    fireEvent.change(inputRicerca, {target: {value: "Lean"}})
    const libriFiltrati =  screen.getAllByTestId("carte");
    expect(libriFiltrati).toHaveLength(1)
})

afterEach(cleanup);