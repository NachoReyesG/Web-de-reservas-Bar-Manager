import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const BarDetalle = () => {
  const { id } = useParams();
  const [mesas, setMesas] = useState([]);
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);
  const [franjaSeleccionada, setFranjaSeleccionada] = useState(null);

  /* useEffect(() => {
    fetch(`http://localhost:8080/bares/${id}/mesas`)
      .then(res => res.json())
      .then(data => setMesas(data))
      .catch(err => console.error('Error cargando mesas:', err));
  }, [id]); */

  useEffect(() => {
    // Simulación de datos mock (puedes reemplazar por fetch cuando conectes el backend)
    const mesasMock = [
      { id: 1, numero: 1, capacidad: 4, ubicacion: 'Terraza' },
      { id: 2, numero: 2, capacidad: 2, ubicacion: 'Interior' },
      { id: 3, numero: 3, capacidad: 6, ubicacion: 'Barra' },
    ];
    setMesas(mesasMock);
  }, [id]);

  //franjas horarias de disponibilidad de mesas
  const franjas = [
    { id: 1, label: "10:00 - 13:00", start: 10, end: 13 },
    { id: 2, label: "13:00 - 16:00", start: 13, end: 16 },
    { id: 3, label: "16:00 - 19:00", start: 16, end: 19 },
    { id: 4, label: "19:00 - 22:00", start: 19, end: 22 },
  ];

  const handleMesaClick = (mesa) => {
    setMesaSeleccionada(mesa);
    setFranjaSeleccionada(null); // reset franja al cambiar mesa
  };

  const handleFranjaClick = (franja) => {
    setFranjaSeleccionada(franja);
  };


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mesas disponibles para el bar {id}</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {mesas.map((mesa) => (
          <div
            key={mesa.id}
            className={`border p-4 rounded shadow cursor-pointer transition
              ${mesaSeleccionada?.id === mesa.id ? "bg-blue-200" : "hover:bg-gray-100"}`}
            onClick={() => handleMesaClick(mesa)}
          >
            <p><strong>Número:</strong> {mesa.numero}</p>
            <p><strong>Capacidad:</strong> {mesa.capacidad} personas</p>
            <p><strong>Ubicación:</strong> {mesa.ubicacion}</p>
          </div>
        ))}
      </div>

      {mesaSeleccionada && (
        <>
          <h3 className="text-xl font-semibold mb-2">
            Franjas horarias disponibles para la mesa {mesaSeleccionada.numero}:
          </h3>
          <div className="flex gap-4 flex-wrap">
            {franjas.map((franja) => (
              <button
                key={franja.id}
                onClick={() => handleFranjaClick(franja)}
                className={`px-4 py-2 rounded border cursor-pointer transition
                  ${franjaSeleccionada?.id === franja.id ? "bg-blue-500 text-white" : "bg-white hover:bg-blue-100"}`}
              >
                {franja.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
