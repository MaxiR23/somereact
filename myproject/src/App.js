//@ts-check
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const cardProducts = 10;
  const charUserName = 'M';

  return (
    <BrowserRouter>
      <NavBar cardProducts={cardProducts} charUserName={charUserName}></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/category/:idCategory' element={<ItemListContainer />}></Route>
        <Route path='/item/:idItem' element={<ItemDetailContainer />}></Route>
      </Routes>
      {/* <ItemListContainer></ItemListContainer> */}
    </BrowserRouter>
  );
}

export default App;
