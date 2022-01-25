import "./postprofile.css"
import React from "react"
import { useState } from "react";
export default function Postprofile({details}){
    
            const[like,setLike]=useState("");
            const[isLiked,setisLiked]=useState(false)
            const Likes=()=>{
               
             setLike(isLiked?like-1:like+1)
             
             setisLiked(!isLiked)
             if(like=="0"){
                setLike("")
            } 
            }
   
    return(
        
        <div id="feed">
       
      
       
        <div>
           
            <img  src={details.image} alt="Card image cap" id="im1"/>
            <span>{details.name}</span><img src="https://webstockreview.net/images/twitter-verified-png.png" id="im2"/>
            <span className="text-muted">@{details.tag}.</span>
 
            <div className="card mx-auto">
  <h6 className="card-title">{details.description}</h6>
  <img className="card-img-top"src={details.postpic}/>
  <div className="card-body">
    <p className="card-text"></p>
  </div>
 </div>
            
            
           
        
        </div>
        
        <div id="icon">
       
        <i className="fa fa-comment-o " id="ipo" aria-hidden="true" ></i>
       
        <i className="fa fa-retweet "id="ipo" aria-hidden="true"></i>
        <i className="fa fa-heart-o  " id="ipol" aria-hidden="true" onClick={Likes}  >{like}</i>
        <i className="fa fa-share-square-o"id="ipo" aria-hidden="true"></i>
        
        </div>
        
 
        </div>
    )
}