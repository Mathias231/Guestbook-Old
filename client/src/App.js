import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Importing components
import Navbar from './components/navbar/Navbar';
import MainBody from './components/mainBody/MainBody';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <MainBody />
    </Router>
  );
}

export default App;
