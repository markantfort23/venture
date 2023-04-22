import React from 'react';
import long from '../assets/long.png';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4' style={{backgroundImage: `url(${long})` }}>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Contact us!
          </h1>
          <p>Enter your email and we will be in touch soon.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-white'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#f8412d] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Connect
            </button>
          </div>
          <p>
            Read our{' '}
            <span className='text-[#f8412d]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;