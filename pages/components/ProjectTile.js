import React from 'react';
import Image from 'next/image';
// import SiGithub from 'react-icons/si';

const ProjectTile = (props) => {
  return (
    <div className='m-6 w-96 pt-24 bg-gray-700 rounded-lg flex items-end justify-center mt-24'>
      <div className='absolute transform -translate-y-12 shadow-2xl'>
        <Image src={props.imageURL} width='310' height='150' />
      </div>
      <div className='flex flex-col w-full mx-10 '>
        <div className='justify-between flex'>
          <h3 className='text-xl my-2'>{props.label}</h3>
          <div>{/* <SiGithub /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
