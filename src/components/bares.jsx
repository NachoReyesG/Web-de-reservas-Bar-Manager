// src/pages/Bares.jsx
import { useEffect, useState } from 'react';
import { BarCard } from './bar-card';
import { useNavigate } from 'react-router-dom';

export const Bares = () => {
  const [bares, setBares] = useState([]);
  const navigate = useNavigate();
  /* useEffect(() => {
    fetch('http://localhost:8080/bares') // Ajusta a la URL real del backend
      .then(res => res.json())
      .then(data => setBares(data))
      .catch(err => console.error('Error cargando bares:', err));
  }, []); */
  useEffect(() => {
    // Aquí va la llamada al backend
    const baresMock = [
      { id: 1, nombre: "Bar Central", ubicacion: "Madrid" },
      { id: 2, nombre: "La Terraza", ubicacion: "Barcelona" },
      { id: 3, nombre: "El Refugio", ubicacion: "Valencia" },
    ];
    setBares(baresMock);
  }, []);

  const handleBarClick = (bar) => {
    navigate(`/bar/${bar.id}`);
    // Aquí redirigimos a la pagina del bar (calendario y mesas disponibles)
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Bares Disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bares.map((bar) => (
          <BarCard key={bar.id} bar={bar} onClick={handleBarClick} />
        ))}
      </div>
    </div>
  );
};
