import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { Read } from './components/Read';
import { Products } from './components/Products';
import { Login } from './components/Login';
import AboutUs from './components/AboutUs';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { ProductForm } from './components/ProductForm';
import { createContext, useState } from 'react';
import { Details } from './components/Details';

export const CartContext = createContext();

function App() {
  const [cartCount, setCartCount] = useState(0);
  let clearCartAndStorage = () => {
    setCartCount(0);
    localStorage.clear();
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

 

  return (
    <CartContext.Provider value={{ cartCount, addToCart, clearCartAndStorage }}>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="read" element={<Read />} />
          <Route path="*" element={<NotFound />} />
          <Route path="products/:id/edit" element={<ProductForm />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="products" element={<Products />} />
        </Routes>
  
      </div>
    </CartContext.Provider>
  );
}

export default App;