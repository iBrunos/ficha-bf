import React, { useState } from 'react';

function SubAttributesSabedoria({ modSabedoria }) {
    const [percepcao, setPercepcao] = useState(0);
    const [medicina, setMedicina] = useState(0);
    const [sobrevivencia, setSobrevivencia] = useState(0);
    const [perspicacia, setPerspicacia] = useState(0);
    const [proficiencia, setProficiencia] = useState(3);
    const [toggle, setToggle] = useState(false);

    const handleTogglePercepcao = () => {
        setToggle(!toggle);
        if (toggle) {
            setPercepcao(percepcao - proficiencia);
        } else {
            setPercepcao(percepcao + proficiencia);''
        }
    };
    const handleToggleMedicina = () => {
        setToggle(!toggle);
        if (toggle) {
            setMedicina(medicina - proficiencia);
        } else {
            setMedicina(medicina + proficiencia);
        }
    };
    const handleToggleSobrevivencia = () => {
        setToggle(!toggle);
        if (toggle) {
            setSobrevivencia(sobrevivencia - proficiencia);
        } else {
            setSobrevivencia(sobrevivencia + proficiencia);
        }
    };
    const handleTogglePerspicacia = () => {
        setToggle(!toggle);
        if (toggle) {
            setPerspicacia(perspicacia - proficiencia);
        } else {
            setPerspicacia(perspicacia + proficiencia);
        }
    };

    return (
        <>
            <div className="mt-2 bg-gray-900 h-[15rem] w-[11rem] rounded-xl object-cover px-30 mr-2">
                <div className="flex flex-col">
                    <div className="w-40 ml-2 grid grid-cols-2 border-solid border-2 border-red-900 pb-2">
                        <div className="ml-2">
                            <label htmlFor="nome" className="block font-semibold text-sm text-gray-200">
                                Sabedoria
                            </label>

                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Percepção
                            </label>
                            <div className="flex flex-row mt-1">
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={percepcao}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onClick={handleTogglePercepcao}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Medicina
                            </label>
                            <div className="flex flex-row mt-1">
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={medicina}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onClick={handleToggleMedicina}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Sobrevivência
                            </label>
                            <div className="flex flex-row mt-1">
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={sobrevivencia}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onClick={handleToggleSobrevivencia}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="ml-2 block text-xs text-white">
                                Perspicácia
                            </label>
                            <div className="flex flex-row mt-1">
                            <input
                                type="text"
                                placeholder="mod"
                                className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                value={perspicacia}
                                disabled
                            />
                            <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    onClick={handleTogglePerspicacia}
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