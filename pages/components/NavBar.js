import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full top-0 left-0 flex bg-gray z-50 fixed justify-between items-center pt-1 text-white'>
      <div id='logo' className='flex flex-row items-end ml-4 cursor-pointer'>
        <a className='font-block1 text-5xl'>Sebastian Strand</a>
        <a className='font-block2 text-3xl mx-1'>Web Developer</a>
      </div>
      <nav className='text-4xl font-sunset'>
        <ol className='flex flex-row mx-4'>
          <button
            id='home-link'
            className='mx-4 cursor-pointer focus:underline hover:underline'
          >
            Home
          </button>
          <button
            id='about-link'
            className='mx-4 cursor-pointer focus:underline hover:underline'
          >
            About
          </button>
          <button
            id='projects-link'
            className='mx-4 cursor-pointer focus:underline hover:underline'
          >
            Projects
          </button>
          <button
            id='contact-link'
            className='mx-4 cursor-pointer focus:underline hover:underline'
          >
            Contact
          </button>
        </ol>
      </nav>
    </div>
  );
};

export default Navbar;
