import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Bienvenido a Tienda K
      </h1>
      
      <p className="home-description">
        Descubre los mejores productos con la mejor calidad en Tienda K.
      </p>
      
      <Link to="/products" className="home-button">
        Ver Productos
      </Link>

      <div className="home-features">
        <div className="home-feature">
          <h3>🚚 Envío Gratis</h3>
          <p>Envío gratuito en pedidos mayores a $50.000 COP</p>
        </div>
        
        <div className="home-feature">
          <h3>💳 Pago Seguro</h3>
          <p>Transacciones 100% seguras</p>
        </div>
        
        <div className="home-feature">
          <h3>🔄 Devoluciones</h3>
          <p>30 días para devoluciones</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
