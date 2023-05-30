import React, { useState, useEffect } from 'react';
import axios from 'axios';
function SubAttributesInteligencia() {
    const [investigacao, setInvestigacao] = useState(0);
    const [historia, setHistoria] = useState(0);
    const [aprender, setAprender] = useState(0);
    const [misticismo, setMisticismo] = useState(0);
    const [proficiencia, setProficiencia] = useState(3);
    const [toggleInvestigacao, setToggleInvestigacao] = useState(false);
    const [toggleHistoria, setToggleHistoria] = useState(false);
    const [toggleAprender, setToggleAprender] = useState(false);
    const [toggleMisticismo, setToggleMisticismo] = useState(false);

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
                    setInvestigacao(calcularMod(sheetData.inteligencia || 0));
                    setHistoria(calcularMod(sheetData.inteligencia || 0));
                    setAprender(calcularMod(sheetData.inteligencia || 0));
                    setMisticismo(calcularMod(sheetData.inteligencia || 0));
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
                    setToggleInvestigacao(sheetData.toggleInvestigacao);
                    setToggleHistoria(sheetData.toggleHistoria);
                    setToggleAprender(sheetData.toggleAprender);
                    setToggleMisticismo(sheetData.toggleMisticismo);
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
            case 'investigacao':
                setToggleResistencia(!toggleInvestigacao);
                break;
            case 'historia':
                setToggleResistencia(!toggleHistoria);
                break;
            case 'aprender':
                setToggleResistencia(!toggleAprender);
                break;
            case 'misticismo':
                setToggleEstamina(!toggleMisticismo);
            default:
                break;
        }
    };
    return (
        <>
           <div className="mt-2 ml-20 bg-gray-900 h-[15rem] w-[11rem] rounded-xl object-cover px-30 mr-2">
                <div className="flex flex-col">
                    <div className="w-40 ml-2 grid grid-cols-2 border-solid border-2 border-red-900 pb-2">
                        <div className="ml-2">
                            <label htmlFor="nome" className="block font-semibold text-sm text-gray-200">
                                Inteligênçia
                            </label>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Investigação
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleInvestigacao ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(investigacao + proficiencia)}
                                        readOnly
                                        disabled
                                    >{investigacao + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(investigacao)}
                                        readOnly
                                        disabled
                                    >{investigacao}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleInvestigacao}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('investigacao')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                História
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleHistoria ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(historia + proficiencia)}
                                        readOnly
                                        disabled
                                    >{historia + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(historia)}
                                        readOnly
                                        disabled
                                    >{historia}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleHistoria}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('historia')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Aprender
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleAprender ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(aprender + proficiencia)}
                                        readOnly
                                        disabled
                                    >{aprender + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(aprender)}
                                        readOnly
                                        disabled
                                    >{aprender}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleAprender}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('aprender')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Misticismo
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleMisticismo ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(misticismo + proficiencia)}
                                        readOnly
                                        disabled
                                    >{misticismo + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(misticismo)}
                                        readOnly
                                        disabled
                                    >{misticismo}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleMisticismo}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('misticismo')}
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

export default SubAttributesInteligencia;