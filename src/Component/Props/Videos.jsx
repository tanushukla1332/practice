import React from "react";

export default function Videos(props) {
  console.log(props)

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6l8RWV8D-Yo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div style={{backgroundColor:"red" ,height:"200px" ,width:"300px" }}>
       <h1 >{props.title}</h1>
       <h2>{props.views}</h2>
       <h3>{props.like}</h3>
       <h4>{props.subscription}</h4>
    
       
      </div>
    </div>
  );
}
