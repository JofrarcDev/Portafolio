
import './proyectos.css';


const Proyecto = (props) => {
    return (
        <div className="proyecto__caja">
                <div className="contenedor__detalles">
                    <figure className="proyecto__figura">
                        <img className="proyecto__img" src={require(`../../../public/imagenes/proyecto-${props.imagen}.png`)} alt={`${props.nombre}`} />
                    </figure>
                    <div className='contenedor__texto'>
                        <h3 className="proyecto__titulo">{props.nombre}</h3>
                        <p className="proyecto__descripcion">{props.descripcion}</p> 
                    </div> 
                    
                </div>
            
            <div className="proyecto__caja-botones">
                <a href={`${props.link}`} className="proyecto__boton">Ver Proyecto</a>
                <a href={`${props.codigo}`} className="proyecto__boton">Ver Código</a>
            </div>
        </div>
       
    );

};

export default Proyecto;