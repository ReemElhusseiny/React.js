import React from "react";
// import "./AboutUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { useState } from 'react';
export default function AboutUs() {
  const [feedbacks, setfeedbacks] = useState([]);
  const [newfeedback, setNewfeedback] = useState('');

  const handleInputChange = (event) => {
    setNewfeedback(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newfeedback.trim()) {
      setfeedbacks([...feedbacks, newfeedback]);
      setNewfeedback('');
    }
  };

  const handlefeedbackDelete = (index) => {
    const newfeedbacks = [...feedbacks];
    newfeedbacks.splice(index, 1);
    setfeedbacks(newfeedbacks);
  };

  function smoothScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="">
      <Container
        className="p-0"
        style={{ width: "1700px", position: "relative" }}
      >
        <Row className="my-5 d-flex flex-wrap  ">
          <Col className="col-xs-12 col-md-12 col-sm-12 col-lg-6  ">
            <Carousel className="my-4">
              <Carousel.Item>
                <img
                  className=" usimg d-block w-100"
                  src="https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="First slide"
                />
    
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=" usimg d-block w-100"
                  src="https://images.pexels.com/photos/271648/pexels-photo-271648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Second slide"
                />

                
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className=" h-50 col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className=" scrollable my-4">
              <h2 > BYANCA</h2>
              <p style={{ fontSize: "1.4rem"}}>
                name is a visual discovery engine for finding ideas like
                recipes, home and style inspiration, and more.<br />
                 With billions of Pins on Pinterest, you'll always find ideas to spark
                inspiration.<br />
                 When you discover Pins you love, save them to
                boards to keep your ideas organized and easy to find.<br />
                When you discover Pins you love, save them to
              </p>
            </div>
          </Col>
        </Row>
        <Row className="my-5 d-flex flex-wrap  ">
          <Col className=" h-50 col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <Container className=" m-5 ">
              <Row className="d-flex flex-wrap ">
                <Col className=" my-5 d-flex justify-content-start h-25 col-xs-12 col-sm-12 col-md-12 col-lg-12 my-3 ">
                  
                  <h2>Contact Us</h2>
                </Col>
                <Col className=" d-flex justify-content-start  my-2 h-25 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                  <a
                    title="call us"
                    href="tel:+201113852878"
                    style={{
                      textDecoration: "none ",
                      color: "black",
                      fontSize: "1.4rem",
                    }}
                  >
                     <i class="bi bi-telephone-outbound-fill mx-2" ></i> Call Us :
                    +201113852878
                  </a>
                </Col>
                <Col className="d-flex justify-content-start my-2 h-25 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                  <a
                    title="send mail"
                    style={{
                      textDecoration: "none ",
                      color: "black",
                      fontSize: "1.4rem",
                    }}
                    href=" mailto:maryam.moh198@gmail.com?subject=hi&body=maryam mohamed"
                  >
                    
                    <i className="bi bi-envelope-open-fill text-danger mx-2"></i>
                    Contact us by mail
                  </a>
                </Col>
                <Col className="d-flex justify-content-start my-2 h-25 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                  <a
                    title="whatsup"
                    style={{
                      textDecoration: "none ",
                      color: "black",
                      fontSize: "1.4rem",
                    }}
                    href="https://wa.me/+201113852878?text=hi i need help ..."
                  >
                    
                    <i class="bi bi-whatsapp text-success mx-2"></i>
                    send what's up masseage
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="  h-50 col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <img
              className="my-4  w-100"
              src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </Col>
        </Row>
        <Row className="my-5 d-flex flex-wrap  ">
          <Col className="  h-50 col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <img
              className=" usimg my-4  w-100"
              src="https://media.istockphoto.com/id/1312214761/photo/customer-satisfaction-survey-concept-businessman-using-computer-laptop-select-smiley-face.jpg?s=612x612&w=0&k=20&c=S4jLC9sf_upSLGHoqdlkEF9YknG_Oyf31-lcXFNC0xI="
              alt=""
            />
          </Col>
          <Col className="  h-50 col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <Row> <label htmlFor="" style={{fontSize:'20px'}} > <b>Share your feedback with us</b> </label>
            <br />
        
            

            <form className="my-3" onSubmit={handleFormSubmit}>
  <input  className="btn bg-light" type="text" value={newfeedback} onChange={handleInputChange} />
  <button  className="btn btn-outline-success" type="submit">Share</button>
</form>
<table >
 
  <thead>
   
  </thead>
   <div className="scrollable table ">
  <tbody  >
   
    {feedbacks.map((feedback, index) => (
      <tr className="btn btn-outline-secondary w-75 col-12 my-2"style={{minHeight:"100px" ,padding:"20px"}} key={index}>
       
       {feedback}
       
      </tr>
      
      

    ))}
   
  </tbody>
  </div>
</table>
            
</Row> 
          </Col>
        </Row>
      </Container>
      <a title="h1" href="#" className="toup " onclick="smoothScrollToTop()">
      <i className="arrow bi bi-arrow-up-circle-fill w-100" style={{ width: "100px", height: "100px" }}></i>
      </a>
    </div>
  );
}