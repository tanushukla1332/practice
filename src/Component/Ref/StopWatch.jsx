

// import React,{useState,useRef,useEffect} from 'react';
// export default function StopWatch() {
//     const [milliSeconds, setMilliSeconds] = useState(0)
//     const [ticking, setTicking] = useState(false)
//     const[timer, setTimer] = useState(null)
    
//     const interval = useRef()
//     useEffect(() => {
//         const intervals=setInterval(()=>{
//             const hours=Math.floor(milliSeconds/3600);
//             const minutes=Math.floor((milliSeconds/60)%60)
//             const seconds=(milliSeconds%60);
//             setTimer(`${hours} ${minutes} ${seconds}`)
//         },[milliSeconds])
//       if (ticking) {
      
//         interval.current = setInterval(() => {
//           setMilliSeconds((ms) => ms + 1)
//         }, 1)
//         return () => clearInterval(interval.current)
//       } else {
     
//         interval.current && clearInterval(interval.current)
//       }
//     }, [ticking,milliSeconds])
 

//     return (
//       <div className="App">
//         <h1>{milliSeconds}</h1>
//         <h2>{timer}</h2>
//         <button onClick={() => setTicking((c) => !c)}>
//           {milliSeconds === 0 ? 'Start' : ticking ? 'Pause' : 'Resume'}
//         </button>
//       </div>
//     )
//   }
import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div>
        <h1>Stopwatch using useref </h1>
      <div>{formatTime(time)}</div>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}

export default Stopwatch;
