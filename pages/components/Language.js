import React, { useState, useEffect } from 'react';

const Language = (props) => {
  return (
    <button
      onClick={props.toggleLanguage}
      className='flex flex-grow justify-center bg-black w-28 hover:text-gray-300'
    >
      {props.language == 'english' ? 'Español' : 'English'}
    </button>
  );
};

export default Language;
