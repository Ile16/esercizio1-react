import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import { Container } from 'react-bootstrap';
import AllTheBooks from './Components/AllTheBooks';
import fantasy from './books/fantasy.json';
import history from './books/history.json';

function App() {
  return (
    <>
      <MyNav />
      <Container className='my-3 text-center'>
        <Welcome />
          <AllTheBooks books={fantasy}/>
          <AllTheBooks books={history} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
