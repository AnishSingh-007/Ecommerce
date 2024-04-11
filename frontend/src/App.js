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


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
