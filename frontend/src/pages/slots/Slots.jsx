import React, { useState } from 'react';

function SlotGenerator() {
    const [numSlots, setNumSlots] = useState(0);
    const [selectedSlots, setSelectedSlots] = useState([]);

    const handleNumSlotsChange = (event) => {
        const value = parseInt(event.target.value);
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
            className='mt-2 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-gray-900 sm:text-sm'
          />
    
          {selectedSlots.map((isSelected, index) => (
            <label key={index} className="my-2">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleSlotToggle(index)}
                className='ml-2'
              />
            </label>
          ))}
        </div>
      );
    }

function Slots() {
    return (
        <div className='bg-gray-900 mt-2 ml-2 rounded-xl w-[13rem]'>
            <div className='mt-2 ml-2 text-white' >
                <h1>Slots Nv1</h1>
                <SlotGenerator />
            </div>
            <div className='mt-2 ml-2 text-white' >
                <h1>Slots Nv2</h1>
                <SlotGenerator />
            </div>
            <div className='mt-2 ml-2 text-white' >
                <h1>Slots Nv3</h1>
                <SlotGenerator />
            </div>
        </div>
    );
}

export default Slots;
