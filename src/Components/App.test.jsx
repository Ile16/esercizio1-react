import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Welcome from "./Welcome";
import AddComment from "./AddComment";
import AllTheBooks from "./AllTheBooks";
import SingleBook from "./SingleBook";
import App from "../App";
import fantasy from '../books/fantasy.json';
import CommentList from "./CommentList";
import history from '../books/history.json';
import SingleComment from "./SingleComment";



//TEST 1 verifica che il componente "welcome" venga montato correttamente PASS
test("componente Welcome renderizzato", () => {
    render(<Welcome />)
    const componenteWelcomeMontato = screen.getByText(/CHOOSE YOUR BOOK/i);
    expect(componenteWelcomeMontato).toBeInTheDocument();
})


//TEST 2 verifica che vengano effettivamente renderizzate tante bootstrap cards
//quanti sono i libri nel file json utilizzato PASS

test("verifica che tutte le card siano rendirizzate", () => {
    //verifica del n. di card renderizzate corrispondente al numero di libri nell'array book
    render(<App />)
    const cards = screen.getAllByTestId("cards");
    expect(cards).toHaveLength(history.length);
})


//TEST 3 verifica che il componente CommentArea venga renderizzato correttamente PASS
test("renderizzazione del componente CommentArea", () => {
    render(<AddComment />)
    const commentiLibri = screen.getByPlaceholderText(/Add your comment.../i)
    expect(commentiLibri).toBeInTheDocument()
});


//TEST 5 verifica che, cliccando su un libro, il suo bordo cambi colore
test("bordo rosso al click", () => {
    render(<SingleBook />)
    const gestioneBordo = screen.getByTestId("cards");
    fireEvent.click(gestioneBordo);
    expect(gestioneBordo).toHaveStyle("border: 2px solid red")
    // expect(gestioneBordo).toHaveStyle("border: 2px solid red")
})

//TEST 6 verifica che, cliccando su di un secondo libro dopo il primo, 
//il bordo del primo libro ritorni normale

test("click reaction ", () => {
    render(< SingleBook />)
    const elemeento1 = screen.getAllByTestId("cards");
    fireEvent.click(elemeento1);
    expect(elemeento1).toHaveStyle("border: 2px solid red");
    const elemento2 = screen.getAllByRole("div");
    expect(elemento2).toHaveStyle("border: 2px solid red");
    expect(elemeento1).not.toHaveStyle("border: 2px solid red")
})


//TEST 7 verifica che all'avvio della pagina, senza aver ancora cliccato su nessun libro, 
//non ci siano istanze del componente SingleComment all'interno del DOM
test("avvio pagina no istanze SingleComment", () => {
    render(<SingleBook />)
    const componente = screen.getAllByTestId("commento");
    expect(componente).not.toBeInTheDocument()

})


//TEST 8 verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate 
//correttamente all'interno del DOM

test("lista recensioni", () =>{
    render(<SingleBook />)
    const selezioneLibri = screen.getAllByTestId("cards");
    fireEvent.click(selezioneLibri)
    const commentLoading = screen.getAllByTestId("commenti");
    expect(commentLoading).toBeInTheDocument()
})