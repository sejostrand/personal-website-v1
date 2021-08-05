import React from 'react';

const Block = ({ children }) => {
  return (
    <div className='bg-gray-900 text-white px-3 pt-3 pb-2 w-max rounded-lg font-sunset hover:text-darkYellow transition-all cursor-default'>
      {children}
    </div>
  );
};

export default Block;
