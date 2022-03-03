import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';

const FinalScore = ({ point, count }) => {

  let falseScore = count - point

  return(
    <div>
      <div className='grid grid-cols-2 gap-8'>
        <div className='grid grid-rows-3 gap-5'>
          <h4 className='bg-green-500 text-center text-white font-bold text-base p-5 rounded'>Benar</h4>
          <h4 className='bg-red-500 text-center text-white font-bold text-base p-5 rounded'>Salah</h4>
          <h4 className='bg-yellow-500 text-center text-white font-bold text-base p-5 rounded'>Total Soal</h4>
        </div>

        <div className='grid grid-rows-3 gap-5'>
          <p className='bg-gray-100 text-center shadow-lg text-black font-bold text-base p-5 rounded'>{ point }</p>
          <p className='bg-gray-100 text-center shadow-lg text-black font-bold text-base p-5 rounded'>{ falseScore }</p>
          <p className='bg-gray-100 text-center shadow-lg text-black font-bold text-base p-5 rounded'>{ count }</p>
        </div>
      </div>

      <div className='mt-5 text-center'>
        <CustomButton onClick={() => window.location.reload()}>Ulang Kembali</CustomButton>
      </div>
    </div>
  )
}

export default FinalScore