import React, { useState } from 'react';
import UploadImage from '../uploadImage/UploadImage';
import Infos from '../infos/Infos';
import Infos2 from '../infos2/infos2';
import Atributos from '../atributos/Atributos';
function Home() {

  return (



        <Atributos></Atributos>

  );

}

/*
    <div className='flex justify-center'>
      <div className='rounded-xl bg-gray-900 w-[80rem] flex flex-wrap'>
        <UploadImage></UploadImage>
        <div className='bg-red-900'>
          <Atributos></Atributos>
        </div>    
          <div className='grid grid-cols-3'>
            <Infos></Infos>
            <Infos2></Infos2>
          </div>
        </div>
    </div>



*/
export default Home;
