import React, { useState } from 'react';
import UploadImage from '../uploadImage/UploadImage';
import Infos from '../infos/Infos';
import Infos2 from '../infos2/infos2';
import Stats from '../stats/Stats';
import Attributes from '../attributes/Attributes';
import SubAttributes from '../sub-attributes/SubAttributes';
function Home() {

  return (
    <div className=''>
      <Attributes/>
      <Infos/>
      <Infos2/>
      <UploadImage/>
      <Stats></Stats>
      <SubAttributes/>

    </div>



  );

}


export default Home;
