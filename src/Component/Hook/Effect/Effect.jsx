// import React, { useState, useEffect } from "react";

// export default function Effect() {
//   const [Image, setImage] = useState(0);

//   const images = [
//     "https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_1280.jpg",
//     "https://cdn.pixabay.com/photo/2023/06/29/22/04/barn-swallow-8097199_1280.jpg",
//     "https://cdn.pixabay.com/photo/2023/06/11/08/52/waves-8055488_1280.jpg",
//     "https://cdn.pixabay.com/photo/2023/06/15/13/13/theme-park-8065415_1280.jpg",
//   ];
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImage((Image) => (Image + 1) % images.length);
//     }, 2000);
//   },[]);

//   return (
//     <div>
//       <p>UseEffct help making image chnages after two seceond </p>
//       <img src={images[Image]} alt="images" />
//     </div>
//   );
// }

// Create Timer using Useefect

// import React ,{useState,useEffect} from "react";

// export default function Effect() {
//   const [Count, setCount] = useState(0);
//   const[timer,setTimer]=useState(null)
//   useEffect(()=>{

//     const timers=`${Math.floor(Count/3600)}: ${Math.floor(
//       (Count % 3600)/60

//     )} :  ${(Count % 3600)%60}`;
//     setTimer(timers)
//     const interval=setInterval(()=>{
//       setCount((previousCount)=>previousCount+1)
//     },1000)
//     return()=>{
//       clearInterval(interval)
//     }

//   },[Count])
 

//   return (
//     <div>
  
//       <h1>Counter : --</h1> {Count}
//       <h2>Timer :{timer}</h2>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";

export default function Effect() {
  const [Count, setCount] = useState(0);
  const[timer,setTimer]=useState(null)

  useEffect(() => {
    const hours = Math.floor(Count / 3600);
    const minutes = Math.floor((Count % 3600) / 60);
    const seconds = (Count % 3600) % 60;

    setTimer(`${hours}:${minutes}:${seconds}`);

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [Count]);
    

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <h2> Counter:{Count}</h2>
    </div>
  );
}
