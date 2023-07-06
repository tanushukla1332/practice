import React, { useState } from 'react'

export default function Use() {
    const[name,setName]=useState()
    const[number,setNumber]=useState()
    const[email,setEmail]=useState()

    const data={
        name:name,
        number:number,
        email:email,
    }

    function SubmitData(){
        localStorage.setItem('userData', JSON.stringify(data) )
        setName("")
        setEmail("")
        setNumber("")
    }
   

  return (
    <div style={{backgroundColor :"red" ,padding :"100px"}}>
        <h3>SigIn form</h3>

        <input type="text"  placeholder='enter user name' value={name} onChange={(e)=>setName(e.target.value)}/> <br />
        <br /><br />
        <input type="number"  placeholder='enter user contact number' value={number} onChange={(e)=>setNumber(e.target.value)}/> <br /><br /><br />
        <input type="email" placeholder='enter user email'  value={email} onChange={(e)=>setEmail(e.target.value)}/> <br /><br /><br />

        <button type="submit" onClick={SubmitData}> submit</button>

    </div>
    
  )
}
