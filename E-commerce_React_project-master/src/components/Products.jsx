
 import { CardsSlider } from './CardsSlider'
 import '../Css/products2.css'
 import { Container } from 'react-bootstrap'
 import {NavLink,navigate, useNavigate} from 'react-router-dom'
 import { React,useEffect } from 'react';

//  import { products } from './productlist';
export function Products() {
  
  let navigate=useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      navigate('/login');
    }
  }, []);
  return (
    <div>
      <Container className="section_container d-flex justify-content-center align-content-center" >
      <section className="section ">
        
          <div className="  " style={{ height: "75px", textalign: "center" }}>
            <h2 style={{textTransform:'uppercase'}}>Shine with your idea</h2>
          </div>
       <div
        className="para d-flex  justify-content-between "
        style={{ backgroundColor: "#F5F5F5" }} >
        
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
  <br></br>
    </div>
    {/* <div className="btn w-25"style={{width:'150px',height:'40px',backgroundColor: "#f7f7f7" }}> */}
    {/* </div> */}
    
    </header>
    {/*  */}
    <div className="contianer  sider1  d-flex flex-wrap ">
        <div
          className="border-bottom border-2 border-secondary w-100 col-12"
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1 d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>sales</b>
              
            </p>
            
            
            </div>
           
          <img
            src=" https://i.pinimg.com/564x/28/fc/86/28fc867e84030e66493a1ab375bf582c.jpg"
            alt=""
            style={{ width: " 200px", height: "1000px" }} className='my-3'
          />
          
        </div>

       

        <div
          className="border-bottom border-2 border-secondary w-100 col-12 "
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1  d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>more about us </b>
            </p>
          </div>
          <div className="d-flex ">
            <p className="text-secondary">
            Delicious, healthy and sustainable food for the many
US, we believe that making healthier and more sustainable food the easy, affordable, 
and delicious choice is a vital part of creating a better everyday life for the many people.
Good for you and the planet
Our ambition is to become people and planet positive, and to inspire and enable the many people to live a better everyday life within the boundaries of the planet. With our food range we offer our customers
 healthier and more sustainable food options that can help reduce their climate footprint.
            </p>
          </div>
        </div>
      </div>
   
          <div className="cards">
           
            <CardsSlider></CardsSlider>
          </div>

           {/*  */}
        </section> 
        </Container>
    </div>
  )
}
