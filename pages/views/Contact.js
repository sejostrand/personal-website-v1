import React from 'react';

const Contact = (props) => {
  return (
    <div
      id='contact'
      className='relative flex flex-row h-full closed-section transition-all ease-in-out duration-300 section-container'
    >
      <div
        onClick={() => props.openView('contact')}
        className='bg-darkYellow bookmark p-4'
      >
        <a className='bookmark-link text-5xl font-sunset cursor-pointer'>
          Contact
        </a>
      </div>
      <div className='w-full h-full bg-gray-800 flex flex-col'>
        <div className='w-full bg-darkYellow h-2'></div>
        {/* main body of the section */}
        <div className='w-full p-28 flex flex-col overflow-hidden'>
          <h1 className='font-content text-5xl'>Get in touch!</h1>
          <form className='font-mono'>
            <div className='mt-4 max-w-3xl p-12 rounded-3xl ring-4 ring-white flex-col'>
              <div className='flex flex-row'>
                <div className='flex flex-col mr-4'>
                  <h3>Email</h3>
                  <input className='flex text-lg p-2' type='text' />
                </div>
                <div className='flex flex-col'>
                  <h3>Subject</h3>
                  <input className='w-full text-lg p-2' type='text' />
                </div>
              </div>
              <div className='mt-4'>
                <h3>Message</h3>
                <textarea
                  placeholder='Say hello..'
                  type='text'
                  class='rounded w-full text-lg h-24 p-2'
                ></textarea>
              </div>
            </div>
            <button
              type='submit'
              className='rounded mt-12 ml-12 font-sunset text-5xl pt-3 pb-2 px-12 bg-gray-800 hover:bg-darkYellow transform transition-all ring-4 ring-white'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
