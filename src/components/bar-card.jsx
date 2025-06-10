export const BarCard = ({ bar, onClick }) => (
  <div
    onClick={() => onClick(bar)}
    className="cursor-pointer bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300"
  >
    <h2 className="text-xl font-bold mb-2">{bar.nombre}</h2>
    <p className="text-gray-600">{bar.ubicacion}</p>
  </div>
);
