import './App.css';
import Beneficios from './components/Beneficios';
import Info from './components/Info';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Info/>
      <Beneficios/>
    </div>
  );
}

export default App;
