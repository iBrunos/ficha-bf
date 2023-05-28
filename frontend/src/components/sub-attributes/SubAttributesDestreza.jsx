import React, { useState } from 'react';

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
    
    const handleToggleAcrobacia = () => {
        setToggleAcrobacia(!toggleAcrobacia);
        if (toggleAcrobacia) {
            setAcrobacia(acrobacia - proficiencia);
        } else {
            setAcrobacia(acrobacia + proficiencia);
        }
    };
    
    const handleToggleFurtividade = () => {
        setToggleFurtividade(!toggleFurtividade);
        if (toggleFurtividade) {
            setFurtividade(furtividade - proficiencia);
        } else {
            setFurtividade(furtividade + proficiencia);
        }
    };
    
    const handleTogglePontaria = () => {
        setTogglePontaria(!togglePontaria);
        if (togglePontaria) {
            setPontaria(pontaria - proficiencia);
        } else {
            setPontaria(pontaria + proficiencia);
        }
    };
    
    const handleTogglePrestidigitacao = () => {
        setTogglePrestidigitacao(!togglePrestidigitacao);
        if (togglePrestidigitacao) {
            setPrestidigitacao(prestidigitacao - proficiencia);
        } else {
            setPrestidigitacao(prestidigitacao + proficiencia);
        }
    };
    
    return (
        <>
            <div className="mt-2 ml-10 bg-gray-900 h-[15rem] w-[11rem] rounded-xl object-cover px-30 mr-2">
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
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={acrobacia}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onClick={handleToggleAcrobacia}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Furtividade
                            </label>
                            <div className="flex flex-row mt-1">
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={furtividade}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onClick={handleToggleFurtividade}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Pontaria
                            </label>
                            <div className="flex flex-row mt-1">
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={pontaria}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onClick={handleTogglePontaria}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                            Prestidigitação
                            </label>
                            <div className="flex flex-row mt-1">
                            <input
                                type="text"
                                placeholder="mod"
                                className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                value={prestidigitacao}
                                disabled
                            />
                            <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    onClick={handleTogglePrestidigitacao}
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