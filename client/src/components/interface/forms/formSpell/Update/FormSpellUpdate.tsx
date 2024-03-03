import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Spell {
    _id: string;
    title: string;
    releaseTime: string;
    range: string;
    duration: string;
    description: string;
}

interface FormSpellUpdateProps {
    spell: Spell | null;
    onClose: () => void;
    onUpdateSpell: (updatedSpell: Spell) => void;
}

const FormSpellUpdate: React.FC<FormSpellUpdateProps> = ({ spell, onClose, onUpdateSpell }) => {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [title, setTitle] = useState<string>(spell ? spell.title : "");
    const [releaseTime, setReleaseTime] = useState<string>(spell ? spell.releaseTime : "");
    const [range, setRange] = useState<string>(spell ? spell.range : "");
    const [duration, setDuration] = useState<string>(spell ? spell.duration : "");
    const [description, setDescription] = useState<string>(spell ? spell.description : "");

    useEffect(() => {
        fetch("https://sunx-api-agendamento.vercel.app/spells")
            .then((response) => response.json())
            .then((data) => {
                setSpells(data);
            })
            .catch((error) => console.error("Erro ao buscar spells:", error));
    }, []);


    const formRef = useRef<HTMLDivElement | null>(null);

    const handleClose = () => {
        onClose();
    };

    const handleOutsideClick = (e: MouseEvent) => {
        if (formRef.current && !formRef.current.contains(e.target as Node)) {
            handleClose();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (!spell) {
                return;
            }

            const updatedSpell = { ...spell, title, releaseTime, range, duration, description};


            const response = await fetch(`https://sunx-api-agendamento.vercel.app/spells/${spell._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedSpell),
            });

            if (response.ok) {
                toast.success("O spelle foi atualizado!");
                onUpdateSpell(updatedSpell); // Chame a função para atualizar o spelle na lista
                onClose();
            } else {
                console.error('Erro ao atualizar o spelle:', response.statusText);
                toast.error("Erro ao atualizar o spelle!");
            }
        } catch (error) {
            console.error('Erro de rede:', error);
            toast.error("Erro de rede ao atualizar o spelle!");
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <section className="z-10 rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[90vh] sm:h-auto overflow-y-auto w-[90%] lg:w-[50%] p-6 mx-auto bg-white shadow-lg dark:bg-gray-800">
                    <div className="flex justify-between align-middle">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                            Atualizando Magia
                        </h2>
                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className="w-10 h-10 font-semibold leading-5 flex justify-center items-center text-white transition-colors duration-300 rounded-xl transform bg-red-700 hover:bg-red-600 focus:outline-none focus:bg-red-600"
                            >
                                X
                            </button>
                        </div>
                    </div>

                    <form className="" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="title"
                                >
                                    Título
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    value={title}
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="releaseTime"
                                >
                                    Tempo de lançamento
                                </label>
                                <input
                                    id="releaseTime"
                                    type="text"
                                    value={releaseTime}
                                    required
                                    onChange={(e) => setReleaseTime(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="range"
                                >
                                    Alcançe
                                </label>
                                <input
                                    id="range"
                                    type="text"
                                    value={range}
                                    required
                                    onChange={(e) => setRange(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="username"
                                >
                                    Duração
                                </label>
                                <input
                                    id="duration"
                                    type="text"
                                    value={duration}
                                    required
                                    onChange={(e) => setDuration(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="username"
                                >
                                    Descrição
                                </label>
                                <input
                                    id="description"
                                    type="text"
                                    value={description}
                                    required
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 font-semibold leading-5 rounded-xl text-white transition-colors duration-300 transform bg-green-700 hover-bg-green-600 focus:outline-none focus-bg-green-600">
                                Atualizar
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
};

export default FormSpellUpdate;