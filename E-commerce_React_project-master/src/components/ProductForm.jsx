// import React, { useState, useRef } from 'react';
// import { useNavigate, useParams, useHistory } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';

// export function ProductForm() {
//         let navigate = useNavigate()
//         let [Provalue, setProvalue] = useState({
//             productName: "",
//             price: "",
//             quantity: "",
//         })
//         let { id } = useParams();
//         let formOperation = (e) => {
//             e.preventDefault();
//             console.log("submit")
//             console.log(Provalue);
//             // connect to api to add and edit 
//             axios.post("http://localhost:3005/products", Provalue).then((response) => {
//                 navigate("/products")
//             })
//         }
//         let OperationHandler = (e) => {
//             setProvalue({
//                 ...Provalue,
//                 [e.target.name]: e.target.value,
//             })
//         }
//         return <div className="container mt-5 alert alert-secondary">
//             <Form onSubmit={formOperation}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Product Name</Form.Label>
//                     <Form.Control onChange={OperationHandler} name="productName" type="text" placeholder="Enter Product Name" />
//                 </Form.Group>
    
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Price</Form.Label>
//                     <Form.Control onChange={OperationHandler} name="price" type="number" placeholder="Enter Product price" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Quantity</Form.Label>
//                     <Form.Control onChange={OperationHandler} name="quantity" type="number" placeholder="Enter Product quntity" />
//                 </Form.Group>
    
//                 <Button variant="primary" type="submit">
//                     {id == 0 ? "Add Product" : "Edit Product"}
//                 </Button>
//             </Form>
//         </div>
//     }
import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'

export function ProductForm() {
let [product, setProduct] = useState({});
let navigate = useNavigate();
 let {id} = useParams();
 let [formValues,SetFormValues]=useState({
    img1:'',
    img2:'',
    img3:'',
    productname :'',
    price:'',
    quantity:'',
 });
//  let formOperation = (e)=>{
//     e.preventDefault()
//     if (id == 0) {
//         axios
//             .post("http://localhost:3005/products", formValues)
//             .then((response) => {
//                 navigate("/products");
//             });
//     } else {
//         // edit
//         axios.put(`http://localhost:3005/products/${id}`, formValues).then(() => {
//             navigate("/products");
            
//         });
//     }
//  }
let formOperation = (e) => {
    e.preventDefault();
    if (id == 0) {
      axios
        .post("http://localhost:3005/products", formValues)
        .then((response) => {
          navigate("/products");
        });
    } else {
      axios
        .put(`http://localhost:3005/products/${id}`, formValues)
        .then(() => {
          navigate("/products");
        });
    }
  };
 
  
 let getProduct = async () => {
    let response = await axios.get(`http://localhost:3005/products/${id}`);
    setProduct(response.data);
    SetFormValues(response.data);
};
 useEffect(() => {
    if (id != 0) {
        getProduct();
    }
}, []);


 let OperationHandler = (e) => {
    SetFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
    });
   
};




  return (
    <div className='mt-5 p-5' style={{width:800,margin:'auto',}}>
    <form onSubmit={formOperation} encType='multipart/form-data' >
  <div className="mb-3  " >
  <label for="productimg" className="form-label" >Product image  </label>
  <input onChange={OperationHandler} type="text" className="form-control" defaultValue={
    product.img1} name="img1" placeholder="Enter url for first image" accept="image/*"/> 
    <br></br>
    <input onChange={OperationHandler} type="text" className="form-control" defaultValue={
    product.img2} name="img2" placeholder="Enter url for second image" accept="image/*"/> 
    <br></br>
    <input onChange={OperationHandler} type="text" className="form-control" defaultValue={
    product.img3} name="img3" placeholder="Enter url for third image" accept="image/*"/>   </div>
   <div className="mb-3">
    <label for="productName" className="form-label" >Product Name  </label>
    <input onChange={OperationHandler} 	defaultValue={product.productname}
 type="text" className="form-control" name="productname" placeholder="Enter product name"/>
  </div>
  <div className="mb-3">
    <label for="productPrice" className="form-label">Price</label>
    <input onChange={OperationHandler} defaultValue={product.price} type="number" className="form-control" name="price" placeholder="Enter price"/>
  </div>
  <div className="mb-3">
    <label for="quantity" className="form-label">Quantity</label>
    <input onChange={OperationHandler} defaultValue={product.quantity} type="number" className="form-control" name="quantity" placeholder="Enter quantity"/>
  </div>
  <button type="submit" className="btn btn-success">			
  	{id == 0 ? "Add Product" : "Edit Product"}
</button>
</form>
    </div>
  )
}

