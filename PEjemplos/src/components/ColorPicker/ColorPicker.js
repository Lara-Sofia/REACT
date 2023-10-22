import React, { useState } from "react";

const ColorPicker = () => {
  const colors = ["Rojo", "Verde", "Azul"];
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="">Seleccione un color</option>
        {colors.map((color) => (
          <option value={color} key={color}>
            {color}
          </option>
        ))}
      </select>
      <p>Color seleccionado: {selectedColor}</p>
    </div>
  );
};

export default ColorPicker;
