import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-[#f5f5f5] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' style={{width:500, borderRadius:500}}/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#ff8f33] font-bold '>WHY US?</p>
          <h1 className='text-black md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Food Service Owners often struggle to obtain working capital.</h1>
          <br />
          <p className='text-black'>
          If you are a food service entrepreneur you are probably cash constrained, relying on a small amount of working capital from friends and family.           </p>
          <br />
          <p className='text-black'>
          If you want to grow, you will need a boost! We can help you access further capital to hire employees, rent facilities, buy ingredients, and deal with unexpected events.          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Analytics;