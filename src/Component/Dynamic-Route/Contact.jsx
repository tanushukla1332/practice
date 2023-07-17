import React from 'react';
import { useParams } from 'react-router-dom';

export default function Contact() {
    const {name,Lname}=useParams()

  return (
    <div>
      This is the contact page
     <h1>User: {name} {Lname} : page </h1> 
    </div>
  );
}
