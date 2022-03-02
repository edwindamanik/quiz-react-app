import React from 'react';

const FinalScore = ({ point }) => {
  return(
    <div className=''>
      <div className='flex flex-col p-5 bg-slate-200 shadow-md w-3/3 text-center rounded'>
        <h2 className='text-gray-800 font-bold text-xl'>Skor Akhir Anda</h2>
        <span className='text-white mt-8 p-3 rounded-full bg-blue-300 block'>{point}</span>
      </div>  
    </div>
  )
}

export default FinalScore