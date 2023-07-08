import React, { useRef ,useEffect} from 'react'
  export default function RefExample() {
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
    console.log(count.current)
  },[count.current]);
 
  return <div>{count.current}</div>;
}

// export default function Ref() {
//     const[data,setData]=useState("")

//     const count=useRef(0)
//     function handleAdd(){
//         count.current +=1;
//         console.log(count.current)

//     }
//     function handleMinus(){
//         count.current -=1;
//         console.log(count.current)
//     }
//   return (
//     <div>
//         <h1>UseRef practice Counter</h1>
//         <button onClick={handleAdd}> Add</button>
//         <button onClick={handleMinus}>minus</button>

//     </div>
//   )
// }

