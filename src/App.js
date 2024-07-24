import React from 'react';
import Navbar from './Views/Navbar'; // Ensure the path is correct
import Homepage from './Views/Homepage'; // Ensure the path is correct
import Vision from './Views/Vision';
import Jointeam from './Views/Jointeam';
import Contact from './Views/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Vision />
      <Jointeam />
      <Contact />
    </div>
  );
}

export default App;
