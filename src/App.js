
import './App.scss';
import { Add } from "./Add";
import icon from './img/bargain.png';
import logo from './img/426357.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>
          BAZA KONTRAHENTÓW
        </h1>

      </header>

      <div className="title" >
        <h2>NOWY KONTRAHENT</h2>
        <img src={icon} className="icon" alt="" />
      </div>
      
      <Add  />
      
    </div>
  );
}

export default App;
