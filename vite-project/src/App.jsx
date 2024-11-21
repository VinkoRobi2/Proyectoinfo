import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";
import Dashboard from "./Dashboard.jsx";
import De2doA7mo from "./De2doa7mo.jsx"; 
import MisReservas from "./MisReservas.jsx";
import Reservadas from './Reservadas';
import Logs from "./Logs.jsx";
const App = () => {
  const [reservedProducts, setReservedProducts] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
          path="/mis-reservas"
          element={<MisReservas reservedProducts={reservedProducts} />}
        />
      <Route path="/de-2do-a-7mo" element={<De2doA7mo />} />
      <Route path="/logs" element={<Logs />} /> 
      <Route path="/reservadas" element={<Reservadas />} />
    </Routes>
  );
};

export default App;
