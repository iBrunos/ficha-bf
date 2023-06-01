import React, { useState } from 'react';
import UploadImage from '../../components/uploadImage/UploadImage';
import Infos from '../../components/infos/Infos';
import InfosProfile from '../../components/infos/infosPorfile';
import Stats from '../../components/stats/Stats';
import Attributes from '../../components/attributes/Attributes';
import SubAttributesForca from '../../components/sub-attributes/SubAttributesForca';
import SubAttributesDestreza from '../../components/sub-attributes/SubAttributesDestreza';
import SubAttributesInteligencia from '../../components/sub-attributes/SubAttributesInteligencia';
import SubAttributesCarisma from '../../components/sub-attributes/SubAttributesCarisma';
import SubAttributesKai from '../../components/sub-attributes/SubAttributesKai';
import SubAttributesConstituicao from '../../components/sub-attributes/SubAttributesConstituicao';
import SubAttributesEspirito from '../../components/sub-attributes/SubattributesEspirito';
import SubAttributesSabedoria from '../../components/sub-attributes/SubAttributesSabedoria';
import Todolist from '../../components/todolist/ToDoList';
import Slots from '../../components/slots/Slots';
function Home() {

  return (

    <div className='bg-gray-900 h-[70rem] w-full' >
    <div className=' bg-gray-900 h-[5rem] w-full'>
      <div className='flex flex-row w-full h-64 bg-gray-900 rounded-xl'>
        <UploadImage />
        <Infos />
        <InfosProfile />
        <Stats />
        <Todolist />
      </div>
      <div className='grid grid-cols-2 bg-gray-900 w-[50rem]'>

        <div className='mt-6 bg-gray-900 '>
          <Attributes />
          <Slots />
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