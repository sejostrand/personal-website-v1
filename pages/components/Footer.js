import React from 'react';

const Footer = () => {
  return (
    <nav className='w-full flex flex-col p-24 bg-gray-300 items-center justify-center font-block1 text-4xl'>
      <ol className='flex flex-row w-min'>
        <li className='px-4'>Home</li>
        <li className='px-4'>About</li>
        <li className='px-4'>Projects</li>
        <li className='px-4'>Contact</li>
      </ol>
    </nav>
  );
};

export default Footer;
