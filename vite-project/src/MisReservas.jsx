import React from "react";
import { Link } from "react-router-dom";

const MisReservas = ({ reservedProducts }) => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>Opciones</h3>
        <ul>
          <Link to="/reservadas" className="reserv">Reservadas</Link>
          <li>Configuraciones</li>
          <li>
            <Link to="/de-2do-a-7mo" className="can">De 2do a 7mo</Link>
          </li>
          <li>
            <Link to="/dashboard" className="can">De 8vo a Bachillerato</Link>
          </li>
          <li>
  <Link to="/logs" className="log">Logs</Link>
</li>
        </ul>

      </div>

      <div className="main-content">
        <h2>Mis Reservas</h2>
        <div className="product-cards">
          {reservedProducts.length > 0 ? (
            reservedProducts.map((product) => (
              <div key={product.id} className="product-card reserved">
                <h4>{product.name}</h4>
                <p>{product.category}</p>
              </div>
            ))
          ) : (
            <p>No tienes productos reservados.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default MisReservas