import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const Marcas = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(updateBrand, 2500);
    clearTimeout();
  }, [index]);

  const data = [
    {
      id: 1,
      name: 'Tarara',
      bg: '/media/bg-tarara.png',
      logo: '/media/logo-tarara.png',
      topInsta: '/media/topInsta-tarara.png',
      botInsta: '/media/botInsta-tarara.png',
      tags: ['Branding', 'Concepto', 'RR.SS', 'Communicaciones'],
    },
    {
      id: 1,
      name: 'Tarara',
      bg: '/media/bg-tarara.png',
      logo: '/media/logo-tarara.png',
      topInsta: '/media/topInsta-tarara.png',
      botInsta: '/media/botInsta-tarara.png',
      tags: ['Branding', 'Concepto', 'RR.SS', 'Communicaciones'],
    },
  ];

  const updateBrand = () => {
    if (index == data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className='snap-item flex-row justify-center items-center'>
      <div className='absolute flex flex-row flex-nowrap bottom-32 text-white text-5xl z-10'>
        <button className='rounded-full filter bg-gray-900 bg-opacity-80 mr-6'>
          <FiArrowLeftCircle />
        </button>
        <button className='rounded-full filter bg-gray-900 bg-opacity-80 ml-6'>
          <FiArrowRightCircle />
        </button>
      </div>
      <div className='absolute w-full h-screen z-0'>
        <Image src='/media/bg-tarara.png' layout='fill' />
      </div>

      <div className='flex flex-row flex-wrap'>
        <div className='flex flex-col flex-nowrap'>
          <Image src='/media/ami.png' height='200' width='200' />
          <Image src='/media/ami.png' height='200' width='200' />
        </div>
        <div className=''>
          <Image src='/media/logo-tarara2.png' height='300' width='300' />
        </div>
      </div>
    </div>
  );
};

export default Marcas;
