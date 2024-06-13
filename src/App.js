import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import { Container, Button } from 'react-bootstrap';
import AllTheBooks from './Components/AllTheBooks';
import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import romance from './books/romance.json';
import scifi from './books/scifi.json';
import { useState } from 'react';


function App() {

  let [type, setType] = useState('');


  return (
    <>
      <MyNav />
      <Container className='my-3 text-center'>
        <Welcome />
        <Button variant="warning" className='mx-3' onClick={() => setType('history')}>History</Button>
        <Button variant="warning" className='mx-3' onClick={() => setType('fantasy')}>Fantasy</Button>
        <Button variant="warning" className='mx-3' onClick={() => setType('horror')}>Horror</Button>
        <Button variant="warning" className='mx-3' onClick={() => setType('romance')}>Romance</Button>
        <Button variant="warning" className='mx-3' onClick={() => setType('scifi')}>Scifi</Button>
        {type === 'history' && <AllTheBooks books={history}/>}
        {type === 'fantasy' && <AllTheBooks books={fantasy}/>}
        {type === 'horror' && <AllTheBooks books={horror}/>}
        {type === 'romance' && <AllTheBooks books={romance}/>}
        {type === 'scifi' && <AllTheBooks books={scifi}/>}
          
          <AllTheBooks books={history} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
