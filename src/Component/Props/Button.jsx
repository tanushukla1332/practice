import React from 'react'

export default function Button({message,name,onClick}) {
    function handleClick(){
        onClick()
    }
  return (
    <div>
        <button onClick={handleClick}>{name}</button>
    </div>
  )
}
