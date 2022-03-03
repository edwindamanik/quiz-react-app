import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login.component';
import Quiz from './components/Quiz/Quiz.component';
import Timer from './components/Timer/Timer.component';
import Welcome from './components/Welcome/Welcome.component';
import firebase from './firebase/firebase.utils';
function App() {

  const [ user, setUser ] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])

  console.log(user);

  const [start, useStart] = useState(false);

  return (
    <div className='bg-blue-300'>
      {
        user ? start ? <Quiz /> : <Welcome props={useStart} user={user} /> : <Login />
      }
    </div>
  );
}

export default App;
