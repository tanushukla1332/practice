import React ,{useState} from "react";
import Video from "./Videos";
import Button from "./Button";
import videoDB from "./VideoDB";

export default function Props() {
  const [videos,setVideo]=useState(videoDB);

  
  return (
    <div>
      <button onClick={()=>{
        setVideo( [ ...videos, { id: videos.length+1,
          title: "frontEnd devloper",
          views: "5.11k",
         like: "2.89",
         subscription: "10.56M",
        }])
      }}>Add video </button>
      <div
      style={{alignItems: "center" ,backgroundColor:"blue"}}
    >
      {videos.map((video) => (
        <Video
          title={video.title}
          views={video.views}
          like={video.like}
          subs={video.subscription}
        ></Video>
      ))}
    </div>
    <Button name="Play" message="click messg" onClick={()=>console.log("play button on")}/>
    <Button  name="pause" message="click again" onClick={()=>alert("pause video")}/> 
    {/* this technique is called Custome Event  */}
    
    </div>
    
  );
}
