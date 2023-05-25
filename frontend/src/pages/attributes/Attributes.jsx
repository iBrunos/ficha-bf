import React, { useState } from 'react';

function Atributos() {
    const [forca, setForca] = useState('');
    const [modForca, setModForca] = useState('');
    const [toggle, setToggle] = useState(false);

    const calcularModForca = (valor) => {
        if (valor === '1') return -5;
        if (valor === '2' || valor === '3') return -4;
        if (valor === '4' || valor === '5') return -8;
        if (valor === '6' || valor === '7') return -2;
        if (valor === '8' || valor === '9') return -1;
        if (valor === '10' || valor === '11') return 0;
        if (valor === '12' || valor === '13') return 1;
        if (valor === '14' || valor === '15') return 2;
        if (valor === '16' || valor === '17') return 3;
        if (valor === '18' || valor === '19') return 4;
        if (valor === '20' || valor === '21') return 5;
        if (valor === '22' || valor === '23') return 6;
        if (valor === '24' || valor === '25') return 7;
        if (valor === '26' || valor === '27') return 8;
        if (valor === '28' || valor === '29') return 9;
        if (valor === '30') return 10;
        return 0;
    };

    const handleForcaChange = (e) => {
        const valor = e.target.value;
        setForca(valor);
        const mod = calcularModForca(valor);
        setModForca(mod);
    };

    const handleToggle = () => {
        setToggle(!toggle);
        if (toggle) {
            setModForca(modForca - 2);
        } else {
            setModForca(modForca + 2);
        }
    };

    return (
        <>
            <div className="bg-gray-900 h-68 w-[24rem] rounded-xl object-cover px-30 ml-2 mr-2 mt-2">
                <div className="flex flex-col">
                    <label htmlFor="nome" className="ml-28 block font-semibold text-sm text-gray-700 dark:text-gray-200">
                        Atributos
                    </label>
                    <div className="w-full grid grid-cols-2">
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Força
                            </label>
                            <input
                                type="number"
                                placeholder=" ATR"
                                className="mt-1 w-10 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                value={forca}
                                onChange={handleForcaChange}
                            />
                            <input
                                type="number"
                                placeholder="mod"
                                className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                value={modForca}
                                disabled
                            />
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" onClick={handleToggle}/>
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                            </label>

                        </div>

                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Inteligência
                            </label>
                            <input
                                type="number"
                                placeholder=" ATR"
                                className="mt-1 w-10 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                            />
                            <input
                                type="number"
                                placeholder="mod"
                                className=" ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                disabled

                            />
                        </div>
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Espírito
                            </label>
                            <input
                                type="number"
                                placeholder=" ATR"
                                className="mt-1 w-10 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                            />
                            <input
                                type="number"
                                placeholder="mod"
                                className=" ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                disabled

                            />
                        </div>
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Carisma
                            </label>
                            <input
                                type="number"
                                placeholder=" ATR"
                                className="mt-1 w-10 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                            />
                            <input
                                type="number"
                                placeholder="mod"
                                className=" ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                disabled

                            />
                        </div>
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Constituição
                            </label>
                            <input
                                type="number"
                                placeholder=" ATR"
                                className="mt-1 w-10 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                            />
                            <input
                                type="number"
                                placeholder="mod"
                                className=" ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                disabled

                            />
                        </div>
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Sabedoria
                            </label>
                            <input
                                type="number"
                                placeholder=" ATR"
                                className="mt-1 w-10 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                            />
                            <input
                                type="number"
                                placeholder="mod"
                                className=" ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                disabled

                            />
                        </div>
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                KAI
                            </label>
                            <input
                                type="number"
                                placeholder=" ATR"
                                className="mt-1 w-10 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                            />
                            <input
                                type="number"
                                placeholder="mod"
                                className=" ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                disabled

                            />
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Atributos;