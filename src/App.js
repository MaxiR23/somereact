import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/CartContainer/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import Banner from './components/Banner/Banner';
import Login from './components/Firebase/Login';
import { AuthProvider } from './context/AuthContext';
import Register from './components/Firebase/Register';
import ProtectedRoute from './components/Firebase/ProtectedRoute';

function App() {

  const charUserName = 'M';
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar charUserName={charUserName}></NavBar>
          <Routes>
            <Route path='/' element={<> <Banner /> <ItemListContainer /> </>}></Route>
            <Route path='/category/:idCategory' element={<ItemListContainer />}></Route>
            <Route path='/item/:idItem' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<ProtectedRoute> <Cart /> </ProtectedRoute>}></Route>
            {/* test */}
            <Route path='/checkout' element={<ProtectedRoute> <CheckOut /> </ProtectedRoute>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
