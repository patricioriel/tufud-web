import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Restaurante from './components/Restaurante';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path={'/tufud-web'} element={<Home/>}/>
            <Route path={'/restaurante'} element={<Restaurante/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
