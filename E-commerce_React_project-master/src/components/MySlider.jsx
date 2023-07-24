import React from 'react'
import '../Css/Slider.css'
export  function MySlider() {
  return (
    <div>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="8.jpg" class="img1 d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 >Boho Style</h5>
        <p>Most unique accessoriers for this style</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="7.jpg" class="img1 d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Simple style</h5>
        <p>Accessoriers to make it elegant and simple</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="4.jpg" class="img1 d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Comfort style</h5>
        <p>Accessoriers to make it comfort and perfect</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}
