import React from 'react';
import Single from '../assets/bank.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[8rem] px-4 bg-white'>
      <div className='max-w-[1480px] mx-auto grid md:grid-cols-2 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-[#8c81ff]'>Traditional Criteria</h2>
              <p className='text-center text-4xl font-bold'>Banks put in place many hurdles to accessing the funds you need to grow your business</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Months of financial history</p>
                  <p className='py-2 border-b mx-8'>FICO credit scores</p>
                  <p className='py-2 border-b mx-8'>Tax returns</p>
                  <p className='py-2 border-b mx-8'>Endless forms</p>
                  <p className='py-2 border-b mx-8'>Long waiting periods that can be several months</p>
              </div>
              {/* <button className='bg-[#b2afd2] w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-[#f8412d]'>Holistic Criteria</h2>
              <p className='text-center text-4xl font-bold'>Kitchen Kapital uses innovate alternative proxies to assess your credit worthiness</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Social engagement</p>
                  <p className='py-2 border-b mx-8'>Google Map data</p>
                  <p className='py-2 border-b mx-8'>Review of accounts payable and receivables</p>
                  <p className='py-2 border-b mx-8'>PoS data</p>
                  <p className='py-2 border-b mx-8'>Quick loan approval and disbursement within days</p>
              </div>
              {/* <button className='bg-[#b2afd2] w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
      </div>
    </div>
  );
};

export default Cards;