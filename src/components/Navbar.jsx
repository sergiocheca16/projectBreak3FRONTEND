import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className="navbar">
      <div>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Cerrar sesión</button>
        ) : (
          <div>
            <button onClick={() => navigate('/login')}>Iniciar sesión</button>
            <button onClick={() => navigate('/register')}>Registrarse</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

