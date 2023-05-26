import React, { useState } from 'react';

function Infos() {
    const [selectedRace, setSelectedRace] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [customRace, setCustomRace] = useState('');
    const [customSize, setCustomSize] = useState('');


    const handleRaceChange = (event) => {
        const { value } = event.target;
        if (value === 'outra') {
            setCustomRace('');
        }
        setSelectedRace(value);
    };

    const handleSizeChange = (event) => {
        const { value } = event.target;
        if (value === 'outra') {
            setCustomRace('');
        }
        setSelectedSize(value);
    };
    const handleCustomRaceChange = (event) => {
        setCustomRace(event.target.value);
    };
    const handleCustomSizeChange = (event) => {
        setCustomSize(event.target.value);
    };

    return (
        <>
            <div className="bg-gray-900 rounded-xl object-cover w-52 h-56 px-30 ml-2 mr-2 mt-2">
                <div className='ml-2 mt-2 '>
                    <label
                        htmlFor="nome"
                        className="block text-xs font-medium text-gray-200"
                    >
                        Nome
                    </label>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        className="mt-2 w-40 rounded-md shadow-sm border-gray-700 bg-gray-800 text-gray-900 sm:text-sm"
                    />
                </div>

                <div className='ml-2'>
                    <label
                        htmlFor="nome"
                        className="block text-xs font-medium text-gray-200"
                    >
                        Idade
                    </label>
                    <div className='flex flex-row'>
                        <input
                            type="number"
                            placeholder="Digite a idade"
                            className=" mt-1 w-40 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-900 sm:text-sm"
                        />
                    </div>
                </div>
                <div className='ml-2 '>
                    <label
                        htmlFor="nome"
                        className="block text-xs font-medium text-gray-200"
                    >
                        Raça
                    </label>
                    <select
                        id="raca"
                        className=" mt-1 w-40 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
                        value={selectedRace}
                        onChange={handleRaceChange}
                    >
                        <option value="">Selecione uma raça</option>
                        <option value="Humano comum">Humano comum</option>
                        <option value="Humano sangue puro">Humano sangue puro</option>
                        <option value="Oni">Oni</option>
                        <option value="Kitsune">Kitsune</option>
                        <option value="Nezumi">Nezumi</option>
                        <option value="Ôkami">Ôkami</option>
                        <option value="Fukuro">Fukuro</option>
                        <option value="Elfo">Elfo</option>
                        <option value="Tanuki">Tanuki</option>
                        <option value="Felidaes">Felidaes</option>
                        <option value="Hitsuji">Hitsuji</option>
                        <option value="outra">Outra</option>
                        </select>
          {selectedRace === 'outra' && (
            <input
              type="text"
              className="mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-gray-900 sm:text-sm"
              placeholder="Digite a raça"
              value={customRace}
              onChange={handleCustomRaceChange}
            />
          )}
        </div>

        <div className="ml-2 ">
          <label
            htmlFor="nome"
            className="block text-xs font-medium text-gray-200"
          >
            Tamanho
          </label>
          <select
            className=" mt-1 w-40 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
            value={selectedSize}
            onChange={handleSizeChange}
          >
                        <option value="">Selecione um tamanho</option>
                        <option value="Humano comum">Miúdo</option>
                        <option value="Humano sangue puro">Pequeno</option>
                        <option value="Oni">Médio</option>
                        <option value="outra">Outra</option>
                        </select>
          {selectedSize === 'outra' && (
            <input
              type="text"
              className="mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-gray-900 sm:text-sm"
              placeholder="Digite o tamanho"
              value={customSize}
              onChange={handleCustomSizeChange}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default Infos;