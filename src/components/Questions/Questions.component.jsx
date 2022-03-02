import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import FinalScore from '../FinalScore/FinalScore.component';

const Questions = ({ quiz, order, checkResult, point }) => {

  return(
    <div className='flex h-screen justify-center items-center'>
      {
        quiz[order] &&
        
        <div className='flex flex-col w-3/3 text-center'>
          <div>
            <h2 className='bg-slate-200 p-8 text-md font-bold rounded shadow-md' dangerouslySetInnerHTML={{ __html: quiz[order].question }} />
          </div>

          <div className='mt-5 grid grid-flow-row grid-cols-2 gap-2'>
            {
              quiz[order].options.map((item, index) => (
                // eslint-disable-next-line react/no-danger-with-children
                <CustomButton key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={checkResult}>{item}</CustomButton>
              ))
            }
          </div>
        </div>

      }
      {
        order === 10 && <FinalScore point={point} />
      }
    </div>
  )
}

export default Questions