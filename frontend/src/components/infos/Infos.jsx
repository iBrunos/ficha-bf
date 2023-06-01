import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

import { toast, ToastContainer } from 'react-toastify';

function Infos() {
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [customRace, setCustomRace] = useState('');
  const [age, setAge] = useState('');
  const [customSize, setCustomSize] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(''); // Adicionei o estado para o campo "Nome"

  const API_URL = 'https://api-bladefall.vercel.app/sheet';
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${API_URL}/${userId}`, config);

      if (response.data.length > 0) {
        const sheetData = response.data[0];

        setSelectedRace(sheetData.selectedRace || '');
        setSelectedSize(sheetData.selectedSize || '');
        setCustomRace(sheetData.customRace || '');
        setCustomSize(sheetData.customSize || '');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSave = async () => {
    try {
      const updatedData = {
        selectedRace,
        selectedSize,
        age,
        name, // Adicione o campo "name" aqui
      };
  
      await axios.put(`${API_URL}/${userId}`, updatedData, config);
      toast.success("Atributos atualizados com sucesso!");
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleRaceChange = (event) => {
    const { value } = event.target;
    if (value === 'outra') {
      setCustomRace('');
    }
    setSelectedRace(value);
  };

  const handleSizeChange = (event) => {
    const { value } = event.target;
    if (value === 'outra') {
      setCustomSize('');
    }
    setSelectedSize(value);
  };

  const handleCustomRaceChange = (event) => {
    setCustomRace(event.target.value);
  };

  const handleCustomSizeChange = (event) => {
    setCustomSize(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  handleAgeChange

  return (
    <>
      <div className="bg-gray-900 rounded-xl object-cover w-52 h-56 px-30 ml-2 mr-2 mt-2">
        <div className='ml-2 mt-2 '>
          <div className='flex'>
            <label
              htmlFor="nome"
              className="block text-xs font-medium text-gray-200"
            >
              Nome
            </label>
            <button className="ml-28 text-gray-400 hover:text-white" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? <CloseIcon /> : <EditIcon />}
            </button>
            {isEditing ? (
              <button className="hover:text-white" onClick={handleSave}>
                <DoneIcon />
              </button>
            ) : null}
          </div>
          <input
            type="text"
            placeholder="Digite seu nome"
            className={`mt-2 w-40 rounded-md shadow-sm border-gray-700 bg-gray-800 text-white sm:text-sm ${isEditing ? '' : 'bg-gray-500'}`}
            value={name}
            onChange={handleNameChange}
            readOnly={!isEditing}
          />

        </div>

        <div className='ml-2'>
          <label
            htmlFor="nome"
            className="block text-xs font-medium text-gray-200"
          >
            Idade
          </label>
          <div className='flex flex-row'>
            <input
              type="number"
              value={name}
              onChange={handleAgeChange}
              placeholder="Digite a idade"
              className={`mt-1 w-40 rounded-md shadow-sm border-gray-700 bg-gray-800 text-white sm:text-sm ${isEditing ? '' : 'bg-gray-500'}`}
              readOnly={!isEditing}
            />
          </div>
        </div>
        <div className='ml-2 '>
          <label
            htmlFor="nome"
            className="block text-xs font-medium text-gray-200"
          >
            Raça
          </label>
          <select
            id="raca"
            className={`mt-1 w-40 rounded-md shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm ${isEditing ? '' : 'bg-gray-500'}`}
            value={selectedRace}
            onChange={handleRaceChange}
            disabled={!isEditing}
          >
            <option value="">Selecione uma raça</option>
            <option value="Humano comum">Humano comum</option>
            <option value="Humano sangue puro">Humano sangue puro</option>
            <option value="Oni">Oni</option>
            <option value="Kitsune">Kitsune</option>
            <option value="Nezumi">Nezumi</option>
            <option value="Ôkami">Ôkami</option>
            <option value="Fukuro">Fukuro</option>
            <option value="Elfo">Elfo</option>
            <option value="Tanuki">Tanuki</option>
            <option value="Felidae">Felidae</option>
            <option value="Hitsuji">Hitsuji</option>
            <option value="outra">Outra</option>
          </select>
          {selectedRace === 'outra' && isEditing && (
            <input
              type="text"
              className="mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
              placeholder="Digite a raça"
              value={customRace}
              onChange={handleCustomRaceChange}
            />
          )}
        </div>

        <div className="ml-2 ">
          <label
            htmlFor="nome"
            className="block text-xs font-medium text-gray-200"
          >
            Tamanho
          </label>
          <select
            className={`mt-1 w-40 rounded-md shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm ${isEditing ? '' : 'bg-gray-500'}`}
            value={selectedSize}
            onChange={handleSizeChange}
            disabled={!isEditing}
          >
            <option value="">Selecione um tamanho</option>
            <option value="Miúdo">Miúdo</option>
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="outra">Outra</option>
          </select>
          {selectedSize === 'outra' && isEditing && (
            <input
              type="text"
              className="mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 text-white sm:text-sm"
              placeholder="Digite o tamanho"
              value={customSize}
              onChange={handleCustomSizeChange}
            />
          )}
        </div>
      </div>

    </>
  );
}

export default Infos;