import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ producto }) => {
  const { id, nombre, precio, descripcion, categoria, imagen, stock, rating } = producto;
  
  return (
    <div className="card">
      <img src={imagen} alt={nombre} className="card-image" />
      <h3 className="card-title">{nombre}</h3>
      <p className="card-category">{categoria}</p>
      <p className="card-description">{descripcion.substring(0, 80)}...</p>
      <p className="card-price">${precio.toLocaleString()} COP</p>
      {rating && <p className="card-rating">⭐ {rating}</p>}
      {stock && <p className="card-stock">Stock: {stock}</p>}
      <Link to={`/producto/${id}`}>
        <button className="card-button">Ver Detalles</button>
      </Link>
    </div>
  );
};

export default Card;
