import React from 'react';
import Header from './componentes/Header/header';
import Inicio from './componentes/Inicio/Inicio';
import Proyectos from './componentes/proyectos/proyectos';
import './App.css';
import Acerca from './componentes/Acerca/acerca';
import Contacto from './componentes/Contacto/Contacto';
import Habilidades from './componentes/habilidades/Habilidades';
import Hblandas from './componentes/Hblandas/Hblandas';

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
      <footer>
        <div className="container__footer">
          <p>© 2021 JofranDev. Todos los derechos reservados.</p>
          <a href="https://www.linkedin.com/in/jofran-ramirez-1b1a6a1b5/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
    
  );
}

export default App;
