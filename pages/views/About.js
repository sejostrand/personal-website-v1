import React from 'react';
import Image from 'next/image';

const About = (props) => {
  return (
    <div
      id='about'
      className='closed-section relative flex flex-row h-full section-container transition-all ease-in-out duration-300'
    >
      <div
        onClick={() => props.openView('about')}
        className='bg-darkOrange bookmark p-4 z-20'
      >
        <a className='bookmark-link text-5xl font-sunset cursor-pointer mt-1'>
          About
        </a>
      </div>
      <div className='w-full h-full bg-gray-800 flex flex-col '>
        <div className='w-full bg-darkOrange h-2'></div>
        {/* main body of the section */}
        <div className='flex flex-col p-24 overflow-hidden'>
          <div className='flex items-center '>
            <div className='my-12 flex px-2 py-6 bg-white items-center justify-center '>
              <Image
                src='/profile.jpg'
                layout='fixed'
                width='200'
                height='300'
              />
            </div>

            <p className='mx-24 flex font-mono text-3xl max-w-3xl'>
              I'm an Industrial Engineering graduate who then taught himself web
              development. Why?
              <br />
              <br />I enjoy challenges and building things.
              <br />
              <br />
              I'm from England and speak fluent spanish becuase I lived in Chile
              for 10 years.
            </p>
          </div>
          <h1 className='text-6xl mt-24'>What's my stack?</h1>
          <div className='bg-gray-700 rounded-2xl mt-12 font-mono p-6 max-w-3xl'>
            These are some of the technologies I've been using lately:
          </div>
          <h1 className='font-content text-3xl mt-64'>
            The wierd stuff is this way
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
