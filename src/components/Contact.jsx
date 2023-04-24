import React from 'react';
import long from '../assets/long.png';
import { useRef } from 'react';

const Newsletter = () => {
  const ref = useRef(null);

  const handleClick = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdOgIgzoOpGheSTNlu-tXnm88_zxkWAo4vpyWZrKA1lPZHZvQ/viewform?usp=sharing';
  }

  return (
    <div ref={ref} className='w-full py-16 text-black px-4 bg-[#f5f5f5]'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 justify-center text-[#5b4fd9]'>
            Contact us!
          </h1>
          <p>Access our contact form and we will be in touch soon.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <button className='bg-[#5b4fd9] text-white rounded-md font-medium w-[400px] ml-4 my-6 px-6 py-3' onClick={handleClick}>
              Connect
            </button>
          </div>
          {/* <p>
            Read our{' '}
            <span className='text-[#ff8f33]'>Privacy Policy.</span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
