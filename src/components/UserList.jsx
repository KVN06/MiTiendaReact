import React, { useEffect, useState } from 'react';
import '../styles/UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Error al cargar usuarios');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="userlist-loading">Cargando usuarios...</div>;
  if (error) return <div className="userlist-error">Error: {error}</div>;

  return (
    <div className="userlist-container">
      <h2 className="userlist-title">
        Lista de Usuarios
      </h2>
      
      <div className="userlist-search">
        <input
          type="text"
          placeholder="Buscar usuarios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="userlist-grid">
        {filteredUsers.map(user => (
          <div key={user.id} className="userlist-card">
            <h3>{user.name}</h3>
            <p>📧 {user.email}</p>
            <p>📱 {user.phone}</p>
            <p>🌐 {user.website}</p>
            <p>🏢 {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
