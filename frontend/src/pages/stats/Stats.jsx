import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import DoneIcon from '@mui/icons-material/Done';

function Stats() {
    const [heal, setHeal] = useState('');
    const [damage, setDamage] = useState('');
    const [Hp, setHp] = useState(0);
    const [finalHp, setFinalHp] = useState(0);

    const handleLeftInputChange = (e) => {
        setHeal(e.target.value);
    };

    const handleRightInputChange = (e) => {
        setDamage(e.target.value);
    };

    const handleFinalHpChange = (e) => {
        setFinalHp(parseInt(e.target.value, 10));
    };

    const handleDoneClick = () => {
        const healValue = parseInt(heal) || 0;
        const damageValue = parseInt(damage) || 0;
        const newHp = finalHp + healValue - damageValue;
        //const newHp = Hp + healValue - damageValue;
        setHp(newHp);
        setHeal('');
        setDamage('');
        setFinalHp(finalHp);
    };
    const handleHpChange = (e) => {
        setHp(parseInt(e.target.value, 10));
      };
    return (
        <>
            <div className='ml-2 mt-2 h-56 rounded-xl bg-gray-900 w-[18rem] flex flex-col'>
                <label htmlFor='nome' className='ml-32 block font-semibold text-sm text-gray-700 dark:text-gray-200'>
                    Stats
                </label>
                <div className='flex flex-col'>
                    <div className='ml-2 '>
                        <label htmlFor='nome' className='block text-xs font-medium text-gray-700 dark:text-gray-200'>
                            XP
                        </label>
                        <input
                            type='number'
                            placeholder='0'
                            className='mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm'
                        />
                    </div>
                </div>
                <label htmlFor='nome' className='ml-2 block text-xs font-medium text-gray-700 dark:text-gray-200'>
                    HP
                </label>
                <div>
                    <input
                        type='number'
                        className='text-white ml-2 w-10 mt-1 rounded-md mr-2 border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm'
                        value={Hp}
                        disabled
                        onChange={handleHpChange}
                    />
                    <span className='text-white'>/ </span>
                    <input
                        type='number'
                        className='ml-2 w-10 mt-1 rounded-md mr-2 border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm'
                        value={finalHp}
                        onChange={handleFinalHpChange}
                    />
                </div>

                <div className='flex flex-row'>

                    <div className=''>
                        <FavoriteIcon className='text-green-900 ml-2' />
                        <input
                            type='number'
                            className='mt-2 ml-2 w-16 rounded-r-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm'
                            placeholder='heal'
                            value={heal}
                            onChange={handleLeftInputChange}
                        />
                        <span className='px-1'></span>
                        <input
                            type='number'
                            className='w-20 rounded-r-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm'
                            placeholder='damage'
                            value={damage}
                            onChange={handleRightInputChange}
                        />
                        <HeartBrokenIcon className='text-red-900 mr-2 ml-2' />
                        <button onClick={handleDoneClick}>
                            <DoneIcon className='text-neutral-50 mr-2 ml-2' />
                        </button>

                    </div>
                </div>
                <div className='ml-2 '>
                    <label
                        htmlFor="nome"
                        className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                    >
                        Armadura Espiritual
                    </label>
                    <input
                        type="number"
                        placeholder=" 0"
                        className="mt-1 w-40 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                    />
                </div>
                <div className='ml-2 '>
                    <label
                        htmlFor="nome"
                        className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                    >
                        Classe
                    </label>
                    <select
                        id="tendencia"
                        className="text-gray-950 mt-1 w-44 rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                    >
                        <option value="">Selecione uma Classe</option>
                        <option value="Samurai">Samurai</option>
                        <option value="Ninja">Ninja</option>
                        <option value="Nobushi">Nobushi</option>
                        <option value="Shugoki">Shugoki</option>
                        <option value="Monge">Monge</option>
                        <option value="Xamã">Xamã</option>
                        <option value="Bruxo">Bruxo</option>
                        <option value="Elementalista">Elementalista</option>
                        <option value="Exorcista">Exorcista</option>
                        <option value="Artista">Artista</option>
                    </select>
                </div>
            </div>
        </>

    );
}

export default Stats;