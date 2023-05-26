import React, { useState } from 'react';

function Infos2() {

    return (
        <>
        <div className=" bg-gray-900 h-[14rem] w-[14rem] rounded-xl object-cover px-30 ml-2 mr-2 mt-2">            <div className='ml-2'>
                <label
                    htmlFor="nome"
                    className="mt-2 block text-xs font-medium text-white"
                >
                    Idade
                </label>
                <div className='flex flex-row'>
                    <input
                        type="number"
                        placeholder=" Digite a idade"
                        className=" mt-2 w-40 rounded-md shadow-sm border-gray-700 bg-gray-800 text-gray-900 sm:text-sm"
                    />
                </div>
            </div>
            <div className='ml-2 '>
                <label
                    htmlFor="nome"
                    className="block text-xs font-medium text-white"
                >
                    Tendência
                </label>
                <select
                    id="tendencia"
                    className="mt-1 w-50 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
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
                    className="block text-xs font-medium text-white"
                >
                    Nível
                </label>
                <input
                    type="number"
                    placeholder=" Informe seu Nível"
                    className="mt-2 w-40 rounded-md shadow-sm border-gray-700 bg-gray-800 text-gray-900 sm:text-sm"
                />
            </div>
            <div className='ml-2 '>
                <label
                    htmlFor="nome"
                    className="block text-xs font-medium text-white"
                >
                    CA
                </label>
                <input
                    type="number"
                    placeholder=" Informe sua CA"
                    className="mt-2 w-40 rounded-md shadow-sm border-gray-700 bg-gray-800 text-gray-900 sm:text-sm"
                />
            </div>
            <div className='ml-2 '>
                <label
                    htmlFor="nome"
                    className="block text-xs font-medium text-white"
                >
                   Background
                </label>
                <select
                    id="background"
                    className="mt-1 w-50 rounded-md  shadow-sm border-gray-700 bg-gray-800 text-gray-400 sm:text-sm"
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