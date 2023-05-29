import React, { useState, useEffect } from 'react';

function Atributos() {
    const [proficiencia, setProficiencia] = useState(3);
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

    const [toggleForca, setToggleForca] = useState(false);
    const [toggleInteligencia, setToggleInteligencia] = useState(false);
    const [toggleDestreza, setToggleDestreza] = useState(false);
    const [toggleCarisma, setToggleCarisma] = useState(false);
    const [toggleSabedoria, setToggleSabedoria] = useState(false);
    const [toggleEspirito, setToggleEspirito] = useState(false);
    const [toggleConstituicao, setToggleConstituicao] = useState(false);
    const [toggleKai, setToggleKai] = useState(false);

    const calcularMod = (valor) => {
        const parsedValor = parseInt(valor);
        if (parsedValor >= 1 && parsedValor <= 30) {
            return Math.floor((parsedValor - 10) / 2);
        }
        return 0;
    };
    useEffect(() => {
        const calculateMod = (valor) => {
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
      
        const updateMod = (toggleState, valor, baseMod, proficiencia) => {
          const mod = calculateMod(valor);
          return toggleState ? baseMod - proficiencia + mod : baseMod + mod;
        };
      
        setModForca(updateMod(toggleForca, forca, modForca, proficiencia));
        setModInteligencia(updateMod(toggleInteligencia, inteligencia, modInteligencia, proficiencia));
        setModDestreza(updateMod(toggleDestreza, destreza, modDestreza, proficiencia));
        setModCarisma(updateMod(toggleCarisma, carisma, modCarisma, proficiencia));
        setModSabedoria(updateMod(toggleSabedoria, sabedoria, modSabedoria, proficiencia));
        setModEspirito(updateMod(toggleEspirito, espirito, modEspirito, proficiencia));
        setModConstituicao(updateMod(toggleConstituicao, constituicao, modConstituicao, proficiencia));
        setModKai(updateMod(toggleKai, kai, modKai, proficiencia));
      }, [toggleForca, toggleInteligencia, toggleDestreza, toggleCarisma, toggleSabedoria, toggleEspirito, toggleConstituicao, toggleKai, forca, inteligencia, destreza, carisma, sabedoria, espirito, constituicao, kai, modForca, modInteligencia, modDestreza, modCarisma, modSabedoria, modEspirito, modConstituicao, modKai, proficiencia]);
      
    const handleChange = (e, stateSetter, modSetter) => {
        const valor = e.target.value;
        stateSetter(valor);
        const mod = calcularMod(valor);
        modSetter(mod);
    };

    const handleToggle = (toggleState, setToggleState, modState, setModState) => {
        setToggleState(!toggleState);
        setModState(toggleState ? modState - 2 : modState + 2);
    };

    const handleChangeForca = (e) => handleChange(e, setForca, setModForca);
    const handleChangeInteligencia = (e) => handleChange(e, setInteligencia, setModInteligencia);
    const handleChangeDestreza = (e) => handleChange(e, setDestreza, setModDestreza);
    const handleChangeCarisma = (e) => handleChange(e, setCarisma, setModCarisma);
    const handleChangeSabedoria = (e) => handleChange(e, setSabedoria, setModSabedoria);
    const handleChangeEspirito = (e) => handleChange(e, setEspirito, setModEspirito);
    const handleChangeConstituicao = (e) => handleChange(e, setConstituicao, setModConstituicao);
    const handleChangeKai = (e) => handleChange(e, setKai, setModKai);

    const handleToggleForca = () => {
        handleToggle(toggleForca, setToggleForca, modForca, setModForca);
    };

    const handleToggleInteligencia = () => {
        handleToggle(toggleInteligencia, setToggleInteligencia, modInteligencia, setModInteligencia);
    };

    const handleToggleDestreza = () => {
        handleToggle(toggleDestreza, setToggleDestreza, modDestreza, setModDestreza);
    };

    const handleToggleCarisma = () => {
        handleToggle(toggleCarisma, setToggleCarisma, modCarisma, setModCarisma);
    };

    const handleToggleSabedoria = () => {
        handleToggle(toggleSabedoria, setToggleSabedoria, modSabedoria, setModSabedoria);
    };

    const handleToggleEspirito = () => {
        handleToggle(toggleEspirito, setToggleEspirito, modEspirito, setModEspirito);
    };

    const handleToggleConstituicao = () => {
        handleToggle(toggleConstituicao, setToggleConstituicao, modConstituicao, setModConstituicao);
    };

    const handleToggleKai = () => {
        handleToggle(toggleKai, setToggleKai, modKai, setModKai);
    };

    return (
        <>
            <div className="bg-gray-900 h-[13rem] w-[24rem] rounded-xl object-cover px-30 ml-2 mr-2 mt-2">
                <div className="flex flex-col">
                    <label htmlFor="nome" className="ml-44 block font-semibold text-sm text-white">
                        Atributos
                    </label>
                    <div className="w-full grid grid-cols-2">
                        <div className='ml-2'>
                            <label htmlFor="nome" className="block text-xs text-white">
                                Força
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-2 w-11 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
                                    value={forca}
                                    onChange={handleChangeForca}
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
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
                            <label htmlFor="nome" className="block text-xs text-white">
                                Inteligência
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-2 w-11 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
                                    value={inteligencia}
                                    onChange={handleChangeInteligencia}
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
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
                            <label htmlFor="nome" className="block text-xs text-white">
                                Espírito
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-2 w-11 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
                                    value={espirito}
                                    onChange={handleChangeEspirito}
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
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
                            <label htmlFor="nome" className="block text-xs text-white">
                                Carisma
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-2 w-11 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
                                    value={carisma}
                                    onChange={handleChangeCarisma}
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
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
                            <label htmlFor="nome" className="block text-xs text-white">
                                Constituição
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-2 w-11 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
                                    value={constituicao}
                                    onChange={handleChangeConstituicao}
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
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
                            <label htmlFor="nome" className="block text-xs text-white">
                                Sabedoria
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-2 w-11 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
                                    value={sabedoria}
                                    onChange={handleChangeSabedoria}
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
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
                            <label htmlFor="nome" className="block text-xs text-white">
                                KAI
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-2 w-11 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
                                    value={kai}
                                    onChange={handleChangeKai}
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
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
                            <label htmlFor="nome" className="block text-xs text-white">
                                Destreza
                            </label>
                            <div className='flex flex-row'>
                                <input
                                    type="number"
                                    placeholder=" ATR"
                                    className="mt-2 w-11 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
                                    value={destreza}
                                    onChange={handleChangeDestreza}
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
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