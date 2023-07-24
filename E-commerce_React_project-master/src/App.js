import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { MySlider } from './components/MySlider';
import { MyCard } from './components/MyCard';
import { MyJpg } from './components/MyJpg';
import { Image } from './components/Image';
import {Footer}  from './components/Footer';
import { Slides } from './components/Slides';
import { Read } from './components/Read';
import { Back } from './components/Back';
import { Products } from './components/Products';
import { Login } from './components/Login';
import  AboutUs  from './components/AboutUs';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { ProductForm } from './components/ProductForm';
import { createContext, useState } from 'react';
import { CardsSlider } from './components/CardsSlider';
import { Details } from './components/Details';
//  import {products} from './components/productlist';
// import SelectedProductPage from './components/SelectedProductPage';
export const CartContext = createContext();
function App() {
  const [cartCount, setCartCount] = useState(0);
  let clearCartAndStorage = () => {
    setCartCount(0);
    localStorage.clear();
  };
  
  const addToCart = () => {
    setCartCount(cartCount + 1);
  }
  //////////////////////////////////////////////////
  return (
    <CartContext.Provider value={{ cartCount, addToCart,clearCartAndStorage }}>
    <div className="App">
    <MyNav />
      <Routes>
      <Route path='' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='read' element={<Read />} />
        <Route path='*' element={<NotFound />} />
        <Route path='products/:id/edit' element={<ProductForm />} />
        {/* <Route path='SelectedProductPage/:id' element={<SelectedProductPage  />} /> */}
        <Route path='Details/:id' element={<Details  />} />
        <Route path='Products' element={<Products />} />

      </Routes>
      <Footer  />
    </div>
    </CartContext.Provider>
  );
}
export default App;
