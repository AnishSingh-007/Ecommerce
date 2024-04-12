// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Home/>}/>       
//       {/*
//         <Route exact path="/admin/*" element={<Index/>}/> 
//         */}
//       </Routes>                      
//     </BrowserRouter>
//   );
// }

// export default App;


import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';

import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider } from './assets/CartContext';
import classes from './App.module.css';



const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <BrowserRouter>
    <CartProvider>
      <div className={classes.app}>
        <Header />
        <main className={classes.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </main>
        <Footer />
      </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
