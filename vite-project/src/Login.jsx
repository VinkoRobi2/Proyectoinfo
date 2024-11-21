import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import descarga from './assets/descarga.png'
import './Login.css'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();  


  useEffect(() => {
    document.body.classList.add("login-page");

    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);  

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "password123") {
      setError(""); 
      navigate("/dashboard");  
    } else {
      setError("Credenciales incorrectas, inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="header">
          <img
            src={descarga}
            alt="Icono de bienvenida"
            className="welcome-image"
          />
        </div>
        <p>Por favor, inicia sesión</p>
        {error && <div className="error">{error}</div>}
        <div className="input-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Iniciar sesión
        </button>
        <p className="register-link">
          ¿No tienes cuenta? <a href="#">Regístrate</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
