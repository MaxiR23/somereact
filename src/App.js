import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/CartContainer/Cart';

function App() {

  const cardProducts = 10;
  const charUserName = 'M';

  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar cardProducts={cardProducts} charUserName={charUserName}></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/category/:idCategory' element={<ItemListContainer />}></Route>
        <Route path='/item/:idItem' element={<ItemDetailContainer />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
