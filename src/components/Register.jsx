/*import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const API_URL = import.meta.env.VITE_API_URL;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/auth/register`, { name, email, password });
      window.location.href = '/login';
    } catch (err) {
      setError('Error al registrarse');
    }
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      <form className="auth-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Register;*/

import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Usa la variable de entorno correctamente
  const API_URL = import.meta.env.VITE_API_URL; 

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log({ name, email, password });
    console.log('Api url:', `${API_URL}/api/auth/register`);

    try {
      // Asegúrate de que la URL esté correctamente concatenada
      await axios.post(`${API_URL}/api/auth/register`, { name, email, password });
      window.location.href = '/login';  // Redirige a la página de login
    } catch (err) {
      setError('Error al registrarse');
    }
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      <form className="auth-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Register;





