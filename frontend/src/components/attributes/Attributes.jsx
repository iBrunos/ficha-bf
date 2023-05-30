import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Atributos = () => {
  const [forca, setForca] = useState('');
  const [inteligencia, setInteligencia] = useState('');
  const [destreza, setDestreza] = useState('');
  const [carisma, setCarisma] = useState('');
  const [sabedoria, setSabedoria] = useState('');
  const [espirito, setEspirito] = useState('');
  const [constituicao, setConstituicao] = useState('');
  const [kai, setKai] = useState('');

  const [proficiencia, setProficiencia] = useState('');

  const [modForca, setModForca] = useState(0);
  const [modInteligencia, setModInteligencia] = useState(0);
  const [modDestreza, setModDestreza] = useState(0);
  const [modCarisma, setModCarisma] = useState(0);
  const [modSabedoria, setModSabedoria] = useState(0);
  const [modEspirito, setModEspirito] = useState(0);
  const [modConstituicao, setModConstituicao] = useState(0);
  const [modKai, setModKai] = useState(0);

  const [toggleForca, setToggleForca] = useState(false);
  const [toggleInteligencia, setToggleInteligencia] = useState(false);
  const [toggleDestreza, setToggleDestreza] = useState(false);
  const [toggleCarisma, setToggleCarisma] = useState(false);
  const [toggleSabedoria, setToggleSabedoria] = useState(false);
  const [toggleEspirito, setToggleEspirito] = useState(false);
  const [toggleConstituicao, setToggleConstituicao] = useState(false);
  const [toggleKai, setToggleKai] = useState(false);

  const API_URL = 'https://api-bladefall.vercel.app/sheet';

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = await axios.get(API_URL, config);
  
        if (response.data.length > 0) {
          const sheetData = response.data[0]; // Acessa o primeiro objeto do array
  
          setForca(sheetData.forca || 0);
          setInteligencia(sheetData.inteligencia || 0);
          setDestreza(sheetData.destreza || 0);
          setCarisma(sheetData.carisma || 0);
          setSabedoria(sheetData.sabedoria || 0);
          setEspirito(sheetData.espirito || 0);
          setConstituicao(sheetData.constituicao || 0);
          setKai(sheetData.kai || 0);
          setProficiencia(sheetData.proficiencia);
          setModForca(calcularMod(sheetData.forca || 0));
          setModInteligencia(calcularMod(sheetData.inteligencia || 0));
          setModDestreza(calcularMod(sheetData.destreza || 0));
          setModCarisma(calcularMod(sheetData.carisma || 0));
          setModSabedoria(calcularMod(sheetData.sabedoria || 0));
          setModEspirito(calcularMod(sheetData.espirito || 0));
          setModConstituicao(calcularMod(sheetData.constituicao || 0));
          setModKai(calcularMod(sheetData.kai || 0));
        }
      } catch (error) {
        // Tratar erros
      }
    };
  
    fetchItems();
  }, []);
  
  const calcularMod = (valor) => {
    return Math.floor((valor - 10) / 2);
  };

  const toggleStat = (stat) => {
    switch (stat) {
      case 'forca':
        setToggleForca(!toggleForca);
        break;
      case 'inteligencia':
        setToggleInteligencia(!toggleInteligencia);
        break;
      case 'destreza':
        setToggleDestreza(!toggleDestreza);
        break;
      case 'carisma':
        setToggleCarisma(!toggleCarisma);
        break;
      case 'sabedoria':
        setToggleSabedoria(!toggleSabedoria);
        break;
      case 'espirito':
        setToggleEspirito(!toggleEspirito);
        break;
      case 'constituicao':
        setToggleConstituicao(!toggleConstituicao);
        break;
      case 'kai':
        setToggleKai(!toggleKai);
        break;
      default:
        break;
    }
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
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleForca ? modForca + proficiencia : modForca}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"  onClick={() => toggleStat('forca')} />
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

                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleInteligencia ? modInteligencia + proficiencia : modInteligencia}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"  onClick={() => toggleStat('inteligencia')} />
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
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleEspirito ? modEspirito + proficiencia : modEspirito}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"  onClick={() => toggleStat('espirito')} />
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
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleCarisma ? modCarisma + proficiencia : modCarisma}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"  onClick={() => toggleStat('carisma')} />
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
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleConstituicao ? modConstituicao + proficiencia : modConstituicao}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"  onClick={() => toggleStat('constituicao')} />
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
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value= {toggleSabedoria ? modSabedoria + proficiencia : modSabedoria}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"  onClick={() => toggleStat('sabedoria')} />
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
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value= {toggleKai ? modKai + proficiencia : modKai}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"  onClick={() => toggleStat('kai')} />
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
                                />
                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleDestreza ? modDestreza + proficiencia : modDestreza}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"  onClick={() => toggleStat('destreza')} />
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