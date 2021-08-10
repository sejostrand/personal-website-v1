import React from 'react';
import Image from 'next/image';
import { SiGithub } from 'react-icons/si';
import { BsWindow } from 'react-icons/bs';

const ProjectTile = (props) => {
  return (
    <div className='m-6 w-96 pt-24 bg-white text-black dark:text-white dark:bg-gray-700 rounded-lg flex items-end justify-center mt-24'>
      <div className='absolute transform -translate-y-16 shadow-xl flex'>
        <Image src={props.imageURL} width='310' height='150' />
      </div>
      <div className='flex flex-col w-full mx-10'>
        <div className='justify-between flex items-end pb-4'>
          <h3 className='text-xl my-1'>{props.label}</h3>
          <div className='flex-row flex text-xl'>
            <BsWindow className='m-2 cursor-pointer' />
            <SiGithub className='m-2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
