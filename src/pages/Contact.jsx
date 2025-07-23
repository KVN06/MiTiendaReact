import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado! Gracias por contactarnos.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">
        Contáctanos
      </h1>
      
      <p className="contact-subtitle">
        ¿Tienes preguntas sobre Tienda K? ¡Nos encantaría saber de ti!
      </p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-field">
          <label className="contact-label">
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
        </div>
        
        <div className="contact-field">
          <label className="contact-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
        </div>
        
        <div className="contact-field">
          <label className="contact-label">
            Mensaje:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="contact-textarea"
          />
        </div>
        
        <button type="submit" className="contact-button">
          Enviar Mensaje
        </button>
      </form>
      
      <div className="contact-info">
        <p>📧 info@tiendak.com</p>
        <p>📍 Tienda K - Disponible en línea</p>
      </div>
    </div>
  );
};

export default Contact;
