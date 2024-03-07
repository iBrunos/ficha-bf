"use client"

import HeaderHome from '../components/layout/HeaderHome';
import SpellsList from '@/components/interface/lists/SpellsList';

export default function Home() {

  return (
    <>
      <HeaderHome />
      <div className='mt-20'>
        <SpellsList />
      </div>
    </>
  );
}