import React from 'react';
import Datetime from './Datetime';

const Header = () => {
  return (
    <div className='w-full pt-3 px-6 pb-2 flex flex-row bg-white items-end justify-between'>
      <div className='cursor-pointer'>
        <a className='font-block1 text-5xl'>Sebastian Strand</a>
        <a className='font-block2 text-3xl mx-1 mb-1'>Web Developer</a>
      </div>
      <Datetime />
    </div>
  );
};

export default Header;
