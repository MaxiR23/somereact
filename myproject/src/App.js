//@ts-check
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/Body/ItemListContainer';

function App() {

  const cardProducts = 10;
  const charUserName = 'M';

  return (
    <>
      <NavBar cardProducts={cardProducts} charUserName={charUserName}></NavBar>
      <ItemListContainer></ItemListContainer>
    </>
  );
}

export default App;
