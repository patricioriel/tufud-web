import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Restaurante from './components/Restaurante';
import Proveedores from './components/Proveedores';
import Iniciarsesion from './components/Iniciarsesion';
import Noticias from './components/Noticias';
import Noticia1 from './components/Noticia1';
import Noticia2 from './components/Noticia2';
import Noticia3 from './components/Noticia3';
import Noticia4 from './components/Noticia4';
import TodasNoticias from './components/TodasNoticias';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path={'/tufud-web'} element={<Home/>}/>
            <Route path={'/restaurante'} element={<Restaurante/>}/>
            <Route path={'/proveedor'} element={<Proveedores/>}/>
            <Route path={'/iniciarsesion'} element={<Iniciarsesion/>}/>
            <Route path={'/noticias'} element={<Noticias/>}/>
            <Route path={'/noticias/1'} element={<Noticia1/>}/>
            <Route path={'/noticias/2'} element={<Noticia2/>}/>
            <Route path={'/noticias/3'} element={<Noticia3/>}/>
            <Route path={'/noticias/4'} element={<Noticia4/>}/>
            <Route path={'/noticias/all'} element={<TodasNoticias/>}/>
            <Route path={'/contacto'} element={<Contacto/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
