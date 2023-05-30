import React, { useState, useEffect } from 'react';
import axios from 'axios';
function SubAttributesKai() {
    const [detectarAlma, setDetectarAlma] = useState('');
    const [controleChi, setControleChi] = useState('');
    const [armaduraEspiritual, setArmaduraEspiritual] = useState('');
    const [proficiencia, setProficiencia] = useState(3);
    const [toggleDetectarAlma, setToggleDetectarAlma] = useState(false);
    const [toggleControleChi, setToggleControleChi] = useState(false);
    const [toggleArmaduraEspiritual, setToggleArmaduraEspiritual] = useState(false);

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
                    setDetectarAlma(calcularMod(sheetData.kai || 0));
                    setControleChi(calcularMod(sheetData.kai || 0));
                    setArmaduraEspiritual(calcularMod(sheetData.kai || 0));
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
                    setToggleDetectarAlma(sheetData.toggleDetectarAlma);
                    setToggleControleChi(sheetData.toggleControleChi);
                    setToggleArmaduraEspiritual(sheetData.toggleArmaduraEspiritual);
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
            case 'detectarAlma':
                setToggleDetectarAlma(!toggleDetectarAlma);
                break;
            case 'controleChi':
                setToggleControleChi(!toggleControleChi);
                break;
            case 'armaduraEspiritual':
                setToggleArmaduraEspiritual(!toggleArmaduraEspiritual);
                break;
            default:
                break;
        }
    };
    return (
        <>
           <div className="mt-2 ml-10 bg-gray-900 h-[15rem] w-[11rem] rounded-xl object-cover px-30 mr-2">
                <div className="flex flex-col">
                    <div className="w-40 ml-2 grid grid-cols-2 border-solid border-2 border-red-900 pb-2">
                        <div className="ml-2">
                            <label htmlFor="nome" className="block font-semibold text-sm text-gray-200">
                                Kai
                            </label>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Detectar Alma
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleDetectarAlma ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(detectarAlma + proficiencia)}
                                        readOnly
                                        disabled
                                    >{detectarAlma + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(detectarAlma)}
                                        readOnly
                                        disabled
                                    >{detectarAlma}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleDetectarAlma}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('detectarAlma')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Controle de Chi
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleControleChi ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(controleChi + proficiencia)}
                                        readOnly
                                        disabled
                                    >{controleChi + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(controleChi)}
                                        readOnly
                                        disabled
                                    >{controleChi}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleControleChi}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('controleChi')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Armadura Espiritual
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleArmaduraEspiritual ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(armaduraEspiritual + proficiencia)}
                                        readOnly
                                        disabled
                                    >{armaduraEspiritual + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(armaduraEspiritual)}
                                        readOnly
                                        disabled
                                    >{armaduraEspiritual}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleArmaduraEspiritual}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('armaduraEspiritual')}
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

export default SubAttributesKai;