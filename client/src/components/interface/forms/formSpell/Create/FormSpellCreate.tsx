"use client"
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Client {
    _id: string;
    name: string;
    email: string;
    birthdayDate: string;
    gender: string;
    children: number;
    phone: string;
}

const FormClientCreate: React.FC<{
    onClose: () => void;
    onClientCreated: (newClient: Client) => void;
}> = ({ onClose, onClientCreated }) => {
    const [clients, setClients] = useState<Client[]>([]);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [birthdayDate, setBirthdayDate] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [children, setChildren] = useState<number>();
    const [phone, setPhone] = useState<string>("");

    useEffect(() => {
        fetch("https://sunx-api-agendamento.vercel.app/clients")
            .then((response) => response.json())
            .then((data) => {
                setClients(data);
            })
            .catch((error) => console.error("Erro ao buscar clientes:", error));
    }, []);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {

            const requestBody = {
                name,
                email,
                birthdayDate,
                gender,
                children,
                phone

            };

            const response = await fetch('https://sunx-api-agendamento.vercel.app/clients/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                const data = await response.json();
                onClientCreated(data);

                setName("");
                setEmail("");
                setBirthdayDate("");
                setGender("");
                setChildren(undefined);
                setPhone("");

                toast.success("O Cliente foi adicionado!");
            } else {
                console.error('Erro ao criar o Cliente:', response.statusText);
                toast.error("Erro ao adicionar o Cliente!");
            }
        } catch (error) {
            console.error('Erro de rede:', error);
            toast.error("Erro de rede ao adicionar o Cliente!");
        }
    };


    return (
        <>
            <ToastContainer />
            <div className="fixed inset-0 z-50 flex items-center justify-center ">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <section className="z-10 h-auto w-[90%] lg:w-auto md:w-auto rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 mx-auto bg-white shadow-lg dark:bg-gray-800">
                    <div className="flex justify-between align-middle">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                            Criando Magia
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
                                    htmlFor="username"
                                >
                                    Título
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    value={name}
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="job">
                                    Tempo de Lançamento
                                </label>
                                <select
                                    value={gender}
                                    required
                                    onChange={(e) => {
                                        setGender(e.target.value);
                                    }}
                                    id="genero"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                >
                                    <option value="">Selecione um Gênero</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Não Informar">Não Informar</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="email"
                                >
                                    Alcance
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    value={email}
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    id="Data de Nascimento"
                                    type="date"
                                    value={birthdayDate}
                                    required
                                    onChange={(e) => setBirthdayDate(e.target.value)}
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
                                    id="telefone"
                                    type="tel"
                                    value={phone}
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button className="px-8 py-2.5 font-semibold leading-5 rounded-xl text-white transition-colors duration-300 transform bg-green-700 hover-bg-green-600 focus:outline-none focus-bg-green-600">
                                    Adicionar
                                </button>
                            </div>
                    </form>
                </section>
            </div>
        </>
    );
};

export default FormClientCreate;