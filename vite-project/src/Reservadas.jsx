import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./Dashboard.css";
import jsonData from "./data.json"; // Datos de productos del Dashboard
import jsonData2doA7mo from "./data2do7mo.json"; // Datos de productos de 2do a 7mo

const Reservadas = () => {
  const [user, setUser] = useState(null);
  const [reservedProducts, setReservedProducts] = useState([]);

  useEffect(() => {
    setUser(jsonData.user);
    const reservedFromFirstJson = jsonData.products.filter((product) => product.reserved);
    const reservedFromSecondJson = jsonData2doA7mo.products.filter((product) => product.reserved);
    
    const allReservedProducts = [...reservedFromFirstJson, ...reservedFromSecondJson];
    
    setReservedProducts(allReservedProducts);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>Opciones</h3>
        <ul>
          <li>Logs</li>
          <li>Reservadas</li>
          <li>Configuraciones</li>
          <li>
            <Link to="/dashboard">De 8vo a bachillerato</Link>
          </li>
        </ul>
      </div>

      <div className="main-content">
        {/* Barra superior */}
        <div className="header">
          <div className="user-info">
            <p className="user-name">{user?.name}</p>
            <p className="user-role">{user?.role}</p>
          </div>
        </div>

        {/* Tarjetas de productos reservados */}
        <div className="product-cards">
          {reservedProducts.length > 0 ? (
            reservedProducts.map((product) => (
              <div
                key={product.id}
                className={`product-card ${product.reserved ? "reserved" : ""}`}
              >
                <h4>{product.name}</h4>
                <p>{product.category}</p>
                <p>Stock: {product.stock}</p>
              </div>
            ))
          ) : (
            <p>No hay productos reservados.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservadas;
