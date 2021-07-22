import Navbar from './components/Navbar/Navbar'
import Homepage from './views/Homepage'
import ContactForm from './components/ContactForm';
import './css/styles.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="app-body">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
