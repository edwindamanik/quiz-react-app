import React, { useEffect, useState } from 'react';
import Questions from '../Questions/Questions.component';

const Quiz = () => {

  const [quiz, setQuiz] = useState([]);
  const [order, setOrder] = useState(0);

  const shufQuiz = (arr) => arr.sort(() => Math.random() - 0.5);
  const [point, setPoint] = useState(0);

  const checkResult = (event) => {
    let myAnswer = event.target.innerText;
    
    if(myAnswer === quiz[order].answer) {
      setPoint(point + 1)
    }
    
    setOrder(order + 1)
  }

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
    .then(res => res.json())
    .then(data => (setQuiz(data.results.map(item => (
      {
        question: item.question,
        options: shufQuiz([...item.incorrect_answers, item.correct_answer]),
        answer: item.correct_answer
      }
    )))))
  }, [])

  return(
    <div className='flex h-screen justify-center items-center'>
      {
        quiz.length > 0 ? <Questions quiz={quiz} order={order} checkResult={checkResult} point={point} /> : <p className='text-black font-bold text-lg'>Loading ...</p>
      }
      {console.log(order)}
    </div>
  )
}

export default Quiz