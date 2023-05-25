import React, { useState } from 'react';

function Infos2() {

    return (
        <>
        <div className="bg-gray-900 h-[13rem] w-[14rem] rounded-xl object-cover px-30 ml-2 mr-2 mt-2">            <div className='ml-2'>
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
            <div className='ml-2 '>
                <label
                    htmlFor="nome"
                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                >
                    CA
                </label>
                <input
                    type="number"
                    placeholder="Informe sua CA"
                    className="mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                />
            </div>
            <div className='ml-2 '>
                <label
                    htmlFor="nome"
                    className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                >
                   Background
                </label>
                <select
                    id="background"
                    className="text-gray-950 mt-1 w-48 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                >
                    <option value="">Selecione um Background</option>
                    <option value="Nobre">Nobre</option>
                    <option value="Soldado">Soldado</option>
                    <option value="Andarilho/Mercenário">Andarilho/Mercenário</option>
                    <option value="Exilado">Exilado</option>
                    <option value="Ronin">Ronin</option>
                    <option value="Civil">Civil</option>
                    <option value="Escravo">Escravo</option>
                    <option value="Estudioso">Estudioso</option>
                </select>
            </div>
            </div>
        </>

    );
}

export default Infos2;