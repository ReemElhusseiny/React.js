import React, { useState,useContext,useEffect } from 'react';
import '../Css/slider2.css'
import Carousel from 'react-bootstrap/Carousel';
import { Card,Button, Row, Col } from 'react-bootstrap';
import { useNavigate,NavLink } from 'react-router-dom';
import axios from "axios";
import { CartContext } from '../App';

export function CardsSlider() {

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
    
// /////////////////////////////////////////////////////////////////////get product////////////////////////////////
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

    ////////////////////////admin///////////////////////////////
     // get id for admin
  let isAdmin;
  let userId = localStorage.getItem('user_id')
  if(userId==1){
   isAdmin=true;
  }
  else{
    isAdmin=false;

  }
        let deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:3005/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
            // navigate('/products');
        } catch (error) {
            console.log(error);
        }
    };
/////////////////////////quantity/////////////////////////////////////
      let decreaseQuantity = async (productId) => {
        addToCart();
        let updatedProducts = products.map((product) => {
            if (product.id === productId && product.quantity > 0) {
                return { ...product, quantity: product.quantity - 1 };
            } else if (product.id === productId && product.quantity === 0) {
                return { ...product, quantity: product.quantity = "Not Avaliable" };
            } else if (product.id === productId && product.quantity === 1) {
                return { ...product, quantity: product.quantity = " Avaliable the last one" };
            } else {
                return product;
            }
        });
        setProducts(updatedProducts);
        try {
            await axios.put(`http://localhost:3005/products/${productId}`, { quantity: updatedProducts.find(product => product.id === productId).quantity });
        } catch (error) {
            console.log(error)
        }
    };
///////////////////////////////////////////end of func/////////////////////////////////////
return (
  <div>
    {isAdmin &&<NavLink  to={`/Products/0/edit`}><button  style={{width:'150px',height:'40px',borderRadius: "26px", backgroundColor:"black",border:"1.5px solid #f7f7f7",marginLeft:'800px',color:'white'}}>Add new product</button></NavLink>}
    
  <div className='container d-flex'>
      {products.map((product) => (
        <div className="card my-1" key={product.id} >
         <div className="carousel-wrapper">
         <div className="FavoriteBorderOutlinedIcon d-flex flex-column custom-style">
              <i className="bi bi-heart"></i>
            </div>  
            
            <Carousel controls={false}>
                <Carousel.Item style={{height:"497px"}}>
                <img className="d-block h-100 w-100" src={product.img1} />
                  <div className="caption position-absolute bottom-0 w-100 p-3">
                    <p className='mb-0'>Other colors</p> 
                    <div className="d-flex justify-content-center align-content-center gap-1">

                   
                        <i  className="bi bi-circle-fill text-danger" ></i>
                        <i  className="bi bi-circle-fill text-dark" ></i>
                        <i  className="bi bi-circle-fill text-primary" ></i>
                        <i  className="bi bi-circle-fill text-light" ></i>
                        <i  className="bi bi-circle-fill text-warning" ></i>
                     
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item style={{height:"497px"}}>
                <img className="d-block h-100 w-100" src={product.img2} />
                  <div className="caption position-absolute bottom-0 w-100 p-3">
                    <p className='mb-0'>Other colors</p> 
                    <div className="d-flex justify-content-center align-content-center gap-1">

                   
                        <i  className="bi bi-circle-fill text-danger" ></i>
                        <i  className="bi bi-circle-fill text-dark" ></i>
                        <i  className="bi bi-circle-fill text-primary" ></i>
                        <i  className="bi bi-circle-fill text-light" ></i>
                        <i  className="bi bi-circle-fill text-warning" ></i>
                     
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item style={{height:"497px"}}>
                <img className="d-block h-100 w-100" src={product.img3} />
                  <div className="caption position-absolute bottom-0 w-100 p-3">
                    <p className='mb-0'>Other colors</p> 
                    <div className="d-flex justify-content-center align-content-center gap-1">

                   
                        <i  className="bi bi-circle-fill text-danger" ></i>
                        <i  className="bi bi-circle-fill text-dark" ></i>
                        <i  className="bi bi-circle-fill text-primary" ></i>
                        <i  className="bi bi-circle-fill text-light" ></i>
                        <i  className="bi bi-circle-fill text-warning" ></i>
                     
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>

              </div>
            <div className="card-body my-3 d-flex flex-column align-items-center"style={{fontSize:"15px"}}>
                <Card.Title className='mb-0'>{product.productname}</Card.Title>
                <Card.Text className='mb-0'>$ {product.price}</Card.Text>
                <Card.Text >
                  <p>
                    {product.quantity === 0 ? "Not Available" : product.quantity === 1 ? "Available the last one" : `Quantity: ${product.quantity}`}
                  </p>
                </Card.Text>
                <Button variant="dark" onClick={() => decreaseQuantity(product.id)} disabled={product.quantity === 0}>
                  {product.quantity === 0 ? "Sold out" : "Add To Cart"}
                </Button>
                <Col>
                {isAdmin && <NavLink  to={`/Products/${product.id}/edit`}><i  className='fs-4 text-dark mx-1 bi bi-pencil-square'></i></NavLink>}
    
                {isAdmin && <i className='fs-4 text-danger mx-1 bi bi-trash3-fill' onClick={() => deleteProduct(product.id)}></i>}
                 <NavLink variant="dark" to={`/Details/${product.id}`}><i className='fs-4 text-dark mx-1 bi bi-eye-fill'></i></NavLink>
                 </Col>
          </div>
        </div>
      ))}
      
    </div>
    </div>
);
      }