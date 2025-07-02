import React from 'react';
import Navbar from './Component/Nav';
import Hero from './Component/Hero';
import About from './Component/About';


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
