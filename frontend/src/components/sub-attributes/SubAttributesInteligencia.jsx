import React, { useState } from 'react';

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
    
    const handleToggleInvestigacao = () => {
        setToggleInvestigacao(!toggleInvestigacao);
        if (toggleInvestigacao) {
            setInvestigacao(investigacao - proficiencia);
        } else {
            setInvestigacao(investigacao + proficiencia);
        }
    };
    
    const handleToggleHistoria = () => {
        setToggleHistoria(!toggleHistoria);
        if (toggleHistoria) {
            setHistoria(historia - proficiencia);
        } else {
            setHistoria(historia + proficiencia);
        }
    };
    
    const handleToggleAprender = () => {
        setToggleAprender(!toggleAprender);
        if (toggleAprender) {
            setAprender(aprender - proficiencia);
        } else {
            setAprender(aprender + proficiencia);
        }
    };
    
    const handleToggleMisticismo = () => {
        setToggleMisticismo(!toggleMisticismo);
        if (toggleMisticismo) {
            setMisticismo(misticismo - proficiencia);
        } else {
            setMisticismo(misticismo + proficiencia);
        }
    };
    

    return (
        <>
            <div className="mt-2 ml-20 bg-gray-900 h-[15rem] w-[11rem] rounded-xl object-cover px-30 mr-2">
                <div className="flex flex-col">
                    <div className="w-40 ml-2 grid grid-cols-2 border-solid border-2 border-red-900 pb-2">
                        <div className="ml-2">
                            <label htmlFor="nome" className="block font-semibold text-sm text-gray-200">
                                Inteligência
                            </label>

                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                            Investigação
                            </label>
                            <div className="flex flex-row mt-1">
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={investigacao}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onClick={handleToggleInvestigacao}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                            História
                            </label>
                            <div className="flex flex-row mt-1">
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={historia}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onClick={handleToggleHistoria}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                            Aprender
                            </label>
                            <div className="flex flex-row mt-1">
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={aprender}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onClick={handleToggleAprender}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                            Misticismo
                            </label>
                            <div className="flex flex-row mt-1">
                            <input
                                type="text"
                                placeholder="mod"
                                className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                value={misticismo}
                                disabled
                            />
                            <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    onClick={handleToggleMisticismo}
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