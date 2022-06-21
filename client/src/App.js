import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Importing components
import Navbar from './components/Navbar/Navbar';
import MainBody from './components/MainBody/MainBody';
 

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <MainBody />
    </Router>
  );
}

export default App;
