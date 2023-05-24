import React, { useState } from 'react';

function Home() {
    const [imageSrc, setImageSrc] = useState('');

    function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            setImageSrc(e.target.result);
        };

        reader.readAsDataURL(file);
    }


    return (
        <div>
            <article className="flex-row rounded-xl border border-gray-700 bg-gray-800 p-4 w-[50rem]">

                <div className='flex flex-row'>
                    <div className="flex-col items-center w-">
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
                    <div className="">
                        <ul className="-m-1 flex flex-wrap">
                            <div>
                                <label
                                    htmlFor="nome"
                                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    placeholder="Digite seu nome"
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="raca"
                                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Raça
                                </label>
                                <input
                                    type="text"
                                    placeholder="Digite seu nome"
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="nome"
                                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Idade
                                </label>
                                <input
                                    type="number"
                                    placeholder="Digite a idade"
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                                />
                            </div>
                        </ul>
                    </div>


                </div>
            </article>
        </div>
    );
}

export default Home;