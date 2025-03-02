

import React, {useState} from "react";
import jofranicon from '../../logo/jofrandev.png';
import './header.css';  // Import the CSS file
// Create a functional component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
        <div className="logo">
            <img src={jofranicon} className="logo" alt="logo" />
            <span>JOFRANDEV</span>
        </div>
        <nav className={`navbar ${isOpen && "open"}`}>
            <a href="#inicio">Inicio</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#acerca">Acerca de mí</a>
            <a href="#contacto">Contacto</a>
        </nav>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
        </div>
      
    </header>
  );
};
// Export the component
export default Header;