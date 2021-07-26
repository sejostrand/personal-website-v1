import React from 'react';
import Image from 'next/image';

const Mario = () => {
  return (
    <div className='relative flex flex-col items-center'>
      <Image
        src='/media/mario.png'
        width={273}
        height={402}
        className='transform scale-90'
      />
      <div className='bottom-8 bg-red absolute px-2 transform rotate-3 drop-shadow'>
        <div className='text-white transform -rotate-1  text-3xl'>
          Mario Balmaceda
        </div>
      </div>
    </div>
  );
};

export default Mario;
