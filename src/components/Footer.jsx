import React from 'react';

const Footer = () => {
  return (
    <div className='w-full mx-auto py-12 px-12 grid lg:grid-cols-3 gap-8 text-[#ededed] bg-[#f8412d]'>
      <div>
        <h1 className='w-full text-4xl font-bold text-white'>Kitchen Kapital</h1>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-bold text-white'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-white'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-white'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-white'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;