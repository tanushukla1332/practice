import React from "react";

export default function Videos(props) {


  return (
    <div style={{padding:"20px", alignItems:"center",backgroundColor:"blue"}}>
      <iframe
        width="360"
        height="215"
        src="https://www.youtube.com/embed/6l8RWV8D-Yo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div  style={{textAlign:"center" ,margin:"20px" }}>
       <span> title:{props.title}</span>
       <p> views:{props.views}</p>
       <p> like:{props.like}</p>
       <span> subs:{props.subs}</span>
    
       
      </div>
    </div>
  );
}
