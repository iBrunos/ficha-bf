import React, { useState } from 'react';
import UploadImage from '../uploadImage/UploadImage';
import Infos from '../infos/Infos';
import InfosProfile from '../infos/infosPorfile';
import Stats from '../stats/Stats';
import Attributes from '../attributes/Attributes';
import SubAttributesForca from '../sub-attributes/SubAttributesForça';
import SubAttributesDestreza from '../sub-attributes/SubAttributesDestreza';
import SubAttributesInteligencia from '../sub-attributes/SubAttributesInteligencia';
import SubAttributesCarisma from '../sub-attributes/SubAttributesCarisma';
import SubAttributesKai from '../sub-attributes/SubAttributesKai';
import SubAttributesConstituicao from '../sub-attributes/SubAttributesConstituicao';
import SubAttributesEspirito from '../sub-attributes/SubAttributesEspirito';
import SubAttributesSabedoria from '../sub-attributes/SubAttributesSabedoria';
import Todolist from '../todolist/ToDoList';
import Slots from '../slots/Slots';
function Home() {

  return (
    <div className='bg-gray-900 w-[60rem] h-[5rem]'>
      <div className='flex flex-row bg-gray-900'>
        <UploadImage />
        <Infos />
        <InfosProfile />
        <Stats />
      </div>

      <div className='grid grid-cols-2 bg-gray-800 w-[50rem]'>

        <div className='bg-gray-900 '>
          <Attributes />
          <Slots />
        </div>
        <div className='grid grid-cols-3 '>
          <SubAttributesForca />
          <SubAttributesDestreza />
          <SubAttributesInteligencia />
          <SubAttributesCarisma />
          <SubAttributesKai />
          <SubAttributesConstituicao />
          <SubAttributesEspirito />
          <SubAttributesSabedoria />
        </div>
  
      </div>

    </div>



  );

}


export default Home;
