import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import FinalScore from '../FinalScore/FinalScore.component';

const Timer = ({ setOrder, point, order }) => {


  const renderer = ({ hours, minutes, seconds, completed }) => {
    if(completed) {
      return [setOrder(10), <FinalScore point={point}/>]
    } else {
      return order === 10 ? '' : <span>{hours}:{minutes}:{seconds}</span>
    }
  }

  return(
    <Countdown date={Date.now() +20000} renderer={renderer} />
  )
}

export default Timer;