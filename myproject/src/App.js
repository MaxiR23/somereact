//@ts-check
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/Body/ItemListContainer';
import TestFetchContainer from './components/Pruebas/TestFetchContainer';
import ItemDetailContainer from './components/Body/ItemDetailContainer';

function App() {

  const cardProducts = 10;
  const charUserName = 'M';

  return (
    <>
      <NavBar cardProducts={cardProducts} charUserName={charUserName}></NavBar>
      {/* <ItemListContainer></ItemListContainer>
      <TestFetchContainer></TestFetchContainer> */}
      <ItemDetailContainer></ItemDetailContainer>
    </>
  );
}

export default App;
