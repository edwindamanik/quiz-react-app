import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import { auth } from '../../firebase/firebase.utils';

const Welcome = ({props, user}) => {

  const startQuiz = () => props(true)

  return(
    <div className='flex h-screen justify-center items-center'>
      <div className='flex flex-col p-5 bg-slate-200 shadow-md w-1/3 text-center rounded'>
        <h1 className='text-lg font-bold mb-5'>Selamat datang {user.displayName}</h1>
        <div className='grid grid-cols-2 gap-4'>
          <CustomButton onClick={startQuiz}>Mulai Kuis</CustomButton>
          <CustomButton onClick={() => auth.signOut()}>Keluar</CustomButton>
        </div>
      </div>
    </div>
  )
}

export default Welcome