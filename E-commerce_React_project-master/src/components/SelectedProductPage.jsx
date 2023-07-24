// import React, { useState, useEffect } from "react";
// import { useParams }from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import { Rating } from "@mui/material";
// import ThirdSlider from './ThirdSlider'
// import axios from "axios";

// export function SelectedProductPage() {

//   /////////////////////get///////////////

  // let [products, setProducts] = useState([]);
  //   let getAllProduct = async () => {
  //       try {
  //           let response = await axios.get("http://localhost:3005/products");
  //           setProducts(response.data);
  //       } catch (error) {
  //           console.log(error);
  //       }
  //   };
  //   useEffect(() => {
  //       getAllProduct();
  //   }, []);

//   /////////////////////////////////
//   const [childHeight, setChildHeight] = useState(0);

//   useEffect(() => {
//     const child1 = document.getElementById("child1");
//     const child1Height = child1.offsetHeight;
//     setChildHeight(child1Height);
//   }, []);

//   const [value, setValue] = useState(0);
  
 
  // const { id } = useParams();
//   console.log(id);
//   console.log("Products:", products);

  //  const selected = products.find((product) => product.id === parseInt(id));

  //  return (

//     <Container className="viewcontainer justify-content-center " style={{position: "relative"
//       ,top: "90px"}}>
//      <div className="w-100 m-3" style={{textAlign:"center"}}>    
     
     
     
//      <p> Let's figure out!</p>
//      </div>
//     <Container id="parent" className=" justify-content-center" >
//       <Row  className=" "style={{ height: childHeight }}>
//       <Col id="child1" className="d-flex flex-wrap col-lg-6 " style={{ width: "630px", padding: "0px"}}>
  //  {selected && ( // Check if selected object exists before rendering images
  //    <>
  //     <img src={selected.img1}
  //       style={{ width: "307px",height:"433px" }}
  //       className="d-block mx-1 my-1 "
  //     />
  //     <img src={selected.img2}
  //       style={{ width: "307px",height:"433px" }}
  //       className="d-block mx-1 my-1 "
  //     />
  //     <img src={selected.img3}
  //       style={{ width: "307px",height:"433px" }}
  //       className="d-block mx-1 my-1 "
  //     />
  //    </>
  // )}
// </Col>
//         <Col id="child2"className=" d-flex flex-wrap col-lg-6" style={{ width: "650px",overflow: "auto" ,boxSizing:"content-box" ,height:childHeight}}>
//           <div className=" d-flex flex-wrap  ">

// <Row  className=" d-flex flex-wrap  w-100 mx-1 " style={{ width: "625px" }}>
//  <div className=" w-100  d-flex justify-content-between  my-1" >
 
          
//   <div className=" my-1  w-50 " >
//     <p style={{textAlign:"left"  }}>BYANCA </p></div>
//  <div className=" my-1 mx-2 " style={{  }}> <a className="text-success">follow BYANCA</a> <i className="bi bi-share mx-1"></i> </div>
//  </div>
//  <div className="my-1 w-100">
  // {selected && selected.productname && ( 
  //   <p style={{ textAlign: "left", fontSize: "25px" }}>{selected.productname}</p>
  // )}
// </div>   
    
// <div className="w-100 my-1 d-flex" style={{ fontSize: "18px" }}>
//   {selected && selected.price && ( // Check if selected object and price exist before rendering
//     <>
//       <s className="text-secondary mx-2">{selected.price}</s>
//       <b className="text-danger mx-2">{`8000 USK`}</b>
//     </>
//   )}
// </div></Row>
// {/*  */}
// <Row className=" d-flex flex-wrap  w-100 mx-1  " style={{ width: "625px",height:"170px" }}>
//  <div className="d-flex justify-content-between "style={{height:"40px"}}>
//   <div><b style={{fontSize:"25px"}}>colors</b></div>
//   <div style={{fontSize:"15px"}} className="text-success">show colors chart</div>
//  </div>
//  <div className=" w-100   my-1" >
//   <div style={{textAlign:"left"}}>
//   <button style={{ cursor: "pointer", borderRadius:"2px", fontSize:"17px", }}className="btn text-success bg-light  mx-1 my-2">FULL COLOR </button>
//   <button style={{ cursor: "pointer", borderRadius:"2px", fontSize:"17px", }}className="btn text-success bg-light  mx-1 my-2">PARTIAL </button>
//   <button style={{ cursor: "pointer", borderRadius:"2px", fontSize:"17px", }}className="btn text-success bg-light  mx-1 my-2"> MIXED</button>
//   </div>
  
//  <div className=" my-1  justify-content-start "style={{textAlign:"left"}}>   
//  <i className={`bi bi-circle-fill text  mx-2`}> </i>
//  </div>


//  </div>
//  <div className=" w-100" >   </div>
// </Row>
// {/*  */}
// <Row className=" d-flex flex-wrap w-100 w-100 mx-1 " style={{height:"200px"}} >
// <div className=" my-1 w-50  d-md-grid " >


//     <span className=" my-2 h-50 " style={{textAlign:"center"}}>
//     <button className="btn text-light my-3 h-100 w-100" style={{backgroundColor:"#7DCEA0"}}><b>Add To Bag
//       </b>
//     </button>
//     </span>
//     <span 
//     className=""style={{height:"100px"}}>
//   <img src="https://a.namshicdn.com/web-desktop/04712760e51a72afe9cc.svg" alt="" />
//   <div>100% Genuine</div>
//   </span > </div>
   
   
//   <div className=" my-1 w-50 d-md-grid " >


// <span className=" my-2 h-50 " style={{textAlign:"center"}}>
// <button className="btn bg-light my-3  text-success h-100 w-100">Add to wish list </button>
// </span>
// <span 
// className=""style={{height:"100px"}}>
// <img src=" https://a.namshicdn.com/web-desktop/2be1a1eca215dfed8e18.svg " alt="" />
// <div>Free Shipping</div>
// </span > </div>
 
// </Row>
// {/**/}
// <Row className=" d-flex flex-wrap mx-1 " style={{ width: "620px",borderBottom:" 1px solid gray" }}>
//   <div style={{borderBottom:" 1px solid gray",textAlign:"left"}}>Description</div>
//   <div className="my-2">
//   First class comfort
//   <br/>
//   Nothing feels better than relaxing into a stylish wing chair and putting your feet up on a footstool – especially one with secret, practical storage inside. What you choose to put in it? Well, that’s up to you...

//   </div >
//   <ul className="my-1 mx-2 justify-content-start" style={{ textAlign: "left" }}>
  
//     <li >Press stud front placket for versatile styling options  </li>
//     <li >  Mini length A-line fit  </li>
//     <li >  Embroidered adidas Originals signature branding </li>
//     <li >  Each item sold separately </li>
//     <li > Smooth and comfortable faux leather fabric  </li>
//     <li > Concealed zipper closure to waistband  </li>
//     <li > Casual with edgy edits, this skirt adds up for an effortlessly comfortable fit.  </li>

// </ul>


// </Row>
// {/*  */}
// <Row className=" d-flex flex-wrap mx-1  " style={{ width: "620px" }}>
// <div className="my-4" style={{borderBottom:" 1px solid gray ",textAlign:"left"}}>Info & Care</div>
// <div className="d-flex my-2" >
//   <div style={{textAlign:"left"}}> SKU
//     <br/>style
//     <br/> arrivals
//     <br/> arrive
//     <br/>supplier style No
//     <br/>washing instructions
//    <br/> product material
//     </div>
  
//   <div  className="mx-4"style={{textAlign:"left"}}>
//     14448ATNCRXP
//   <br/>Elegant
//  <br/>new
//  <br/>2-3 Days
//  <br/>II6100
//  <br/>Wash according to instructions on care label
// <br/>100% pure 
//   </div>
// </div>

//  </Row>
// {/*  */}
// <Row className=" d-flex flex-wrap mx-1  " style={{ width: "620px" }}>
// <div className="d-flex w-25 ">
// <a class="brand-link follow-brand__logo" href="/adidas_originals/" data-brand-name="adidas Originals" data-brand-url="/adidas_originals/">
// <img  style={{width:"70px"}} src="https://yt3.googleusercontent.com/AUIS9u3yNK7OukQvvLd5fyAsZ0RSnFsrggKGrIdGUJ-4NKya29zVXEDrgVGjm2L0AAO-Aodhbw=s900-c-k-c0x00ffffff-no-rj" data-nm-invalid-image-remover=""/></a>
// </div>
// <div className=" w-75">
// {/* <div className=" m-3 w-75" style={{textAlign:"left"}}>{selected.brand}</div> */}
// <div className="d-flex  w-75"style={{}}>
//   <a className=" w-50" href=""style={{ color: "#7DCEA0" }}>Follow BYANCA</a>
//   <div className="  text-secondary">|</div>
//   <a className="w-50"style={{ color: "#7DCEA0" }} href="">See All Products</a>
// </div>

// </div>
// <div>Follow this us to stay updated on exciting launches, new collections & more!</div>

// </Row>
// </div>

         
         
//         </Col>
//       </Row>
//       </Container>
      
//       <section className=" d-flex justify-content-between  my-5 mx-4" style={{height:"80px" ,width:"1199px",padding:"10px" ,border:"1px solid gray"}} >
//         <div className="w-25 mx-4"><p className="m-1">Do you own or have used the product?</p>
//         <p>Tell your opinion by assigning a rating   

// </p></div>
//         <div className="w-25"> 
//           <Rating
//           className="m-4"
//             name="simple-controlled"
//             value={value}
//             onChange={(event, newValue) => {
//               setValue(newValue);
//             }}
//           />
        

// </div>
//         <div className="w-25">  <span  className="btn my-3 btn-outline-success w-75"> 
           
//         Rate this product </span></div>

//       </section>
 
//       <section className=" my-5 h-25   "style={{width:"1200px"}}  >
//         <div className=" w-100 my-3  " style={{textAlign:"left"}}><p>Frequently Bought Together</p></div>
//         <div ><ThirdSlider id="first"></ThirdSlider></div>
//       </section>
      
    

       
//     </Container>
    
//    )
// }

//  export default SelectedProductPage;


