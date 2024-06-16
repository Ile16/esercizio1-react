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
  const [ search, setSearch ] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <>
      <MyNav search={search} handleSearch={handleSearch}/>
      <Container className='my-3 text-center'>
        <Welcome />
        <Button variant="warning" className='mx-3' onClick={() => setType('history')}>History</Button>
        <Button variant="warning" className='mx-3' onClick={() => setType('fantasy')}>Fantasy</Button>
        <Button variant="warning" className='mx-3' onClick={() => setType('horror')}>Horror</Button>
        <Button variant="warning" className='mx-3' onClick={() => setType('romance')}>Romance</Button>
        <Button variant="warning" className='mx-3' onClick={() => setType('scifi')}>Scifi</Button>
        {type === 'history' && <AllTheBooks books={history} searchQuery={search}/>}
        {type === 'fantasy' && <AllTheBooks books={fantasy} searchQuery={search}/>}
        {type === 'horror' && <AllTheBooks books={horror} searchQuery={search}/>}
        {type === 'romance' && <AllTheBooks books={romance} searchQuery={search}/>}
        {type === 'scifi' && <AllTheBooks books={scifi} searchQuery={search} />}
          
          <AllTheBooks books={history} searchQuery={search} data-testid="cards"/>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
