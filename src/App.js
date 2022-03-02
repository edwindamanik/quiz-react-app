import React, { useState } from 'react';
import Quiz from './components/Quiz/Quiz.component';
import Welcome from './components/Welcome/Welcome.component';
function App() {

  const [start, useStart] = useState(false);

  return (
    <div className='bg-blue-300'>
      {
        start ? <Quiz /> : <Welcome props={useStart} />
      }
    </div>
  );
}

export default App;
