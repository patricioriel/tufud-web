import './App.css';
import Beneficios from './components/Beneficios';
import Clientes from './components/Clientes';
import Contactanos from './components/Contactanos';
import Footer from './components/Footer';
import Info from './components/Info';
import Info2 from './components/Info2';
import Navbar from './components/Navbar';
import Separador from './components/Separador';
import Testimonios from './components/Testimonios';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Info/>
      <Beneficios/>
      <Info2/>
      <Testimonios/>
      <Separador/>
      <Contactanos/>
      <Clientes/>
      <Footer/>
    </div>
  );
}

export default App;
