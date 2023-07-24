import React, { useState, useRef } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import "../Css/login.css";
import { Container } from 'react-bootstrap';

export function Login() {
    let [user, setuser] = useState([]);

    let navigate = useNavigate()
    let [formvalues, setformvalues] = useState({
        firstname: " ",
        lastname: " ",
        email: "",
        password: "",
    })

    let [errors, setErrors] = useState({
        firstname: " ",
        lastname: " ",
        email: "",
        password: "",
    })

    let [isButtonDisabled, setIsButtonDisabled] = useState(true);

let loginFun = async (e) => {
  e.preventDefault();
  // Define user array
  let user = [];
  try {
    const response = await axios.get('http://localhost:3005/user');
    user = response.data;
  } catch (error) {
    console.error(error);
    alert('An error occurred while fetching user data');
  }
  let check = user.find((user) => user.email === formvalues.email && user.password === formvalues.password);
  if (check) {
    // Save user ID to local storage and navigate to products page
    localStorage.setItem('user_id', check.id);
    localStorage.setItem('username', check.firstname);

    navigate('/Products');
    console.log('Login Successful');

  }
   else {
    alert('Invalid email or password');
  }
};
    
    let registFun = (e) => {
        axios.post("http://localhost:3005/user", formvalues).then((response) => {
         navigate("/login")
    })
        console.log(formvalues);
    };

    let operationHandler = (e) => {
        if (e.target.name == "email") {
            if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(e.target.value)) {

                setformvalues({
                    ...formvalues,
                    [e.target.name]: e.target.value

                })
                setErrors({

                    ...errors,
                    email: null

                })
            }
            else {
                setErrors({

                    ...errors,

                    email: "Invalid Email",



                })
            }

        }
        if (e.target.name === 'password') {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(e.target.value)) {
                setIsButtonDisabled(false);
                setformvalues({
                    ...formvalues,
                    [e.target.name]: e.target.value
                })
                setErrors({
                    ...errors,
                    password: null
                })
            }
            else {
                setErrors({
                    ...errors,
                    password: ("password invalid must contain lower and uppercase , digits and special character")
                })
            }
        }
        if (e.target.name == "firstname" || e.target.name == "lastname") {
            if (/^[a-zA-Z]*$/.test(e.target.value)) {

                setformvalues({
                    ...formvalues,
                    [e.target.name]: e.target.value

                })
                setErrors({

                    ...errors,
                    [e.target.name]: null,

                })
            }
            else {
                setErrors({

                    ...errors,

                    [e.target.name]: `${e.target.name} should be string only`,



                })
            }

        }

    }

    const form1Ref = useRef(null);
    const form2Ref = useRef(null);

    const Next = () => {
        form1Ref.current.style.left = '-450px';
        form2Ref.current.style.left = '40px';

    };

    let back = () => {
        form2Ref.current.style.left = '450px';
        form1Ref.current.style.left = '40px';

    }

    
    
    


    return (
        <Container className='big' >
            {/* <div className='opac'> */}
                <div className='main'>
                    <div className=' container mt-5 '>

                        <Form id="form1" className='generalform' ref={form1Ref} onSubmit={loginFun}>
                            <p id="text1">Login</p>
                            {/* <div className='one'> */}
                            <Form.Group className="  mb-5  mt-4" controlId="formBasicEmail">

                                <input onChange={operationHandler} type="email" placeholder="Enter your Email" name="email" />

                                <Form.Text className="text-danger m-1" style={{ display: 'block' }}>
                                    {errors.email}
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="  mb-3" controlId="formBasicPassword">


                                <input name="password" onChange={operationHandler} type="password" placeholder="Enter Your password" />

                                <Form.Text className="text-danger" style={{ display: 'block' }}>
                                    {errors.password}
                                </Form.Text>

                            </Form.Group>

                            <Button className={isButtonDisabled ? 'sub-disabled' : 'sub'} type="submit" disabled={isButtonDisabled}>
                              Submit
                            </Button>

                            <br></br>

                            <Button className='btnform' onClick={Next} type="button" >
                                Create Account
                            </Button>

                        </Form>
                    </div>
                    <div className=' container mt-5 '>

                        <Form id="form2" className='generalform' ref={form2Ref} onSubmit={registFun}>
                            <p id="text2">Signup</p>

                            <Form.Group className="  mb-3" controlId="formBasicPassword">


                                <input name="firstname" onChange={operationHandler} type="text" placeholder="Enter your first name" />

                                <Form.Text className="text-danger" style={{ display: 'block' }}>
                                    {errors.firstname}
                                </Form.Text>

                            </Form.Group>
                            <Form.Group className="  mb-3" controlId="formBasicPassword">


                                <input name="lastname" onChange={operationHandler} type="text" placeholder="Enter your last name" />

                                <Form.Text className="text-danger" style={{ display: 'block' }}>
                                    {errors.lastname}
                                </Form.Text>

                            </Form.Group>
                            <Form.Group className="  mb-3  " controlId="formBasicEmail">


                                <input onChange={operationHandler} type="email" placeholder="Enter your Email" name="email" />

                                <Form.Text className="text-danger" style={{ display: 'block' }}>

                                    {errors.email}
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="  mb-3" controlId="formBasicPassword">
                                <input name="password" onChange={operationHandler} type="password" placeholder="Enter Your password" />
                                <Form.Text className="text-danger" style={{ display: 'block' }}>
                                    {errors.password}
                                </Form.Text>

                            </Form.Group>
                            <div className='button-container'>
                            <Button className={isButtonDisabled ? 'sub-disabled' : 'sub'} type="submit" disabled={isButtonDisabled} >
                                Submit
                            </Button>

                            <Button className='btn btnform' onClick={back} type="button" >
                                Back
                            </Button>


                               </div>

                        </Form>
                    </div>
                </div>
            </Container>
        // </div>

    );
    }