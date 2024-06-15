import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Welcome from "./Welcome";
import AddComment from "./AddComment";
import AllTheBooks from "./AllTheBooks";

import SingleBook from "./SingleBook";
import SearchBook from "./SearchBook";
import App from "../App";




//TEST 1 verifica che il componente "welcome" venga montato correttamente PASS
test("componente Welcome renderizzato", () => {
    render(<Welcome />)
    const componenteWelcomeMontato = screen.getByText(/CHOOSE YOUR BOOK/i);
    expect(componenteWelcomeMontato).toBeInTheDocument();
})


//TEST 2 verifica che vengano effettivamente renderizzate tante bootstrap cards
//quanti sono i libri nel file json utilizzato

test("verifica che tutte le card siano rendirizzate", () => {
    //verifica del n. di card renderizzate corrispondente al numero di libri nell'array book
    render(<App />)
    const cards = screen.getAllByTestId("cards");
    expect(cards).toHaveLength(book.length);
})



//TEST 3 verifica che il componente CommentArea venga renderizzato correttamente PASS
test("renderizzazione del componente CommentArea", () => {
    render(<AddComment />)
    const commentiLibri = screen.getByPlaceholderText(/Add your comment.../i)
    expect(commentiLibri).toBeInTheDocument()
});


//TEST 4 verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto
test("ricerca funzionante", async () =>{
    render(< SearchBook />)
    const inputRicerca = screen.getByPlaceholderText(/Search your book.../i)

    fireEvent.change(inputRicerca, {target: {value: "Lean"}})
    const libriFiltrati = await screen.findAllByTestId("cards");
    expect(libriFiltrati).toHaveLength(1)
    expect(screen.getByText(/Lean In/i)).toBeInTheDocument();
})

//TEST 5 verifica che, cliccando su un libro, il suo bordo cambi colore
test("bordo rosso al click", () => {
    render(<SingleBook />)
    const gestioneBordo = screen.getByTestId("cards");
    fireEvent.click(gestioneBordo);
    expect(gestioneBordo).toHaveStyle("border: 2px solid red")
    // expect(gestioneBordo).toHaveStyle("border: 2px solid red")
})

//TEST 6 verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale


//TEST 7 verifica che all'avvio della pagina, senza aver ancora cliccato su nessun libro, 
//non ci siano istanze del componente SingleComment all'interno del DOM



//TEST 8 verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate 
//correttamente all'interno del DOM

