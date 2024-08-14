import React, { useState, useRef, useEffect } from 'react';

import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isCounterStarted, setIsCounterStarted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleStart = () => {
    if (!isCounterStarted) {
      const timerId = setInterval(() => {
        setCounter((prevState) => prevState + 1);
      }, 1000);
      timerRef.current = timerId;
    } else {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setIsCounterStarted(!isCounterStarted);
  };

  const handleReset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setCounter(0);
    setIsCounterStarted(false);
  };

  return (
    <div className="App">
      <div>Counter: {counter}</div>
      <button onClick={handleStart}>{!isCounterStarted ? 'Start' : 'Pause'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
