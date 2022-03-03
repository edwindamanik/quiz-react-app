import React from 'react';

const CustomButton = ({ onClick, children }) => {
  return(
    <>
      <button className='bg-gray-900 p-3 rounded text-white hover:bg-gray-800 w-full' onClick={onClick}>{children}</button>
    </>
  )
}

export default CustomButton