import React,{useState} from "react";

export default function Crud() {
    const[activity,setActivity]=useState()
    const[list,setList]=useState([])


    function handleAdd(){
        setList([...list,activity])
        setActivity("")

    }

  return (
    <div className="Container">
        <h1>Todo app</h1>
        {list.map((item,i)=>{
            return(
                <div key={i}>
                    <ul>
                        <li>{item}</li>
                    </ul>
                    </div>
            )
        })}
      <input type="text" placeholder="enter your activity" value={activity} onChange={(e)=>setActivity(e.target.value)} />

      <button onClick={handleAdd}>➕</button>

    </div>
  );
}
