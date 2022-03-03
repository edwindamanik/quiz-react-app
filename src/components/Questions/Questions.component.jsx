import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import FinalScore from '../FinalScore/FinalScore.component';
import Timer from '../Timer/Timer.component';

const Questions = ({ quiz, order, checkResult, point, count, setOrder }) => {

  return(
    <div className='flex h-screen justify-center items-center'>
      
      {
        quiz[order] &&
        
        <div className='flex flex-col w-3/3 text-center'>
          <div className='p-5 text-right '>
            {
              <h1 className='font-bold text-2xl bg-blue-400 rounded p-1'><Timer order={order} setOrder={setOrder} point={point} /></h1>
            }
          </div>
          <div className='p-5 text-left'>
            <h1 className='text-xl text-black font-bold'>Question {order + 1} / 10</h1>
          </div>
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
        order === 10 && <FinalScore count={count} order={order} point={point} />
      }
      
    </div>
  )
}

export default Questions