import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SubAttributesDestreza() {
    const [acrobacia, setAcrobacia] = useState(0);
    const [furtividade, setFurtividade] = useState(0);
    const [pontaria, setPontaria] = useState(0);
    const [prestidigitacao, setPrestidigitacao] = useState(0);
    const [proficiencia, setProficiencia] = useState(3);
    const [toggleAcrobacia, setToggleAcrobacia] = useState(false);
    const [toggleFurtividade, setToggleFurtividade] = useState(false);
    const [togglePontaria, setTogglePontaria] = useState(false);
    const [togglePrestidigitacao, setTogglePrestidigitacao] = useState(false);

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
                    setAcrobacia(calcularMod(sheetData.destreza || 0));
                    setFurtividade(calcularMod(sheetData.destreza || 0));
                    setPontaria(calcularMod(sheetData.destreza || 0));
                    setPrestidigitacao(calcularMod(sheetData.destreza || 0));
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
                    setToggleAcrobacia(sheetData.toggleAcrobacia);
                    setToggleFurtividade(sheetData.toggleFurtividade);
                    setTogglePontaria(sheetData.togglePontaria);
                    setTogglePrestidigitacao(sheetData.togglePrestidigitacao);
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
            case 'acrobacia':
                setToggleAcrobacia(!toggleAcrobacia);
                break;
            case 'furtividade':
                setToggleFurtividade(!toggleFurtividade);
                break;
            case 'pontaria':
                setTogglePontaria(!togglePontaria);
                break;
            case 'prestidigitacao':
                setTogglePrestidigitacao(!togglePrestidigitacao);
            default:
                break;
        }
    };
    return (
        <>
           <div className="mt-2  bg-gray-900 h-[15rem] ml-10 w-[11rem] rounded-xl object-cover px-30">
                <div className="flex flex-col">
                    <div className="w-40 ml-2 grid grid-cols-2 border-solid border-2 border-red-900 pb-2">
                        <div className="ml-2">
                            <label htmlFor="nome" className="block font-semibold text-sm text-gray-200">
                               Destreza
                            </label>                
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Acrobacia
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleAcrobacia ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(acrobacia + proficiencia)}
                                        readOnly
                                        disabled
                                    >{acrobacia + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(acrobacia)}
                                        readOnly
                                        disabled
                                    >{acrobacia}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleAcrobacia}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('acrobacia')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Furtividade
                            </label>
                            <div className="flex flex-row mt-1">
                                {toggleFurtividade ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(furtividade + proficiencia)}
                                        readOnly
                                        disabled
                                    >{furtividade + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(furtividade)}
                                        readOnly
                                        disabled
                                    >{furtividade}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleFurtividade}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('furtividade')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Pontaria
                            </label>
                            <div className="flex flex-row mt-1">
                                {togglePontaria ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(pontaria + proficiencia)}
                                        readOnly
                                        disabled
                                    >{pontaria + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(pontaria)}
                                        readOnly
                                        disabled
                                    >{pontaria}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={togglePontaria}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('pontaria')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Prestidigitação
                            </label>
                            <div className="flex flex-row mt-1">
                                {togglePrestidigitacao ? (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 w-11 pr-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(prestidigitacao + proficiencia)}
                                        readOnly
                                        disabled
                                    >{prestidigitacao + proficiencia}</h2>
                                ) : (
                                    <h2
                                        placeholder="mod"
                                        className="ml-2 mt-1 pr-11 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                        value={String(prestidigitacao)}
                                        readOnly
                                        disabled
                                    >{prestidigitacao}</h2>
                                )}
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={togglePrestidigitacao}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('prestidigitacao')}
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

export default SubAttributesDestreza;