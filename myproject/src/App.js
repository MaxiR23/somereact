//@ts-check
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import BodyCard from './components/Navbar/BodyCard';
import { Container } from '@mui/system';

function App() {

  const cardProducts = 10;
  const greetings = 'Hi there!';
  const charUserName = 'M';

  return (
    <>
      <NavBar cardProducts={cardProducts} charUserName={charUserName}></NavBar>
      <ItemListContainer greetings={greetings}></ItemListContainer>
      <Container fixed sx={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        gap: 2
      }}>
          <BodyCard></BodyCard>
          <BodyCard></BodyCard>
          <BodyCard></BodyCard>
      </Container>
    </>
  );
}

export default App;
