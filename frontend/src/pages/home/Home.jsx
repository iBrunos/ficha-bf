import React, { useState } from 'react';
import UploadImage from '../uploadImage/UploadImage'
import Infos from '../infos/Infos'
import Infos2 from '../infos2/infos2'
function Home() {

    return (
        <>
          <div className='flex justify-center'>
            <div className='rounded-xl bg-gray-900 w-[80rem] flex flex-wrap'>
              <UploadImage></UploadImage>
              <Infos></Infos>
              <Infos2></Infos2>
            </div>
          </div>
        </>
      );
      
}

export default Home;
