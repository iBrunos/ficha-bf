"use client";
"use client";

import React, { useState, useEffect } from 'react';
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

const SpellsList: React.FC = () => {
    const [spells, setSpells] = useState<Spell[]>([]);

    useEffect(() => {
        fetch('https://api-bladefall.vercel.app/spells')
            .then((response) => response.json())
            .then((data) => {
                setSpells(data);
            })
            .catch((error) => console.error('Erro ao buscar spells:', error));
    }, []);

    return (
        <>
            <ToastContainer />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2 ml-auto mr-auto max-w-screen-lg">
                {spells.map((spell) => (
                    <div key={spell._id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                        <div className="p-6">
                            <div className='flex space-x-40'>
                                <h5 className="block mb-2 text-[#c61313] font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {spell.title}
                                </h5>
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