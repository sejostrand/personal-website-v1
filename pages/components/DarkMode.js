import React, { useState, useEffect } from 'react';

const DarkMode = (props) => {
  return (
    <button
      onClick={props.toggleTheme}
      className='w-28 justify-center dark:bg-black bg-white hover:bg-gray-300 mr-2 dark:hover:text-gray-300 '
    >
      {props.theme == 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
    </button>
  );
};

export default DarkMode;
