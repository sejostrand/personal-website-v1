import React from 'react';
import Spotify from '../components/Spotify';

const About = (props) => {
  return (
    <div
      id='about'
      className='relative flex flex-row h-full closed-section overflow-hidden transition-all ease-in-out duration-300'
    >
      <div
        onClick={() => props.openView('about')}
        className='bg-darkOrange bookmark p-4'
      >
        <a className='bookmark-link text-5xl font-sunset cursor-pointer mt-1'>
          About
        </a>
      </div>
      <div className='w-full h-full bg-gray-800 flex flex-col'>
        <div className='w-full bg-darkOrange h-2'></div>
        {/* main body of the section */}
        <div className='p-24 flex flex-col'>
          <p className='flex flex-row text-white font-mono text-3xl '>
            I'm an Industrial Engineering graduate who taught himself web
            development. Why?
            <br />
            <br />I want to learn and master the tools for me to build great
            projects, projects that solve problems and improve lives.
          </p>
          <h1 className='font-content text-6xl mt-24'>What's my stack?</h1>
          <div className='bg-gray-700 rounded-2xl mt-12 font-mono p-6 max-w-3xl'>
            These are some of the technologies I've been using lately:
          </div>
          <Spotify />
          <h1 className='font-content text-3xl mt-64'>
            The wierd stuff is this way
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
