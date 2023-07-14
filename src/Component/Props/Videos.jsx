import React from "react";

export default function Videos(props) {


  return (
    <div style={{padding:"20px", alignItems:"center"}}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6l8RWV8D-Yo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div  style={{textAlign:"center" }}>
       <h1 >{props.title}</h1>
       <h2>{props.views}</h2>
       <h3>{props.like}</h3>
       <h4>{props.subs}</h4>
    
       
      </div>
    </div>
  );
}
