import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulamos la obtención del producto por ID
  // Lógica para generar más precios bajos que altos
  let precio;
  const random = Math.random();
  
  if (random < 0.5) {
    // 50% productos baratos (15.000 - 80.000 COP)
    precio = Math.floor(Math.random() * 65000) + 15000;
  } else if (random < 0.8) {
    // 30% productos medio (80.000 - 200.000 COP)
    precio = Math.floor(Math.random() * 120000) + 80000;
  } else {
    // 20% productos caros (200.000 - 500.000 COP)
    precio = Math.floor(Math.random() * 300000) + 200000;
  }

  const product = {
    id: parseInt(id),
    nombre: `Producto ${id}`,
    precio: precio,
    descripcion: `Esta es la descripción detallada del producto ${id}. Un excelente producto que cumple con todas las expectativas de calidad y funcionalidad.`,
    categoria: 'Electrónicos',
    imagen: `https://picsum.photos/400/400?random=${id}`,
    stock: Math.floor(Math.random() * 100) + 1,
    rating: (Math.random() * 5).toFixed(1),
    caracteristicas: [
      'Alta calidad',
      'Diseño moderno',
      'Fácil de usar',
      'Garantía de 1 año'
    ]
  };

  return (
    <div className="productdetail-container">
      <button 
        onClick={() => navigate(-1)}
        className="productdetail-back-button"
      >
        ← Volver
      </button>
      
      <div className="productdetail-content">
        <div>
          <img 
            src={product.imagen} 
            alt={product.nombre}
            className="productdetail-image"
          />
        </div>
        
        <div className="productdetail-info">
          <h1>{product.nombre}</h1>
          <p className="productdetail-category">{product.categoria}</p>
          <p className="productdetail-price">
            ${product.precio.toLocaleString()} COP
          </p>
          <p className="productdetail-rating">
            ⭐ {product.rating} / 5
          </p>
          
          <div className="productdetail-section">
            <h3>Descripción:</h3>
            <p>{product.descripcion}</p>
          </div>
          
          <div className="productdetail-section">
            <h3>Características:</h3>
            <ul>
              {product.caracteristicas.map((caracteristica, index) => (
                <li key={index}>{caracteristica}</li>
              ))}
            </ul>
          </div>
          
          <p className="productdetail-stock">
            Stock disponible: {product.stock} unidades
          </p>
          
          <div className="productdetail-buttons">
            <button className="productdetail-button cart">
              Agregar al Carrito
            </button>
            <button className="productdetail-button buy">
              Comprar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
