import './App.css';
import Beneficios from './components/Beneficios';
import Contactanos from './components/Contactanos';
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
    </div>
  );
}

export default App;
