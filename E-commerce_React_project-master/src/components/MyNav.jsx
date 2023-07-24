import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../Css/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { Home } from './../Pages/Home';
import { useContext } from 'react';
import { CartContext } from '../App';
import { useState } from 'react';
export function MyNav() {
  const { cartCount,clearCartAndStorage } = useContext(CartContext); //count
  let navigate = useNavigate();
  let myuser;
  let username = localStorage.getItem('username')
  if(username){
    myuser=true;
  }
  else{
    myuser=false;

  }
  // let logout = () => {
  //   localStorage.clear('');
    
  // };
  return (
    <div>
      <Navbar className='nav' bg='dark' variant='dark'  expand='lg'>
      <Container>
        <Navbar.Brand ><img src="l.png" style={{width:"100px",height:"40px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav1 me-auto"style={{color:"white"}}>
          <NavLink className="nav-link" to="/home">Home</NavLink>   
            <NavLink className="nav-link" to="/AboutUs" >About Us</NavLink>
            <NavLink className="nav-link" to="/Products" >Products</NavLink>
      
             {myuser ? (<Nav.Link className='link1' to="#" style={{color:"white"}}> <i className="bi bi-person-fill" style={{color:"white"}}></i> {username} / </Nav.Link> ) : ( <NavLink className="nav-link link1" to="/login" style={{color:"white"}}>
            <i className="bi bi-person-fill" style={{color:"white"}}></i>Login / </NavLink>
         
        )}
            <NavLink className="nav-link link2" to="/home" onClick={clearCartAndStorage} >logout</NavLink>

            <Nav.Link className='link10' href="#"><i class="bi bi-cart3" style={{fontSize:"20px",color:"white",marginLeft:"5px"}}></i></Nav.Link>
           
              <span>{cartCount}</span>
                  
  <Nav.Link className='link10' href="#"><i class="bi bi-suit-heart-fill" style={{fontSize:"20px",color:"white",marginLeft:"5px"}}></i></Nav.Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>


  )
}
