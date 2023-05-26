import React, { useState } from 'react';
import UploadImage from '../uploadImage/UploadImage';
import Infos from '../infos/Infos';
import InfosProfile from '../infos/infosPorfile';
import Stats from '../stats/Stats';
import Attributes from '../attributes/Attributes';
import SubAttributesForca from '../sub-attributes/SubAttributesForça';
import SubAttributesDestreza from '../sub-attributes/SubAttributesDestreza';
import SubAttributesInteligencia from '../sub-attributes/SubAttributesInteligencia';
import SubAttributesCarisma from '../sub-attributes/SubAttributesCarisma.jsx'
import SubAttributesKai from '../sub-attributes/SubAttributesKai'
import SubAttributesConstituicao from '../sub-attributes/SubAttributesConstituicao';
import SubAttributesEspirito from '../sub-attributes/SubAttributesEspirito';
import SubAttributesSabedoria from '../sub-attributes/SubAttributesSabedoria';
import Todolist from '../todolist/ToDoList';
import Slots from '../slots/Slots';
function Home() {

  return (
    <div className='bg-gray-900 h-[70rem]' >
      <div className=' bg-gray-900 w-[60rem] h-[5rem] ml-80'>
        <div className='flex flex-row bg-gray-900 rounded-xl'>
          <UploadImage />
          <Infos />
          <InfosProfile />
          <Stats />
        </div>
        <div className='grid grid-cols-2 bg-gray-900 w-[50rem]'>

          <div className='bg-gray-900 '>
            <Attributes />
            <Slots />
            <Todolist />
          </div>
          <div className='grid grid-cols-3 '>
            <SubAttributesSabedoria />
            <SubAttributesDestreza />
            <SubAttributesInteligencia />
            <SubAttributesCarisma />
            <SubAttributesKai />
            <SubAttributesConstituicao />
            <SubAttributesEspirito />
            <SubAttributesForca />
          </div>
        </div>
      </div>
    </div>

  );

}


export default Home;
