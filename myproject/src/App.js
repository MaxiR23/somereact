//@ts-check
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/Body/ItemListContainer';
import TestFetchContainer from './components/Pruebas/TestFetchContainer';

function App() {

  const cardProducts = 10;
  const charUserName = 'M';

  return (
    <>
      <NavBar cardProducts={cardProducts} charUserName={charUserName}></NavBar>
      <ItemListContainer></ItemListContainer>
      <TestFetchContainer></TestFetchContainer>
    </>
  );
}

export default App;
