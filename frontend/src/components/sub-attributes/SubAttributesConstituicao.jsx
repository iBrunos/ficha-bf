import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SubAttributesConstituicao() {
    const [resistencia, setResistencia] = useState('');
    const [estamina, setEstamina] = useState('');
    const [proficiencia, setProficiencia] = useState();
    const [toggleResistencia, setToggleResistencia] = useState();
    const [toggleEstamina, setToggleEstamina] = useState();

    const API_URL = 'https://api-bladefall.vercel.app/toggles';
    const API_URL_SHEET = 'https://api-bladefall.vercel.app/sheet';

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: { Authorization: `Bearer ${token}` },
                };
                const response = await axios.get(API_URL_SHEET, config);

                if (response.data.length > 0) {
                    const sheetData = response.data[0]; // Acessa o primeiro objeto do array
                    setResistencia(calcularMod(sheetData.constituicao || 0));
                    setEstamina(calcularMod(sheetData.constituicao || 0));
                    setProficiencia(sheetData.proficiencia);
                }

            } catch (error) {
                // Tratar erros
            }
        };

        const fetchToggles = async () => {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: { Authorization: `Bearer ${token}` },
                };
                const response = await axios.get(API_URL, config);

                if (response.data.length > 0) {
                    const sheetData = response.data[0]; // Acessa o primeiro objeto do array
                    setToggleResistencia(sheetData.toggleResistencia);
                    setToggleEstamina(sheetData.toggleEstamina);
                }

            } catch (error) {
                // Tratar erros
            }
        };
        fetchToggles();
        fetchItems();
    }, [proficiencia]);
    const calcularMod = (valor) => {
        return Math.floor((valor - 10) / 2);
    };

    
  const toggleStat = (stat) => {
    switch (stat) {
      case 'resistencia':
        setToggleResistencia(!toggleResistencia);
        break;
      case 'estamina':
        setToggleEstamina(!toggleEstamina);
      default:
        break;
    }
  };
    return (
        <>
           <div className="mt-2  bg-gray-900 h-[15rem] ml-20 w-[11rem] rounded-xl object-cover px-30 mr-2">
                <div className="flex flex-col">
                    <div className="w-40 ml-2 grid grid-cols-2 border-solid border-2 border-red-900 pb-2">
                        <div className="ml-2">
                            <label htmlFor="nome" className="block font-semibold text-sm text-gray-200">
                               Constituição
                            </label>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Resistência
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleResistencia ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(resistencia + proficiencia)}
                                        readOnly
                                        disabled
                                    >{resistencia + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(resistencia)}
                                        readOnly
                                        disabled
                                    >{resistencia}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleResistencia}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('resistencia')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Estamina
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleEstamina ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(estamina + proficiencia)}
                                        readOnly
                                        disabled
                                    >{estamina + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(estamina)}
                                        readOnly
                                        disabled
                                    >{estamina}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleEstamina}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('estamina')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubAttributesConstituicao;