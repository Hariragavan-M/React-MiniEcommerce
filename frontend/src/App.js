import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productdetails from './pages/productdetails';
import { useState } from 'react';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function App() {

  const[cartitems,setcartitems] = useState([])

  return (
    <>
      <Router>
        <div>
          <ToastContainer theme='dark' position='bottom-center' />
          <Header cartitems={cartitems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/product/:id" element={<Productdetails cartitems={cartitems} setcartitems={setcartitems} />} />
            <Route path="/cart" element={<Cart cartitems={cartitems} setcartitems={setcartitems} />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
