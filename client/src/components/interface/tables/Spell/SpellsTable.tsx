"use client"

import React, { useState, useEffect } from 'react';
import FormSpellCreate from '../../forms/formSpell/Create/FormSpellCreate';
import FormSpellUpdate from '../../forms/formSpell/Update/FormSpellUpdate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Spell {
  _id: string;
  title: string;
  releaseTime: string;
  range: string;
  duration: string;
  description: string;
  spellLevel: string;
}

const SpellsTable: React.FC = () => {
  const [showAddSpell, setShowAddSpell] = useState(false);
  const [spells, setSpells] = useState<Spell[]>([]); // Initialize with an empty array
  const [editingSpell, setEditingSpell] = useState<Spell | null>(null);
  const [showEditSpell, setShowEditSpell] = useState(false);

  const handleEditSpellClick = (spell: Spell) => {
    setEditingSpell(spell);
    setShowEditSpell(true);
  };

  const handleCloseEditSpell = () => {
    setEditingSpell(null);
    setShowEditSpell(false);
  };

  const handleAddSpellClick = () => {
    setShowAddSpell(true);
  };

  const handleSpellCreated = (newSpell: Spell) => {
    setSpells([...spells, newSpell]);
  };
  const handleCloseAddSpells = () => {
    setShowAddSpell(false);
    // Atualize a tabela chamando a API novamente
    fetch("https://api-bladefall.vercel.app/spells")
      .then((response) => response.json())
      .then((data) => {
        setSpells(data);
      })
      .catch((error) => console.error("Erro ao buscar funcionários:", error));
  };
  const handleUpdateSpell = (updatedSpell: Spell) => {
    const updatedSpells = spells.map((spell) =>
    spell._id === updatedSpell._id ? updatedSpell : spell
    );
    setSpells(updatedSpells);
    handleCloseEditSpell();
  };

  useEffect(() => {
    fetch('https://api-bladefall.vercel.app/spells')
      .then((response) => response.json())
      .then((data) => {
        setSpells(data);
      })
      .catch((error) => console.error('Erro ao buscar serviços:', error));
  }, []);

  const handleDeleteSpell = async (id: string) => {
    try {
      const response = await fetch(`https://api-bladefall.vercel.app/spells/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Atualize a lista de serviços após a exclusão bem-sucedida
        const updatedSpells = spells.filter((spell) => spell._id !== id);
        toast.success("O spell foi excluído!");
        setSpells(updatedSpells);
      } else {
        console.error('Erro ao excluir o spell:', response.statusText);
        toast.error("Erro ao excluir o spell");
      }
    } catch (error) {
      console.error('Erro de rede ao excluir o spell:', error);
      toast.error("Erro de rede ao excluir o spell!");
    }
  };

  return (
    <>
      <ToastContainer />
      {showAddSpell && <FormSpellCreate onClose={handleCloseAddSpells} onSpellCreated={handleSpellCreated} />}
      {showEditSpell && <FormSpellUpdate spell={editingSpell} onClose={handleCloseEditSpell} onUpdateSpell={handleUpdateSpell} />}
      <main className="pt-32 h-full bg-gradient-to-t from-gray-200 via-gray-300 to-gray-300">
        <section className="container">
          <div className="flex items-center md:gap-x-3 lg:gap-x-3">
          <h1 className="text-md text-2xl font-bold text-gray-700 ml-0 md:ml-8 lg:ml-8">Magias de Blade Fall</h1>
            <button
              type="button"
              onClick={handleAddSpellClick}
              className="flex items-center rounded px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="mx-2">Adicionar Magia</span>
            </button>
          </div>
          <div className="flex flex-col mt-6 w-full overflow-x-auto">
            <div className="justify-center">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
                  <table className="min-w-full divide-y rounded-xl divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Título</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-2">
                            <span>Tempo de Lançamento</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Alcance
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Duração
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Nível da Magia
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Descrição
                        </th>
                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {spells.map((spell) => (
                        <tr key={spell._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="font-medium text-gray-800 dark:text-white ">
                                    {spell.title}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className=" items-center py-1 gap-x-2">
                              <h2 className="text-sm font-normal text-black">
                                {spell.releaseTime}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className=" items-center max-w-full overflow-x-auto">
                              <p className="text-black">
                                {spell.range}
                              </p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className=" items-center max-w-full overflow-x-auto">
                              <p className="text-black">
                                {spell.duration}
                              </p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className=" items-center max-w-full overflow-x-auto">
                              <p className="text-black">
                                {spell.description}
                              </p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className=" items-center max-w-full overflow-x-auto">
                              <p className="text-black">
                                {spell.spellLevel}
                              </p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex justify-end gap-x-6">
                              <button
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                                onClick={() => handleDeleteSpell(spell._id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>
                              <button
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                                onClick={() => handleEditSpellClick(spell)} // Abre o formulário de edição com o serviço
                              >                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SpellsTable;
