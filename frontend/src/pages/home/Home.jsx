import React, { useState } from 'react';

function Home() {
    const [imageSrc, setImageSrc] = useState('');
    const [selectedRace, setSelectedRace] = useState('');
    const [customRace, setCustomRace] = useState('');


    function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            setImageSrc(e.target.result);
        };

        reader.readAsDataURL(file);
    }

    const handleRaceChange = (event) => {
        const { value } = event.target;
        if (value === 'outra') {
            setCustomRace('');
        }
        setSelectedRace(value);
    };

    const handleCustomRaceChange = (event) => {
        setCustomRace(event.target.value);
    };

    return (
        <div>
            <article className="flex-row rounded-xl border border-gray-700 bg-gray-800 p-4 w-[50rem]">

                <div className='flex flex-col'>
                    <div className='flex flex-row'>
                        <div className="bg-red-900 max-w-sm flex-col">
                            <img
                                alt="Developer"
                                src={
                                    imageSrc ||
                                    'https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
                                }
                                className="h-52 w-52 rounded-full object-cover px-30"
                            />
                            <label className='ml-10 cursor-pointer bg-gray-900 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg
                              dark:text-white sm:text-sm' htmlFor='upload-image'>  Escolha a imagem
                            </label>
                            <input
                                type="file"
                                id="upload-image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden mt-2 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg
                              dark:text-white sm:text-sm"
                            />
                        </div>
                        <div className="bg-yellow-900">
                            <div className='ml-2 '>
                                <label
                                    htmlFor="nome"
                                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    placeholder="Digite seu nome"
                                    className="mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                />
                            </div>
                            <div className='ml-2 '>
                                <label
                                    htmlFor="nome"
                                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Raça
                                </label>
                                <select
                                    id="raca"
                                    className="text-gray-950 mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    value={selectedRace}
                                    onChange={handleRaceChange}
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
                                    <option value="Felidaes">Felidaes</option>
                                    <option value="Hitsuji">Hitsuji</option>
                                    <option value="outra">Outra</option>
                                </select>
                                {selectedRace === 'outra' && (
                                    <input
                                        type="text"
                                        className="ml-2 mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                        placeholder="Digite a raça desejada"
                                        value={customRace}
                                        onChange={handleCustomRaceChange}
                                    />
                                )}
                            </div>
                            <div className='ml-2'>
                                <label
                                    htmlFor="nome"
                                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Idade
                                </label>
                                <div className='flex flex-row'>
                                    <input
                                        type="number"
                                        placeholder="Digite a idade"
                                        className=" mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className='ml-2 '>
                                <label
                                    htmlFor="nome"
                                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Tendência
                                </label>
                                <select
                                    id="tendencia"
                                    className="text-gray-950 mt-1 w-44 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                >
                                    <option value="">Selecione uma Tendência</option>
                                    <option value="Neutro e Bom (NB)">Neutro e Bom (NB)</option>
                                    <option value="Caótico e Bom (CB)">Caótico e Bom (CB)</option>
                                    <option value="Leal e Neutro (LN)">Leal e Neutro (LN)</option>
                                    <option value="Neutro (N)">Neutro (N)</option>
                                    <option value="Caótico e Neutro (CN)">Caótico e Neutro (CN)</option>
                                    <option value="Leal e Mau (LM)">Leal e Mau (LM)</option>
                                    <option value="Neutro e Mau (NM)">Neutro e Mau (NM)</option>
                                    <option value="Caótico e Mau (CM)">Caótico e Mau (CM)</option>
                                </select>
                            </div>
                            <div className='ml-2 '>
                                <label
                                    htmlFor="nome"
                                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Nível
                                </label>
                                <input
                                    type="number"
                                    placeholder="Informe seu Nível"
                                    className="mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="bg-purple-900">
                            <div className='ml-2 '>
                                <label
                                    htmlFor="nome"
                                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                                >
                                    XP
                                </label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    className="mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                />
                            </div>
                            <div className='ml-2 '>
                                <label
                                    htmlFor="nome"
                                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                                >
                                    HP
                                </label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    className="mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-pink-900">
                            <img
                                alt="Developer"
                                src={
                                    imageSrc ||
                                    'https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
                                }
                                className="h-52 w-52 rounded-full object-cover px-30"
                            />
                            <label className='ml-10 cursor-pointer bg-gray-900 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg
                              dark:text-white sm:text-sm' htmlFor='upload-image'>  Escolha a imagem
                            </label>
                            <input
                                type="file"
                                id="upload-image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden mt-2 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg
                              dark:text-white sm:text-sm"
                            />

                    </div>
                </div>
            </article>
        </div>
    );
}

export default Home;