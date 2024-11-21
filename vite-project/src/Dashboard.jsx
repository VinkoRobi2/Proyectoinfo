import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import jsonData from "./data.json";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [reservedProducts, setReservedProducts] = useState([]);

  useEffect(() => {
    setUser(jsonData.user);
    setProducts(jsonData.products);
  }, []);

  const handleReserve = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, reserved: true } : product
      )
    );
    const reserved = products.find((product) => product.id === productId);
    if (reserved && !reservedProducts.includes(reserved)) {
      setReservedProducts((prev) => [...prev, reserved]);
    }
  };

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
            <Link to="/mis-reservas" className="r">Mis Reservas</Link>
          </li>
          <li>
  <Link to="/logs" className="log">Logs</Link>
</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <div className="user-info">
            <p className="user-name">{user?.name}  items:De 8vo a bachillerato</p>
            <p className="user-role">{user?.role}</p>
          </div>
        </div>

        <div className="product-cards">
          {products.map((product) => (
            <div
              key={product.id}
              className={`product-card ${product.reserved ? "reserved" : ""}`}
            >
              <h4>{product.name}</h4>
              <p>{product.category}</p>
              <p>Stock: {product.stock}</p>
              {!product.reserved && (
                <button
                  className="reserve-btn"
                  onClick={() => handleReserve(product.id)}
                >
                  Reservar
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
