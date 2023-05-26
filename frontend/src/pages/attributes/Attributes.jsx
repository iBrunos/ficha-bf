import React, { useState } from 'react';

function Atributos() {
    const [forca, setForca] = useState('');
    const [inteligencia, setInteligencia] = useState('');
    const [destreza, setDestreza] = useState('');
    const [carisma, setCarisma] = useState('');
    const [sabedoria, setSabedoria] = useState('');
    const [espirito, setEspirito] = useState('');
    const [constituicao, setConstituicao] = useState('');
    const [kai, setKai] = useState('');

    const [modForca, setModForca] = useState('');
    const [modInteligencia, setModInteligencia] = useState('');
    const [modDestreza, setModDestreza] = useState('');
    const [modCarisma, setModCarisma] = useState('');
    const [modSabedoria, setModSabedoria] = useState('');
    const [modEspirito, setModEspirito] = useState('');
    const [modConstituicao, setModConstituicao] = useState('');
    const [modKai, setModKai] = useState('');

    const [toggle, setToggle] = useState(false);

    const calcularMod = (valor) => {
        if (valor === '1') return -5;
        if (valor === '2' || valor === '3') return -4;
        if (valor === '4' || valor === '5') return -3;
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

    const handleChangeForca = (e) => {
        const valor = e.target.value;
        setForca(valor);
        const mod = calcularMod(valor);
        setModForca(mod);
    };
    const handleChangeInteligencia = (e) => {
        const valor = e.target.value;
        setInteligencia(valor);
        const mod = calcularMod(valor);
        setModInteligencia(mod);
    };
    const handleChangeDestreza = (e) => {
        const valor = e.target.value;
        setDestreza(valor);
        const mod = calcularMod(valor);
        setModDestreza(mod);
    };
    const handleChangeCarisma = (e) => {
        const valor = e.target.value;
        setCarisma(valor);
        const mod = calcularMod(valor);
        setModCarisma(mod);
    };
    const handleChangeSabedoria = (e) => {
        const valor = e.target.value;
        setSabedoria(valor);
        const mod = calcularMod(valor);
        setModSabedoria(mod);
    };
    const handleChangeEspirito = (e) => {
        const valor = e.target.value;
        setEspirito(valor);
        const mod = calcularMod(valor);
        setModEspirito(mod);
    };
    const handleChangeConstituicao = (e) => {
        const valor = e.target.value;
        setConstituicao(valor);
        const mod = calcularMod(valor);
        setModConstituicao(mod);
    };
    const handleChangeKai = (e) => {
        const valor = e.target.value;
        setKai(valor);
        const mod = calcularMod(valor);
        setModKai(mod);
    };


    const handleToggleForca = () => {
        setToggle(!toggle);
        if (toggle) {
            setModForca(modForca - 2);
        } else {
            setModForca(modForca + 2);
        }
    };

    const handleToggleInteligencia = () => {
        setToggle(!toggle);
        if (toggle) {
            setModInteligencia(modInteligencia - 2);
        } else {
            setModInteligencia(modInteligencia + 2);
        }
    };

    const handleToggleDestreza = () => {
        setToggle(!toggle);
        if (toggle) {
            setModDestreza(modDestreza - 2);
        } else {
            setModDestreza(modDestreza + 2);
        }
    };

    const handleToggleCarisma = () => {
        setToggle(!toggle);
        if (toggle) {
            setModCarisma(modCarisma - 2);
        } else {
            setModCarisma(modCarisma + 2);
        }
    };

    const handleToggleSabedoria = () => {
        setToggle(!toggle);
        if (toggle) {
            setModSabedoria(modSabedoria - 2);
        } else {
            setModSabedoria(modSabedoria + 2);
        }
    };

    const handleToggleEspirito = () => {
        setToggle(!toggle);
        if (toggle) {
            setModEspirito(modEspirito - 2);
        } else {
            setModEspirito(modEspirito + 2);
        }
    };

    const handleToggleConstituicao = () => {
        setToggle(!toggle);
        if (toggle) {
            setModConstituicao(modConstituicao - 2);
        } else {
            setModConstituicao(modConstituicao + 2);
        }
    };

    const handleToggleKai = () => {
        setToggle(!toggle);
        if (toggle) {
            setModKai(modKai - 2);
        } else {
            setModKai(modKai + 2);
        }
    };

    return (
        <>
            <div className="bg-gray-900 h-[13rem] w-[24rem] rounded-xl object-cover px-30 ml-2 mr-2 mt-2">
                <div className="flex flex-col">
                    <label htmlFor="nome" className="ml-44 block font-semibold text-sm text-gray-700 dark:text-gray-200">
                        Atributos
                    </label>
                    <div className="w-full grid grid-cols-2">
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Força
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={forca}
                                    onChange={handleChangeForca}
                                />
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={modForca}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" onClick={handleToggleForca} />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                            </div>

                        </div>

                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Inteligência
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={inteligencia}
                                    onChange={handleChangeInteligencia}
                                />
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={modInteligencia}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" onClick={handleToggleInteligencia} />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                            </div>
                        </div>
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Espírito
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={espirito}
                                    onChange={handleChangeEspirito}
                                />
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={modEspirito}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" onClick={handleToggleEspirito} />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                            </div>
                        </div>
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Carisma
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={carisma}
                                    onChange={handleChangeCarisma}
                                />
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={modCarisma}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" onClick={handleToggleCarisma} />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                            </div>
                        </div>
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Constituição
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={constituicao}
                                    onChange={handleChangeConstituicao}
                                />
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={modConstituicao}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" onClick={handleToggleConstituicao} />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                            </div>
                        </div>
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Sabedoria
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={sabedoria}
                                    onChange={handleChangeSabedoria}
                                />
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={modSabedoria}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" onClick={handleToggleSabedoria} />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                            </div>
                        </div>
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                KAI
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={kai}
                                    onChange={handleChangeKai}
                                />
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={modKai}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" onClick={handleToggleKai} />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                            </div>
                        </div>
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-gray-700 dark:text-gray-200">
                                Destreza
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={destreza}
                                    onChange={handleChangeDestreza}
                                />
                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={modDestreza}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" onClick={handleToggleDestreza} />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Atributos;