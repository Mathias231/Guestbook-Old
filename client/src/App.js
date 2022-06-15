import { Router } from "react-router-dom";

// Importing components
import Navbar from './components/Navbar/Navbar';
import MainBody from './components/MainBody/MainBody';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainBody />
      </div>
    </Router>
  );
}

export default App;
