import React, { useState } from 'react';

function SlotGenerator() {
  const [numSlots, setNumSlots] = useState(0);
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleNumSlotsChange = (event) => {
    let value = parseInt(event.target.value);
    // Limitar o valor máximo para 20
    value = Math.min(value, 20);
    setNumSlots(value);
    setSelectedSlots(Array(value).fill(false));
  };

  const handleSlotToggle = (index) => {
    setSelectedSlots((prevSelectedSlots) => {
      const newSelectedSlots = [...prevSelectedSlots];
      newSelectedSlots[index] = !newSelectedSlots[index];
      return newSelectedSlots;
    });
  };

  return (
    <div>
      <label htmlFor="numSlots">Qtd: </label>
      <input
        type="number"
        id="numSlots"
        value={numSlots}
        onChange={handleNumSlotsChange}
        className=" mt-1 w-40 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
      />

      {selectedSlots.map((isSelected, index) => (
        <label key={index} className="my-2">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => handleSlotToggle(index)}
            className=" mt-1 ml-2 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-900 sm:text-sm"
          />
        </label>
      ))}
    </div>
  );
}


function Slots() {
  const [numDivs, setNumDivs] = useState(1); // Estado para armazenar a quantidade de divs
  const divs = [];

  const handleNumDivsChange = (event) => {
    const value = parseInt(event.target.value);
    setNumDivs(value);
  };

  for (let i = 0; i < numDivs; i++) {
    divs.push(
      <div className='mt-2 ml-2 text-white' key={i}>
        <input
          type="text"
          placeholder=" Slot / Técnica"
          className="mt-1 w-48 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
        />
        <SlotGenerator />
      </div>
    );
  }

  return (
    <div className='bg-gray-900 text-white mt-2 ml-2 rounded-xl w-[13rem]'>
      <div>
        <label className='ml-2 'htmlFor="numDivs">Recursos  </label>
        <input
          type="number"
          id="numDivs"
          value={numDivs}
          onChange={handleNumDivsChange}
          className="ml-2 mt-1 w-40 rounded-md shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
          min="0"
          max="10"
        />
      </div>
      {divs}
    </div>
  );
}

export default Slots;