import React from "react";
import Videos from "./Videos";
import Button from "./Button";

export default function props() {
  let arr = [
    {
      title: "react js tutorials",
      views: "1ook",
      like: "2.5",
      subscription: "5milion",
    },
    {
      title: "frontEnd devloper",
      views: "5.11k",
      like: "2.89",
      subscription: "10.56M",
    },
    {
      title: "JavaScript devloper",
      views: "10.11k",
      like: "12.89",
      subscription: "10M",
    },
  ];
  return (
    <div>
      <div
      style={{ display: "flex", alignItems: "center" ,backgroundColor:"blue"}}
    >
      {arr.map((video) => (
        <Videos
          title={video.title}
          views={video.views}
          like={video.like}
          subs={video.subscription}
        ></Videos>
      ))}
    </div>
    <Button name="Play" message="click messg" onClick={()=>console.log("play button on")}/>
    <Button  name="pause" message="click again" onClick={()=>alert("pause video")}/> 
    {/* this technique is called Custome Event  */}
    
    </div>
    
  );
}
