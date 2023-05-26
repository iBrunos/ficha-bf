import React, { useState } from 'react';

function SubAtributosKai() {
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
            <div className="bg-gray-900 h-[12rem] w-[11rem] rounded-xl object-cover px-30 ml-12 mr-2 mt-2">
                <div className="flex flex-col">
                    <label htmlFor="nome" className="text-gray-900 ml-12 block font-semibold text-sm ">
                        ‎
                    </label>
                    <div className="w-40 ml-2 grid grid-cols-2 border-solid border-2 border-red-900 ">
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block font-semibold text-sm text-gray-200">
                                Kai
                            </label>
                            <label htmlFor="nome" className="w-36 ml-2 block text-xs text-white">
                                Detectar Alma
                            </label>
                            <div className='flex flex-row mt-1 '>

                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-gray-900 sm:text-sm"
                                    value={modForca}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" onClick={handleToggleForca} />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="w-36 ml-2 block text-xs text-white">
                                Controle de Chi
                            </label>
                            <div className='flex flex-row mt-1'>

                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-gray-900 sm:text-sm"
                                    value={modForca}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" onClick={handleToggleForca} />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                            </div>
                            <label htmlFor="nome" className="w-36 ml-2 block text-xs text-white">
                                Armadura Espiritual
                            </label>
                            <div className='flex flex-row mt-1'>

                                <input
                                    type="text"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-gray-900 sm:text-sm"
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubAtributosKai;