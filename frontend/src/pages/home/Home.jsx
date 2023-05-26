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
      <SubAttributesCarisma/>
      <SubAttributesKai/>
      <SubAttributesSabedoria/>
      <SubAttributesConstituicao/>
      <SubAttributesEspirito/>
    </div>



  );

}


export default Home;
