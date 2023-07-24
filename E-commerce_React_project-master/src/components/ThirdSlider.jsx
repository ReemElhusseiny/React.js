import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Container from "react-bootstrap/Container";
import {cardData,cardData2, } from './productlist'; 
export default function ThirdSlider({id}) {
  
 
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
 
  return (
    
   <Container className='  d-flex justify-content-center ' style={{boxSizing:"border-box"}}>
     <div className=" w-100 sec  ">
      <div id={id} className="carousel slide  w-100" data-bs-ride="carousel" >
        
          <div className="carousel-inner w-100 " >
            <div className="carousel-item active w-100  ">
              <div className="mo d-flex w-100 ">
              {cardData.map((card, index) => (
        <Card  className="mx-3 "style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" style={{height:"275px"}}  src={card.src} />
          <Card.Body>
            <Card.Title>{card.text2}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            
          </Card.Body>
        </Card>))}
               </div>
            </div>
            <div className="carousel-item">
              <div className="mo d-flex ">
              {cardData2.map((card, index) => (
        <Card className="mx-3 " style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" style={{height:"275px"}} src={card.src} />
          <Card.Body>
            <Card.Title>{card.text2}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            
          </Card.Body>
        </Card>))}
              </div>
            </div>
        
           
          </div>    
          <button className="carousel-control-prev"      style={{left: "-100px"}}       type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon  text-bg-dark" style={{right: "-81px"}} aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button"  style={{right: "-100px"}}  data-bs-target={`#${id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon text-bg-dark" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
               
  </div></Container>


  );
}