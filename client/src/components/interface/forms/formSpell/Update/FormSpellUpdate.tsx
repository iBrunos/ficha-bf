import React, { useState, useEffect, useRef } from 'react';
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

interface FormClientUpdateProps {
    client: Client | null;
    onClose: () => void;
    onUpdateClient: (updatedClient: Client) => void;
}

const FormClientUpdate: React.FC<FormClientUpdateProps> = ({ client, onClose, onUpdateClient }) => {
    const [clients, setClients] = useState<Client[]>([]);
    const [name, setName] = useState<string>(client ? client.name : "");
    const [email, setEmail] = useState<string>(client ? client.email : "");
    const [birthdayDate, setBirthdayDate] = useState<string>(client ? client.birthdayDate : "");
    const [gender, setGender] = useState<string>(client ? client.gender : "");
    const [children, setChildren] = useState<number>(client ? client.children || 0 : 0);
    const [phone, setPhone] = useState<string>(client ? client.phone : "");


    useEffect(() => {
        fetch("https://sunx-api-agendamento.vercel.app/clients")
            .then((response) => response.json())
            .then((data) => {
                setClients(data);
            })
            .catch((error) => console.error("Erro ao buscar clientes:", error));
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
            if (!client) {
                return;
            }

            const updatedClient = { ...client, name, email, birthdayDate, gender, children, phone };


            const response = await fetch(`https://sunx-api-agendamento.vercel.app/clients/${client._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedClient),
            });

            if (response.ok) {
                toast.success("O cliente foi atualizado!");
                onUpdateClient(updatedClient); // Chame a função para atualizar o cliente na lista
                onClose();
            } else {
                console.error('Erro ao atualizar o cliente:', response.statusText);
                toast.error("Erro ao atualizar o cliente!");
            }
        } catch (error) {
            console.error('Erro de rede:', error);
            toast.error("Erro de rede ao atualizar o cliente!");
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
                                    htmlFor="username"
                                >
                                    Nome Completo
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
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="username"
                                >
                                    Genêro
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={gender}
                                    required
                                    onChange={(e) => setGender(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="email"
                                >
                                    Email
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
                                    Data de nascimento
                                </label>
                                <input
                                    id="username"
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
                                    Telefone
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
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="username"
                                >
                                    Filhos
                                </label>
                                <input
                                    id="username"
                                    type="number"  // Change the input type to number
                                    value={children || ''}  // Provide an empty string as the default value
                                    required
                                    onChange={(e) => setChildren(parseInt(e.target.value, 10) || 0)}  // Parse the input value to a number
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

export default FormClientUpdate;