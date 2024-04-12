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


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';

import classes from './App.module.css';
import ProductDetail from './pages/ProductDetail';


const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <main className={classes.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
