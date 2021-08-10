import React, { useState, useEffect } from 'react';

const Language = (props) => {
  return (
    <button
      onClick={props.toggleLanguage}
      className='flex flex-grow justify-center dark:bg-black bg-white w-28 hover:bg-gray-300 hover:text-black dark:hover:text-gray-300'
    >
      {props.language == 'english' ? 'Español' : 'English'}
    </button>
  );
};

export default Language;
