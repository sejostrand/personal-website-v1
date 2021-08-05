import React from 'react';
import Image from 'next/image';
import ProjectTile from '../components/ProjectTile';

const Projects = (props) => {
  return (
    <div
      id='projects'
      className='relative flex flex-row h-full closed-section overflow-hidden transition-all ease-in-out duration-300'
    >
      <div
        onClick={() => props.openView('projects')}
        className='bg-orange bookmark p-4'
      >
        <a className='bookmark-link text-5xl text-white font-sunset cursor-pointer'>
          Projects
        </a>
      </div>
      <div className='w-full h-full bg-gray-800 flex flex-col'>
        <div className='w-full bg-orange h-2'></div>
        {/* main body of the section */}
        <div className='flex flex-col m-12'>
          <h1 className='font-content text-4xl mt-24'>
            Here are some of my projects.
          </h1>
          <div className='flex flex-row flex-wrap'>
            <ProjectTile label='Yachtdrop' imageURL='/yachtdrop.jpg' />
            <ProjectTile label='La Compañía' imageURL='/la-compania.jpg' />
            <ProjectTile
              label='Personal Website V0'
              imageURL='/website-v0.jpg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;