import React, { useState } from 'react';

function Infos() {

    const [selectedRace, setSelectedRace] = useState('');
    const handleRaceChange = (event) => {
        const { value } = event.target;
        if (value === 'outra') {
            setCustomRace('');
        }
        setSelectedRace(value);
    };

    const handleCustomRaceChange = (event) => {
        setCustomRace(event.target.value);
    };

    const [hp, setHp] = useState(0);

    const handleIncrement = () => {
        setHp(hp + 1);
    };

    const handleDecrement = () => {
        if (hp > 0) {
            setHp(hp - 1);
        }
    };
    return (
        <>
            <div className='ml-2 '>
                <label
                    htmlFor="nome"
                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                >
                    Nome
                </label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    className="mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                />
            </div>

            <div className='ml-2'>
                <label
                    htmlFor="nome"
                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                >
                    Idade
                </label>
                <div className='flex flex-row'>
                    <input
                        type="number"
                        placeholder="Digite a idade"
                        className=" mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                    />
                </div>
            </div>
            <div className='ml-2 '>
                <label
                    htmlFor="nome"
                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                >
                    Raça
                </label>
                <select
                    id="raca"
                    className="text-gray-950 mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
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
                        className="ml-2 mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                        placeholder="Digite a raça desejada"
                        value={customRace}
                        onChange={handleCustomRaceChange}
                    />
                )}
            </div>


        </>

    );
}

export default Infos;
