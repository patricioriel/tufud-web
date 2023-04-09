import './App.css';
import Beneficios from './components/Beneficios';
import Info from './components/Info';
import Info2 from './components/Info2';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Info/>
      <Beneficios/>
      <Info2/>
    </div>
  );
}

export default App;
