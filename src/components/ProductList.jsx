import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/ProductList.css';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        // Usando JSONPlaceholder API para simular productos
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }
        const data = await response.json();
        
        // Transformar los datos para simular productos
        const productos = data.slice(0, 20).map(item => {
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
          
          return {
            id: item.id,
            nombre: item.title,
            precio: precio,
            descripcion: item.body,
            categoria: item.id % 3 === 0 ? 'Electrónicos' : item.id % 3 === 1 ? 'Ropa' : 'Hogar',
            imagen: `https://picsum.photos/200/200?random=${item.id}`,
            stock: Math.floor(Math.random() * 100) + 1,
            rating: (Math.random() * 5).toFixed(1)
          };
        });
        
        setProductos(productos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const filteredProducts = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loading">Cargando productos...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos o categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="product-container">
        {filteredProducts.map((p) => (
          <Card 
            key={p.id} 
            producto={p}
          />
        ))}
      </div>
      {filteredProducts.length === 0 && searchTerm && (
        <p className="no-results">No se encontraron productos que coincidan con "{searchTerm}"</p>
      )}
    </div>
  );
};

export default ProductList;
