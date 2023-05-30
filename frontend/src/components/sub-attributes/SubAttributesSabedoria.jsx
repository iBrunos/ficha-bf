import React, { useState, useEffect } from 'react';

import axios from 'axios';

function SubAttributesSabedoria() {
    const [percepcao, setPercepcao] = useState('');
    const [medicina, setMedicina] = useState('');
    const [sobrevivencia, setSobrevivencia] = useState('');
    const [perspicacia, setPerspicacia] = useState('');
    const [proficiencia, setProficiencia] = useState();
    const [toggleMedicina, setToggleMedicina] = useState(false);
    const [toggleSobrevivencia, setToggleSobrevivencia] = useState(false);
    const [togglePerspicacia, setTogglePerspicacia] = useState(false);
    const [togglePercepcao, setTogglePercepcao] = useState(false);
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
                    const sheetData = response.data[0];
                    setPercepcao(calcularMod(sheetData.sabedoria || 0));
                    setMedicina(calcularMod(sheetData.sabedoria || 0));
                    setSobrevivencia(calcularMod(sheetData.sabedoria || 0));
                    setPerspicacia(calcularMod(sheetData.sabedoria || 0));
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
                    const sheetData = response.data[0];
                    setToggleMedicina(sheetData.toggleMedicina);
                    setToggleSobrevivencia(sheetData.toggleSobrevivencia);
                    setTogglePerspicacia(sheetData.togglePerspicacia);
                    setTogglePercepcao(sheetData.togglePercepcao);
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
            case 'medicina':
                setTogglemedicina(!togglemedicina);
                break;
            case 'sobrevivencia':
                setTogglesobrevivencia(!togglesobrevivencia);
                break;
            case 'perspicacia':
                setToggleperspicacia(!toggleperspicacia);
                break;
            case 'percepcao':
                setPercepcao(!togglePercepcao);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <div className="mt-2  bg-gray-900 h-[15rem] w-[11rem] rounded-xl object-cover px-30 =">
                <div className="flex flex-col">
                    <div className="w-40 ml-2 grid grid-cols-2 border-solid border-2 border-red-900 pb-2">
                        <div className="ml-2">
                            <label htmlFor="nome" className="block font-semibold text-sm text-gray-200">
                                Sabedoria
                            </label>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Medicina
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleMedicina ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(medicina + proficiencia)}
                                        readOnly
                                        disabled
                                    >{medicina + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(medicina)}
                                        readOnly
                                        disabled
                                    >{medicina}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleMedicina}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('medicina')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Sobrevivência
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleSobrevivencia ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(sobrevivencia + proficiencia)}
                                        readOnly
                                        disabled
                                    >{sobrevivencia + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(sobrevivencia)}
                                        readOnly
                                        disabled
                                    >{sobrevivencia}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleSobrevivencia}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('sobrevivencia')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                            Percepção
                            </label>
                            <div className="flex flex-row mt-1">
                                {togglePercepcao ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(percepcao + proficiencia)}
                                        readOnly
                                        disabled
                                    >{percepcao + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(percepcao)}
                                        readOnly
                                        disabled
                                    >{percepcao}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={togglePercepcao}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('percepcao')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                            Perspicácia
                            </label>
                            <div className="flex flex-row mt-1">
                                {togglePerspicacia ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(perspicacia + proficiencia)}
                                        readOnly
                                        disabled
                                    >{perspicacia + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(perspicacia)}
                                        readOnly
                                        disabled
                                    >{perspicacia}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={togglePerspicacia}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('perspicacia')}
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
export default SubAttributesSabedoria;