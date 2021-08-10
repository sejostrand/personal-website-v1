import React from 'react';
import Datetime from './Datetime';
import DarkMode from './DarkMode';
import Language from './Language';

const Header = (props) => {
  return (
    <div className='w-full flex dark:text-black dark:bg-white text-white bg-gray-800 items-end justify-between'>
      <div className='cursor-pointer ml-4'>
        <a className='font-block1 text-5xl'>Sebastian Strand</a>
        <a className='font-block2 text-3xl ml-1'>Web Developer</a>
      </div>
      <div className='flex flex-col items-end p-2 relative'>
        <div className='flex w-full dark:text-white text-gray-800 text-xl font-gamer relative mb-6'>
          <DarkMode theme={props.theme} toggleTheme={props.toggleTheme} />
          <Language
            language={props.language}
            toggleLanguage={props.toggleLanguage}
          />
        </div>
        <Datetime />
      </div>
    </div>
  );
};

export default Header;
