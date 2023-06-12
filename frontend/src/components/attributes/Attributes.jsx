import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { toast, ToastContainer } from 'react-toastify';
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
    const [isEditing, setIsEditing] = useState(false);

    const [editedForca, setEditedForca] = useState(forca);
    const [editedInteligencia, setEditedInteligencia] = useState(inteligencia);
    const [editedDestreza, setEditedDestreza] = useState(destreza);
    const [editedCarisma, setEditedCarisma] = useState(carisma);
    const [editedSabedoria, setEditedSabedoria] = useState(sabedoria);
    const [editedEspirito, setEditedEspirito] = useState(espirito);
    const [editedConstituicao, setEditedConstituicao] = useState(constituicao);
    const [editedKai, setEditedKai] = useState(kai);


    //const API_URL = 'https://api-bladefall.vercel.app/sheet';
    const API_URL = 'http://localhost:3000/sheet';
    const fetchItems = async () => {
        try {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            const response = await axios.get(`${API_URL}/${userId}`, config);

            if (response.data.length > 0) {
                const sheetData = response.data[0];

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
                setToggleForca(sheetData.toggleForca || false);
                setToggleInteligencia(sheetData.toggleInteligencia || false);
                setToggleDestreza(sheetData.toggleDestreza || false);
                setToggleCarisma(sheetData.toggleCarisma || false);
                setToggleSabedoria(sheetData.toggleSabedoria || false);
                setToggleEspirito(sheetData.toggleEspirito || false);
                setToggleConstituicao(sheetData.toggleConstituicao || false);
                setToggleKai(sheetData.toggleKai || false);
            }
        } catch (error) {
            // Trate os erros aqui, por exemplo, exibindo uma mensagem de erro
            console.error(error);
        }
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        localStorage.setItem('userId', userId);
        fetchItems();
    }, []);
    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };

            const updatedData = {
                userId: userId,
                forca: editedForca,
                inteligencia: editedInteligencia,
                destreza: editedDestreza,
                carisma: editedCarisma,
                sabedoria: editedSabedoria,
                espirito: editedEspirito,
                constituicao: editedConstituicao,
                kai: editedKai,
                toggleForca: toggleForca,
                toggleInteligencia: toggleInteligencia,
                toggleDestreza: toggleDestreza,
                toggleCarisma: toggleCarisma,
                toggleSabedoria: toggleSabedoria,
                toggleEspirito: toggleEspirito,
                toggleConstituicao: toggleConstituicao,
                toggleKai: toggleKai,
            };

            await axios.put(`${API_URL}/${userId}`, updatedData, config);
            toast.success("Atributos atualizados com sucesso!");
            setIsEditing(false);
            fetchItems();
        } catch (error) {
            console.error(error);
        }
    };


    const calcularMod = (valor) => {
        return Math.floor((valor - 10) / 2);
    };

    const toggleStat = (stat) => {
        switch (stat) {
            case 'forca':
                setToggleForca(!toggleForca);
                setEditedForca(forca);
                break;
            case 'inteligencia':
                setToggleInteligencia(!toggleInteligencia);
                setEditedInteligencia(inteligencia);
                break;
            case 'destreza':
                setToggleDestreza(!toggleDestreza);
                setEditedDestreza(destreza);
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

    const handleInputChange = (e, stat) => {
        const value = parseInt(e.target.value);
        switch (stat) {
            case 'forca':
                setEditedForca(value);
                break;
            case 'inteligencia':
                setEditedInteligencia(value);
                break;
            case 'destreza':
                setEditedDestreza(value);
                break;
            case 'carisma':
                setEditedCarisma(value);
                break;
            case 'sabedoria':
                setEditedSabedoria(value);
                break;
            case 'espirito':
                setEditedEspirito(value);
                break;
            case 'constituicao':
                setEditedConstituicao(value);
                break;
            case 'kai':
                setEditedKai(value);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bg-gray-900 h-[13rem] w-[24rem] rounded-xl object-cover px-30 ml-2 mr-2 mt-2">
                <div className="flex flex-col">
                    <div className='flex flex-row'>
                        <label htmlFor="nome" className="ml-40 block font-semibold text-sm text-white">
                            Atributos
                        </label>
                        <button className='ml-24 hover:text-white'
                            onClick={() => setIsEditing(!isEditing)}>
                            {isEditing ? <CloseIcon /> : <EditIcon />}
                        </button>
                        {isEditing && <button className='hover:text-white' onClick={handleSave}><DoneIcon /></button>}
                    </div>
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
                                    value={isEditing ? editedForca : forca}
                                    readOnly={!isEditing}
                                    onChange={(e) => handleInputChange(e, 'forca')}
                                />

                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleForca ? modForca + (proficiencia * toggleForca) : modForca}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleForca}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('forca')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
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
                                    value={isEditing ? editedInteligencia : inteligencia}
                                    readOnly={!isEditing}
                                    onChange={(e) => handleInputChange(e, 'inteligencia')}
                                />

                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleInteligencia ? modInteligencia + (proficiencia * toggleInteligencia) : modInteligencia}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleInteligencia}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('inteligencia')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
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
                                    value={isEditing ? editedEspirito : espirito}
                                    readOnly={!isEditing}
                                    onChange={(e) => handleInputChange(e, 'espirito')}
                                />

                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleEspirito ? modEspirito + (proficiencia * toggleEspirito) : modEspirito}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleEspirito}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('espirito')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
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
                                    value={isEditing ? editedCarisma : carisma}
                                    readOnly={!isEditing}
                                    onChange={(e) => handleInputChange(e, 'carisma')}
                                />

                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleCarisma ? modCarisma + (proficiencia * toggleCarisma) : modCarisma}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleCarisma}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('carisma')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
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
                                    value={isEditing ? editedConstituicao : constituicao}
                                    readOnly={!isEditing}
                                    onChange={(e) => handleInputChange(e, 'constituicao')}
                                />

                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleConstituicao ? modConstituicao + (proficiencia * toggleConstituicao) : modConstituicao}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleConstituicao}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('constituicao')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
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
                                    value={isEditing ? editedSabedoria : sabedoria}
                                    readOnly={!isEditing}
                                    onChange={(e) => handleInputChange(e, 'sabedoria')}
                                />

                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleSabedoria ? modSabedoria + (proficiencia * toggleSabedoria) : modSabedoria}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleSabedoria}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('sabedoria')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
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
                                    value={isEditing ? editedKai : kai}
                                    readOnly={!isEditing}
                                    onChange={(e) => handleInputChange(e, 'kai')}
                                />

                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleKai ? modKai + (proficiencia * toggleKai) : modKai}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleKai}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('kai')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:mt-[0.1rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300"></span>
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
                                    value={isEditing ? editedDestreza : destreza}
                                    readOnly={!isEditing}
                                    onChange={(e) => handleInputChange(e, 'destreza')}
                                />

                                <input
                                    type="number"
                                    placeholder="mod"
                                    className="ml-2 mt-1 w-11 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
                                    value={toggleDestreza ? modDestreza + (proficiencia * toggleDestreza) : modDestreza}
                                    disabled
                                />
                                <label className=" ml-2 relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleDestreza}
                                        className="sr-only peer"
                                        onChange={() => toggleStat('destreza')}
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

export default Atributos;