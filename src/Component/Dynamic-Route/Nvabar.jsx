import React from 'react'
import {Link} from 'react-router-dom'

export default function Nvabar() {
  return (
    <div>
        <nav >
            <ul style={{display:"flex",listStyle:"none",backgroundColor:"red"}}>
               <li style={{marginRight:"5rem"}}><Link to="Home">Home </Link> </li>
               <li style={{marginRight:"5rem"}}><Link to="About">About </Link> </li>
               <li style={{marginRight:"5rem"}}><Link to="Contact">Contact</Link> </li>
            </ul>
        </nav>
    </div> 
  )
}
