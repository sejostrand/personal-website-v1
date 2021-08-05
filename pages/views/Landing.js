import React from 'react';

const Landing = (props) => {
  return (
    <div
      id='landing'
      className='relative flex flex-row h-full open-section overflow-hidden transition-all ease-in-out duration-300'
    >
      <div
        onClick={() => props.openView('landing')}
        className='bg-purple bookmark p-4'
      >
        <a className='bookmark-link text-5xl font-sunset cursor-pointer mt-2'>
          Welcome
        </a>
      </div>
      <div className='w-full h-full bg-gray-800 flex flex-col font-mono text-4xl'>
        <div className='w-full bg-purple h-2'></div>
        {/* main body of the section */}
        <div className='w-full p-28'>
          <div>
            <p className='text-5xl'>Hi, my name is Sebastian Strand.</p>
            <p className='pt-24'>I like building things,</p>
            <p className='pl-24 pt-12'>...especially on the web.</p>
          </div>
          <div className='flex flex-row text-3xl font-sunset pt-24'>
            <a
              href='./cv-english.pdf'
              download='CV Sebastian Strand'
              target='_blank'
              className='mr-12 pt-3 pb-2 px-8 bg-gray-800 hover:bg-darkOrange transform transition-all ring-4 rounded ring-white'
            >
              Download CV
            </a>
            <button
              onClick={() => props.openView('contact')}
              className='pt-3 pb-2 px-8 bg-gray-800 hover:bg-darkYellow transform transition-all ring-4 rounded ring-white'
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
