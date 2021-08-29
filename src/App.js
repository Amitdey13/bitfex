import React from 'react';
import './App.css';
import { Nav, Home, Info, Features, Services, Footer } from "./components"

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Features />
      <Services />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
