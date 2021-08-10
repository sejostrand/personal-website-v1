import React, { useState, useEffect } from 'react';

const DarkMode = (props) => {
  return (
    <button
      onClick={props.toggleTheme}
      className='w-28 justify-center bg-black mr-2 hover:text-gray-300 '
    >
      {props.theme == 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
    </button>
  );
};

export default DarkMode;
