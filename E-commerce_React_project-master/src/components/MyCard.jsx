import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../Css/card1.css'
import { NavLink } from 'react-router-dom';
export function MyCard() {
  return (
    <div className='contentcard m-5' style={{paddingLeft:'50px',paddingRight:'50px'}}>
       <CardGroup className='mt-5'>
      <Card style={{marginRight:"10px", border:"1px solid black "}}> 
    
        <Card.Img variant="top" src="10.jpg" style={{height:"80%"}} />
        <Card.Body>
          
          <Card.Text className='t1' style={{fontFamily:800,textAlign:"left",fontSize:"18px"}}>
              Some unique pieces can make big different and add elegent touch . 
        </Card.Text>
        <NavLink className="nav-link" to="/Read"><a href='#' style={{color:"black", textDecoration:"none",fontWeight:"bold"}}>Read More ... <i class="bi bi-arrow-right-circle-fill" style={{fontSize:"20px"}}></i></a></NavLink>
        </Card.Body>
        
      </Card >
      <Card style={{marginRight:"10px", border:"1px solid black",height:"600px"}}>
      
      <Card.Img variant="top" src="11.jpg" style={{height:"80%"}} />
        <Card.Body>
          <Card.Text className='t1' style={{fontFamily:800,textAlign:"left",fontSize:"18px"}}>
              Some unique pieces can make big different and add elegent touch .
        </Card.Text>
        <NavLink className="nav-link" to="/Read"><a href='#' style={{color:"black", textDecoration:"none",fontWeight:"bold"}}>Read More ... <i class="bi bi-arrow-right-circle-fill" style={{fontSize:"20px"}}></i></a></NavLink>
        </Card.Body>
        </Card>
        <Card style={{ border:"1px solid black",height:"600px"}}>
       
      <Card.Img variant="top" src="31.jpg" style={{height:"80%"}} />
        <Card.Body>
          <Card.Text className='t1' style={{fontFamily:800,textAlign:"left",fontSize:"18px"}}>
              Some unique pieces can make big different and add elegent touch .
        </Card.Text>
        <NavLink className="nav-link" to="/Read"><a href='#' style={{color:"black", textDecoration:"none",fontWeight:"bold"}}>Read More ... <i class="bi bi-arrow-right-circle-fill" style={{fontSize:"20px"}}></i></a></NavLink>
        </Card.Body>
        </Card>
    </CardGroup>
    </div>
  )
}
