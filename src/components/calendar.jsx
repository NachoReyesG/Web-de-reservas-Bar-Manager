// src/components/Calendar.jsx
import { useState } from 'react';

export const Calendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <div className="p-4">
      <label className="block mb-2 text-lg">Selecciona una fecha:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={handleChange}
        className="border px-3 py-2 rounded shadow"
      />
    </div>
  );
};

