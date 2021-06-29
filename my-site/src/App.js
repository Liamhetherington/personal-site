import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage'
import './css/styles.css';

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
