import React from 'react';
import Image from 'next/image';

const Tere = () => {
  return (
    <div className='relative flex flex-col items-center'>
      <Image src='/media/tere.png' width={273} height={402} />
      <div className='shadow-inner -bottom-16 bg-red absolute px-2 transform -rotate-3  z-20'>
        <div className='text-white transform rotate-1 text-3xl'>
          Tere Achondo
        </div>
      </div>
    </div>
  );
};

export default Tere;
