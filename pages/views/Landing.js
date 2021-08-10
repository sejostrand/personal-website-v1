import React from 'react';

const Landing = (props) => {
  return (
    <div
      id='landing'
      className='open-section relative flex flex-row transition-all ease-in-out duration-300 section-container'
    >
      <div
        onClick={() => props.openView('landing')}
        className='bg-purple bookmark'
      >
        <a className='bookmark-link text-5xl font-sunset cursor-pointer m-4 text-white'>
          Welcome
        </a>
      </div>
      <div className='w-full h-full dark:bg-gray-800 bg-gray-200 flex flex-col font-mono text-4xl'>
        <div className='w-full bg-purple h-2'></div>
        {/* main body of the section */}
        <div className='w-full p-28 overflow-hidden'>
          <div>
            <p className='text-5xl'>Hi, my name is Sebastian Strand.</p>
            <p className='pt-24'>I like building things</p>
            <p className='pl-24 pt-12'>
              ...that go on the Web
              <span className='blink'>&#x25AE;</span>
            </p>
          </div>
          <div className='flex flex-row text-3xl font-sunset pt-24'>
            <a
              href='./cv-english.pdf'
              download='CV Sebastian Strand'
              target='_blank'
              className='mr-12 pt-3 pb-2 px-8 bg-gray-200 hover:bg-darkOrange ring-black dark:bg-gray-800 dark:hover:bg-darkOrange transform transition-all ring-4 rounded dark:ring-white'
            >
              Download CV
            </a>
            <button
              onClick={() => props.openView('contact')}
              className='pt-3 pb-2 px-8 dark:bg-gray-800 bg-gray-200 hover:bg-darkYellow dark:hover:bg-darkYellow transform transition-all ring-4 rounded ring-black dark:ring-white'
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
