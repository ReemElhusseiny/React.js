import React from 'react'
import '../Css/Slider.css'
import Carousel from 'react-bootstrap/Carousel';
export  function MySlider() {
  return (
    <div>
   <Carousel>
      <Carousel.Item>
      <img src="8.jpg" class="img1 d-block w-100" alt="..."/>
        <Carousel.Caption>
        <h5 >Boho Style</h5>
        <p>Most unique accessoriers for this style</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="7.jpg" class="img1 d-block w-100" alt="..."/>
        <Carousel.Caption>
        <h5>Simple style</h5>
        <p>Accessoriers to make it elegant and simple</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="4.jpg" class="img1 d-block w-100" alt="..."/>
        <Carousel.Caption>
        <h5>Comfort style</h5>
        <p>Accessoriers to make it comfort and perfect</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
</div> 
  )
}
