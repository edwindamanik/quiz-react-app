import React from 'react'
import CustomButton from '../CustomButton/CustomButton.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold mb-6'>Quiz App with React</h1>
        <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
      </div>
    </div>
  )
}

export default Login