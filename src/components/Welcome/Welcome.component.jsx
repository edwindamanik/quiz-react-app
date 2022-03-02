import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';

const Welcome = ({props}) => {

  const startQuiz = () => props(true)

  return(
    <div className='flex h-screen justify-center items-center'>
      <div className='flex flex-col p-5 bg-slate-200 shadow-md w-1/3 text-center rounded'>
        <h1 className='text-lg font-bold mb-5'>Selamat datang</h1>
        <CustomButton onClick={startQuiz}>Mulai Kuis</CustomButton>
      </div>
    </div>
  )
}

export default Welcome