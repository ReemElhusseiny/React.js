import React from 'react'

export function MyJpg() {
  return (
    <div className='mycontainer rounded' style={{width:"100vw" ,marginTop:"30px",textAlign:'center',paddingLeft:'50px',paddingRight:'50px'}}>
       <h1 style={{textShadow: "2px 2px 10px #884A39" , color:"#884A39",paddingTop:"20px",textAlign:'center'}}>The power of Accesories</h1> 
        <img src="decor.gif" class="img-fluid rounded" alt="Responsive image" style={{marginTop:"20px",width:"95%",height:"70vh"}}/>
      
      {/* <img src="decor.gif" class="rounded float-left" alt="Responsive image" style={{marginTop:"20px",width:"30%",height:"50vh"}}></img>
      <img src="decor.gif" class="rounded float-right" alt="Responsive image" style={{marginTop:"20px",width:"30%",height:"50vh"}}></img>
       */}
<img src="f.gif" alt="..." class="rounded float-left" style={{marginTop:"20px",width:"30%", marginRight:"3%"}}></img>
<img src="g.gif" alt="..." class="rounded float-right"style={{marginTop:"20px",width:"30%",marginRight:"3%"}}></img>
<img src="i.gif" alt="..." class="rounded float-center"style={{marginTop:"20px",width:"30%"}}></img>

    </div>
  )
}
