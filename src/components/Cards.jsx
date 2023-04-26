import React from 'react';
import Single from '../assets/bank.png'
import Logo from '../assets/logo.png'

const Cards = () => {
  return (
    <div className='w-full py-[8rem] px-4 bg-white'>
      <div className='max-w-[1480px] mx-auto grid md:grid-cols-2 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-[#5b4fd9]'>Traditional Criteria</h2>
              <p className='text-center text-4xl font-bold'>Banks make it difficult for new food service entrepreneurs to obtain working capital</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Months of financial history</p>
                  <p className='py-2 border-b mx-8'>FICO credit scores</p>
                  <p className='py-2 border-b mx-8'>Tax returns</p>
                  <p className='py-2 border-b mx-8'>Endless forms</p>
                  <p className='py-2 border-b mx-8'>Long waiting periods that can be several months</p>
              </div>
               </div>
          <div className='w-full shadow-xl flex flex-col p-4 m  y-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Logo} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-[#ff8f33]'>Holistic Criteria</h2>
              <p className='text-center text-4xl font-bold'>We use a holistic assessment that accounts for your potential to grow and easily repay our loan</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Social engagement</p>
                  <p className='py-2 border-b mx-8'>Google Map data</p>
                  <p className='py-2 border-b mx-8'>Review of accounts payable and receivables</p>
                  <p className='py-2 border-b mx-8'>PoS data</p>
                  <p className='py-2 border-b mx-8'>Quick loan approval and disbursement within days</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Cards;