import React, { useState, useEffect } from "react";
import axios from "axios";

const SignInForm = () => {
    const [username, setUsername] = useState("");
    const [lastname, setlastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const changePageTitle = (newTitle) => {
        document.title = newTitle;
    };
    changePageTitle("Blade Fall | Sign In");

    const API_URL = "https://api-bladefall.vercel.app/user";



    const addItem = async (e) => {
        e.preventDefault();

        const newItem = {
            username,
            lastname,
            phone,
            email,
            password,
            confirmPassword,
        };
  // Verificar se a senha e a confirmação de senha correspondem
  if (password !== confirmPassword) {
    console.error("A senha e a confirmação de senha não correspondem.");
    return;
  }
        try {
            const response = await axios.post(API_URL, newItem);
            setItems([...items, response.data]);
            setUsername("");
            setlastname("");
            setPhone("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            fetchItems();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteItem = async (id) => {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`${API_URL}/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setItems(items.filter((item) => item._id !== id));
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')" }}>
                    </div>


                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Crie sua conta aqui
                            </h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-400">

                                Vamos configurar tudo para que você possa verificar sua conta pessoal e começar a configurar seu perfil.
                            </p>

                            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={addItem}>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">username</label>
                                    < input
                                        type="text"
                                        placeholder="João"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Sobrenome</label>
                                    <input
                                        type="text"
                                        placeholder="Silva"
                                        value={lastname}
                                        onChange={(e) => setlastname(e.target.value)}
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Telefone</label>
                                    <input
                                        type="text"
                                        placeholder="(XX) - XXXXX-XXXX"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Endereço de Email</label>
                                    <input
                                        type="email"
                                        placeholder="joãosilva@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Senha</label>
                                    <input
                                        type="password"
                                        placeholder="Digite a senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirme sua senha</label>
                                    <input
                                        type="password"
                                        placeholder="Confirme a senha"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <button
                                    className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span>Cadastre-se </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default SignInForm;