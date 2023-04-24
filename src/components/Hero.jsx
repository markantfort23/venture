import React from 'react';
import Typed from 'react-typed';
import background from '../assets/background.jpg';
import {useRef} from 'react';

const Hero = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'}); };
  return (
    <div className='text-white' style={{backgroundImage: `url(${background})` }}>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        An investment in your business potential
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Democratized access to capital', 'Hassle free, quick experience', 'Pay as you grow']}
            typeSpeed={100}
            backSpeed={80}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'></p>
        <button onClick={handleClick} className='bg-[#ff8f33] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
      <div ref={ref}></div>
    </div>
  
  );
};

export default Hero;