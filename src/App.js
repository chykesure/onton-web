import React from 'react';
import Navbar from './Views/Navbar'; // Ensure the path is correct
import Homepage from './Views/Homepage'; // Ensure the path is correct
import Vision from './Views/Vision';
import Join from './Views/Join';
import Contact from './Views/Contact';
import Line from './Views/Line';
import Token from './Views/Token';
import Roadmap from './Views/Roadmap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Line />
      <Homepage />
      <Line />
      <Vision />
      <Line />
      <Join />
      <Line />
      <Token />
      <Line />
      <Roadmap />
      <Line />
      <Contact />
    </div>
  );
}

export default App;
