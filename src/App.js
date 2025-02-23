import React from 'react';
import jofranicon from './logo/jofrandev.png';
import Header from './componentes/Header/header';
import Inicio from './componentes/Inicio/Inicio';
import Proyectos from './componentes/proyectos/proyectos';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <Proyectos />
    </div>
    
  );
}

export default App;
