
import React from 'react'
import "../Css/products2.css"
import { Container } from 'react-bootstrap'
 import { CardsSlider } from './CardsSlider'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer } from './Footer';

export  function Products() {
    let navigate=useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      navigate('/login');
    }
  }, []);
  return (
   <div className="pro">
      <Container className="section_container  d-flex justify-content-center align-content-center" >
      <section className="section1 d-flex flex-wrap ">
       <div
        className="para d-flex  justify-content-between "
        style={{ backgroundColor: "#F5F5F5" ,left:"200px",position:"relative" }} >
        
        <div className=" w-50 p-4">
          <h4 className="d-flex">Social impact</h4>
          <p style={{ color: "gray", fontSize: "12px", textAlign: "left" }}>
          We want to help build a society that’s fairer and more equal.
          <br /> To do this we will put people first and grow our business in an inclusive way.<br /> 
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/5849392/pexels-photo-5849392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            style={{ width: " 330px", height: "180px" }}
          />
        </div>
      </div>

      <header className=' second  'style={{ display: 'flex', justifyContent: 'space-between' }} >
    <div className='  w-75'>
    <div  style={{ display: 'flex' }}>
  <a className="btn  mx-2 d-flex"  style={{backgroundColor: "#f7f7f7",  borderRadius: "26px", border:"1.5px solid #f7f7f7"}} href="#" role="button">
   Kitchen
  </a>
  <a className="btn  mx-2 d-flex" style={{backgroundColor: "#f7f7f7", borderRadius: "26px", border:"1.5px solid #f7f7f7"}} href="#" role="button">
   Bath Room
  </a>
  <a className="btn  mx-2" style={{backgroundColor: "#f7f7f7", borderRadius: "26px", border:"1.5px solid #f7f7f7"}}href="#" role="button">
    Resiption
      </a>
  <a className="btn  mx-2" style={{backgroundColor: "#f7f7f7", borderRadius: "26px", border:"1.5px solid #f7f7f7"}} href="#" role="button">
    Living rooms
  </a>
  <a className="btn  mx-2"  style={{backgroundColor: "#f7f7f7", borderRadius: "26px", border:"1.5px solid #f7f7f7"}} href="#" role="button">
   Bed Rooms
  </a>
</div>
  <div className='bg- m-0' style={{ display: 'flex', justifyContent: 'space-between' }}>
</div>
    </div>
    
    </header>
  <div className="cards">
           <CardsSlider></CardsSlider>
    </div>
    <div className='sale'>
      <p ><b>Sales</b></p>
      <img 
            src=" https://i.pinimg.com/564x/28/fc/86/28fc867e84030e66493a1ab375bf582c.jpg"
            alt=""
            style={{ width: " 200px", height: "1000px" }} className='my-3'
          />
    
    </div>
   
   
      
    </section> 
        </Container>
        </div>
       
         
       
 
  )
}
 