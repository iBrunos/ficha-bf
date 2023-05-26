import React, { useState } from 'react';
import UploadImage from '../uploadImage/UploadImage';
import Infos from '../infos/Infos';
import InfosProfile from '../infos/infosPorfile';
import Stats from '../stats/Stats';
import Attributes from '../attributes/Attributes';
import SubAttributesForca from '../sub-attributes/SubAttributesForça';
import SubAttributesDestreza from '../sub-attributes/SubAttributesDestreza';
import SubAttributesInteligencia from '../sub-attributes/SubAttributesInteligencia';
function Home() {

  return (
    <div className=''>
      <Attributes/>
      <Infos/>
      <InfosProfile/>
      <UploadImage/>
      <Stats></Stats>
      <SubAttributesForca/>
      <SubAttributesDestreza/>
      <SubAttributesInteligencia/>

    </div>



  );

}


export default Home;
