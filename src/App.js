import React from 'react';
import Home from './component/Home/Home';
import Navbar from './Navbar/Navbar';
import Background from './component/background/background'
// import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Background /> */}
    </div>
  );
}

export default App;
