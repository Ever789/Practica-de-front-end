import React from 'react';
import '../estilos/Card.css';

function Card(props) {
  return (
    <div className="card">
      <img 
        className='imagen-portada'
        src={require(`../imagenes/portada-${props.imageUrl}`)}
        alt='Portada' />
      <h3>{props.title}</h3>
    </div>
  );
}

export default Card;