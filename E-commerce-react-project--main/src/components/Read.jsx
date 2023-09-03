import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Read() {
  let navigate=useNavigate();
  function back() {
      navigate(`/Home`);}
  return (
    <div style={{width:"98vw",height:"95vh"}}>
       <img src="de.jpg" class="rounded float-end" alt="..."  style={{width:"50%", marginTop:"50px",marginLeft:"30px"}}/>
        <h1 style={{paddingTop:"100px",textAlign:"left",paddingLeft:"20px",paddingRight:"20px",letterSpacing:"1px",textTransform:"capitalize"}}> Some unique pieces can make big different and add elegent touch .
</h1>
        <p style={{textAlign:"left",paddingRight:"20px",paddingLeft:"20px"}}>Discover the leading design trends for 2023 and be inspired to create a space that 
        reflects your personality. From neutral colors to natural materials, this season's trends are designed 
        to elevate your existing  this season's trends are designed 
        to elevate your existing interior decor and take your home to the next level
        this season's trends are designed 
        to elevate your existing interior decor and take your home to the next level
        to elevate your existing interior decor and take your home to the next level
         interior decor and take your home to the next level
         reflects your personality. From neutral colors to natural materials, this season's trends are designed 
        to elevate your existing  this season's trends are designed 
        to elevate your existing interior decor and take your home to the next level
        this season's trends are designed 
        to elevate your existing interior decor and take your home to the next level
        to elevate your existing interior decor and take your home to the next level
         interior decor and take your home to the next level.</p>
        <button onClick={back} style={{width:"320px",height:"35px", backgroundColor:"black",color:"white",outlineColor:"black"}}>Back Home</button>

    </div>
  )
}
