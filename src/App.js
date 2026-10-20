import React from 'react';
import Header from './componentes/Header/header';
import Inicio from './componentes/Inicio/Inicio';
import Proyectos from './componentes/proyectos/proyectos';
import jofranicon from './logo/jofrandev.png';
import './App.css';
import Acerca from './componentes/Acerca/acerca';
import Contacto from './componentes/Contacto/Contacto';
import Habilidades from './componentes/habilidades/Habilidades';
import Hblandas from './componentes/Hblandas/Hblandas';
import Footer from './componentes/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <Proyectos />
      <Acerca />
      <Habilidades />
      <Hblandas />
      <Contacto />
      <Footer />
    </div>
    
  );
}

export default App;
