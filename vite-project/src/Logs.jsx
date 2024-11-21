import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import jsonData2doA7mo from "./data2do7mo.json";
import jsonData8voBachillerato from "./data.json";

const Logs = () => {
  const [reservedItems, setReservedItems] = useState([]);

  useEffect(() => {
    const reservedFrom2doA7mo = jsonData2doA7mo.products.filter(
      (product) => product.reserved
    );
    const reservedFrom8voBachillerato = jsonData8voBachillerato.products.filter(
      (product) => product.reserved
    );
    setReservedItems([...reservedFrom2doA7mo, ...reservedFrom8voBachillerato]);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>Opciones</h3>
        <ul>
          <li>
            <Link to="/dashboard" className="can">
              De 8vo a bachillerato
            </Link>
          </li>
          <li>
            <Link to="/de-2do-a-7mo" className="can">
              De 2do a 7mo
            </Link>
          </li>
          <li>
            <Link to="/mis-reservas" className="can">
              Mis Reservas
            </Link>
          </li>
          <li>
            <Link to="/logs" className="log">
              Logs
            </Link>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <h2>Logs de Reservas</h2>
        </div>

        {reservedItems.length > 0 ? (
          <div className="product-cards">
            {reservedItems.map((item) => (
              <div key={item.id} className="product-card reserved">
                <h4>{item.name}</h4>
                <p>Categoría: {item.category}</p>
                <p>Stock reservado: {item.stock}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="error-message">No hay artículos reservados aún.</p>
        )}
      </div>
    </div>
  );
};

export default Logs;
