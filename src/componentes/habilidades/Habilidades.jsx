import React from 'react'
import './Habilidades.css'

const Habilidades = () => {
  return (
    <section className="container__habilidades" id="habilidades">
        <h2>Habilidades</h2>
        <div className="container__habilidades__skills">
            <div className="habilidades">
                <div className="habilidades__skill">
                    <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt="html"/>
                    <p>HTML</p>
                </div>
                <div className="habilidades__skill">
                    <img src="https://img.icons8.com/color/96/000000/css3.png" alt="css"/>
                    <p>CSS</p>
                </div>
                <div className="habilidades__skill">
                    <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="js"/>
                    <p>JavaScript</p>
                </div>
                <div className="habilidades__skill">
                    <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="react"/>
                    <p>React</p>
                </div>
                <div className="habilidades__skill">
                    <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="node"/>
                    <p>Node</p>
                </div>
                <div className="habilidades__skill">
                    <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="mongo"/>
                    <p>MongoDB</p>
                </div>
                <div className="habilidades__skill">
                    <img src="https://img.icons8.com/color/96/000000/git.png" alt="git"/>
                    <p>Git</p>
                </div>
                <div className="habilidades__skill">
                    <img src="https://img.icons8.com/color/96/000000/github--v1.png" alt="github"/>
                    <p>Github</p>
                </div>

            </div>


            
        </div>
    </section>
  )
}

export default Habilidades