"use client";

import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import { FaRegCopy } from "react-icons/fa";
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
const SpellsList: React.FC = () => {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        fetch('https://api-bladefall.vercel.app/spells')
            .then((response) => response.json())
            .then((data) => {
                setSpells(data);
            })
            .catch((error) => console.error('Erro ao buscar spells:', error));
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredSpells = spells.filter((spell) =>
        spell.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const copyToClipboard = (text: string) => {
        // Cria um elemento de texto temporário e o adiciona ao corpo do documento
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = text;
        document.body.appendChild(tempTextArea);

        // Seleciona e copia o texto para a área de transferência
        tempTextArea.select();
        document.execCommand('copy');

        // Remove o elemento de texto temporário
        document.body.removeChild(tempTextArea);

        // Exibe uma mensagem de sucesso (pode ser substituída por outra ação desejada)
        toast.success('Spell copiada!');
    };
    return (

        <>
            <ToastContainer />
            <div className="mb-4">
                <div>
                    <div className="flex mt-2">
                        <p className="py-2.5 ml-2 px-3 h-9 text-gray-500 bg-gray-100  dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg"><IoIosSearch /></p>
                        <input
                            type="text"
                            id="search"
                            value={searchTerm}
                            onChange={handleSearch}
                            placeholder="Pesquisar"
                            className="block rounded-l-none rtl:rounded-l-lg w-64 h-9 rtl:rounded-r-none placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-500"
                        />
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2 ml-auto mr-auto max-w-screen-lg">
                {filteredSpells.map((spell) => (
                    <div key={spell._id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                        <div className="p-6">
                            <div className='flex space-x-60'>
                                <h5 className="block mb-2 text-[#c61313] font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {spell.title}
                                </h5>
                                <button
                                    onClick={() => copyToClipboard(
                                        `${spell.title}\n\n` +
                                        `Truque\n` +
                                        `Tempo de Lançamento: ${spell.releaseTime}\n` +
                                        `Duração: ${spell.duration}\n` +
                                        `${spell.description}`
                                    )}
                                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                                >
                                    <FaRegCopy/>
                                </button>
                            </div>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                <em> {spell.spellLevel}</em>
                            </p>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                <strong>Tempo de Lançamento:</strong> {spell.releaseTime}
                            </p>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                <strong> Duração:</strong> {spell.duration}
                            </p>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                {spell.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SpellsList;