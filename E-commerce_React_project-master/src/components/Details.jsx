import React from 'react'
import axios from "axios";
import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { Card,Button,Col } from 'react-bootstrap';

export  function Details() {
    let { id } = useParams();
    let navigate = useNavigate();
    let [products, setProducts] = useState([]);
    let getAllProduct = async () => {
      try {
          let response = await axios.get("http://localhost:3005/products");
          setProducts(response.data);
      } catch (error) {
          console.log(error);
      }
  };
  useEffect(() => {
      getAllProduct();
  }, []);
   const selected = products.find((product) => product.id === parseInt(id));
   let goToProsucts = () => {
    navigate("/products");
}
   return (
    
  <div>
    <div style={{marginTop:'50px',fontSize:'25px'}}><p>let's figure out</p></div>
      <div
        className="nada d-flex  "
        style={{ width: "1300px", marginLeft: "100px", marginTop: "60px" }}
      >
        <div
          id="child1"
          className="d1 m-3 d-flex flex-wrap"
          style={{ height: "882px", width: "996px" }}
        >
           { selected && (
                 <>

          <img
            style={{ width: "307px", height: "433px" }}
            className="d-block mx-1 my-1 "
            src={selected.img1}
          />
          <img
            style={{ width: "307px", height: "433px" }}
            className="d-block mx-1 my-1 "
            src={selected.img2}
          />
          <img
            style={{ width: "307px", height: "433px" }}
            className="d-block mx-1 my-1 "
            src={selected.img3}
          />
           </>
           )}

        </div>
        <div
        
          className="d2 m-3 d-grid  "
          style={{ width: "945px", height: "882px", overflow: "auto" }}
        >
          <div className="  w-100" >

            <div className=" w-100  justify-content-between  my-3" style={{height:"100px"}}>
               <div className=" my-2 w-50 " >
                   <p style={{textAlign:"left"  }}>BYANCA </p>
                   </div>
                   {selected && selected.productname && ( 
             <div className=" my-3  w-100" ><p  style={{textAlign:"left"  ,fontSize:"25px"  }}>{selected.productname}</p></div>
             
                   )}
   
           {selected && selected.price && (
            <div className=" w-100 my-3  d-flex "style={{fontSize:"18px"}}> <s className="text-secondary mx-2">3000 USK </s><b className="text-danger mx-2 ">{selected.price} USK</b></div> 
            )}

            </div>

            <div className="" style={{textAlign:"left",position:"relative",top:"25px"}}>
  <button style={{ cursor: "pointer", borderRadius:"2px", fontSize:"17px", }}className="btn text-success bg-light  mx-1 my-2">FULL COLOR </button>
  <button style={{ cursor: "pointer", borderRadius:"2px", fontSize:"17px", }}className="btn text-success bg-light  mx-1 my-2">PARTIAL </button>
  <button style={{ cursor: "pointer", borderRadius:"2px", fontSize:"17px", }}className="btn text-success bg-light  mx-1 my-2"> MIXED</button>

  </div>
         
          </div>
          
          <div className=" w-100">
            <div>
              <div className=" my-1 w-50  d-md-grid ">
               
                <span
                  className=" my-2 h-50   "
                  style={{ textAlign: "center ", width: "500px" }}
                >
                  <button onClick={goToProsucts}
                    className="btn text-dark my-3 h-100 w-75"
                    style={{ backgroundColor: "#7DCEA0" }}
                  >
                    <b>BACK TO PRODUCTS</b>
                  </button>
                </span>


                <div className=" my-1 w-50  d-md-flex">
                  <span
                    className=""
                    style={{ height: "100px", marginLeft: "130px" }}
                  >
                    <img
                      src=" https://a.namshicdn.com/web-desktop/2be1a1eca215dfed8e18.svg "
                      alt=""
                    />
                    <div>Free Shipping</div>
                  </span>
                  <span
                    className=""
                    style={{ height: "100px", marginLeft: "160px" }}
                  >
                    <img
                      src="https://a.namshicdn.com/web-desktop/04712760e51a72afe9cc.svg"
                      alt=""
                    />
                    <div>100% Genuine</div>
                  </span>{" "}
                </div>
              </div>
              <div
                className=" d-flex flex-wrap mx-1 "
                style={{ width: "500px", borderBottom: " 1px solid gray" }}
              >
                <div
                  style={{ borderBottom: " 1px solid gray", textAlign: "left" }}
                >
                  Description
                </div>
                <div className="my-2">
                  First class comfort
                  <br />
                  Nothing feels better than relaxing into a stylish wing chair
                  and putting your feet up on a footstool – especially one with
                  secret, practical storage inside. What you choose to put in
                  it? Well, that’s up to you...
                </div>
                <ul
                  className="my-1 mx-2 justify-content-start"
                  style={{ textAlign: "left" }}
                >
                  <li>
                    Press stud front placket for versatile styling options{" "}
                  </li>
                  <li> Mini length A-line fit </li>
                  <li> Embroidered adidas Originals signature branding </li>
                  <li> Each item sold separately </li>
                  <li> Smooth and comfortable faux leather fabric </li>
                  <li> Concealed zipper closure to waistband </li>
                  <li>
                    {" "}
                    Casual with edgy edits, this skirt adds up for an
                    effortlessly comfortable fit.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="my-4"
              style={{ borderBottom: " 1px solid gray ", textAlign: "left" }}
            >
              Info & Care
            </div>
            <div className="d-flex my-2">
              <div style={{ textAlign: "left" }}>
                {" "}
                SKU
                <br />
                style
                <br /> arrivals
                <br /> arrive
                <br />
                supplier style No
                <br />
                washing instructions
                <br /> product material
              </div>

              <div className="mx-4" style={{ textAlign: "left" }}>
                14448ATNCRXP
                <br />
                Elegant
                <br />
                new
                <br />
                2-3 Days
                <br />
                II6100
                <br />
                Wash according to instructions on care label
                <br />
                100% pure
              </div>
            </div>
            <div className="d-flex w-25 ">
              <a
                class="brand-link follow-brand__logo"
                href="/adidas_originals/"
                data-brand-name="adidas Originals"
                data-brand-url="/adidas_originals/"
              >
                <img
                  style={{ width: "70px" }}
                  src="https://yt3.googleusercontent.com/AUIS9u3yNK7OukQvvLd5fyAsZ0RSnFsrggKGrIdGUJ-4NKya29zVXEDrgVGjm2L0AAO-Aodhbw=s900-c-k-c0x00ffffff-no-rj"
                  data-nm-invalid-image-remover=""
                />
              </a>
            </div>
            <div className=" w-75">
              <div className=" m-3 w-75" style={{ textAlign: "left" }}>
                BYANSA
              </div>
              <div className="d-flex  w-75" style={{}}>
                <a className=" w-50" href="" style={{ color: "#7DCEA0" }}>
                  Follow BYANCA
                </a>
                <div className="  text-secondary">|</div>
                <a className="w-50" style={{ color: "#7DCEA0" }} href="">
                  See All Products
                </a>
              </div>
            </div>
            <div>
              Follow this us to stay updated on exciting launches, new
              collections & more!
            </div>
          </div> 
        </div>
      </div>
    </div>
///////////////////////////////////////////////////////////////////////////////


  );
   }