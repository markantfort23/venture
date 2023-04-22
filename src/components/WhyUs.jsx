import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-[#f5f5f5] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' style={{width:500, borderRadius:500}}/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#f8412d] font-bold '>WHY US?</p>
          <h1 className='text-black md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Food Service Owners often struggle to obtain working capital.</h1>
          <br />
          <p className='text-black'>
          Need working capital to hire employees, rent new facilities, buy ingredients, equipment etc.
          </p>
          <br />
          <p className='text-black'>
          Cash constrained due to starting off with little working capital.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Analytics;