import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBCol,
//   MDBRow,
//   MDBBtn
// } from 'mdb-react-ui-kit';

export function Footer() {
  return (
    <footer style={{height:"200px", position:"relative",  
    bottom: "-2030px;"}}>
<footer className="text-center text-lg-start bg-dark text-light" >
  <f className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="" className="me-4 link-light">
      <i class="bi bi-facebook"></i>
      </a>
      <a href="" className="me-4 link-light">
        <i class="bi bi-twitter"></i>
      </a>
      <a href="" className="me-4 link-light">
        <i class="bi bi-google"></i>     
      </a>
      <a href="" className="me-4 link-light">
          <i class="bi bi-instagram"></i>     
      </a>
      <a href="" className="me-4 link-light">
          <i class="bi bi-linkedin"></i>     
      </a>
      <a href="" className="me-4 link-light">
            <i class="bi bi-github"></i>     
      </a>
    </div>
  </f>

  <f2 className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>BYANCA
          </h6>
          <p>
            Here you can choose the best accsseories to organize your home. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">decor</a>
          </p>
          <p>
            <a href="#!" className="text-reset">accsseories</a>
          </p>
          <p>
            <a href="#!" className="text-reset">unique styling</a>
          </p>
          <p>
            <a href="#!" className="text-reset"></a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </f2>

  
  <div className="text-center p-4" style={{backgroundColor: "black"}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">BYANCA.com</a>
  </div>
</footer>
    </footer>
    // <div classNameName='cont bg-danger' style={{height:'500px',position:'relative',bottom:"0px"}}>
    //   <footer>
    // <MDBFooter className='text-center' color='white' bgColor='dark'style={{height:'500px'}}>
    //   <MDBContainer className='p-4' style={{height:'500px'}}>
    //     <section className='mb-4'style={{height:'500px'}}>
    //       <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/' role='button'>
    //       <i class="bi bi-facebook"></i>
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='https://www.twitter.com/' role='button'>
    //       <i class="bi bi-twitter"></i>
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com/' role='button'>
    //       <i class="bi bi-google"></i>     
    //          </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='https://www.instgram.com/' role='button'>
    //       <i class="bi bi-instagram"></i>
    //         </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/' role='button'>
    //       <i class="bi bi-linkedin"></i>
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='https://www.github.com/' role='button'>
    //       <i class="bi bi-github"></i>
    //         </MDBBtn>
    //     </section>

    //     <section className=''style={{height:'1000px'}}>
    //       <form action=''>
    //         <MDBRow className='d-flex justify-content-center'>
    //           <MDBCol size="auto">
    //             <p className='pt-2'>
    //               <strong>Explore new trends</strong>
    //             </p>
    //           </MDBCol>

    //           <MDBCol md='5' start>
    //             <MDBInput contrast type='email' className='mb-4' />
    //           </MDBCol>

    //           <MDBCol size="auto">
    //             <MDBBtn outline color='light' type='submit' className='mb-4'>
    //               Search
    //             </MDBBtn>
    //           </MDBCol>
    //         </MDBRow>
    //       </form>
    //     </section>
    //     <section className='se'>
    //       <MDBRow>
    //              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
    //           <ul className='list-unstyled mb-0'>
    //           <li>  <img src="l.png" class="w-50 logo-footer" style={{marginBottom:"10px"}} /> </li>
    //                       <li> <p>Adress : 7637 Laurel Dr. King Of Prussia</p></li>
    //                       <li><p>Tel : (888)888888</p></li>
    //                       <li> <a href="#"className='text-white'></a>E-mail : BYANCY @gmail.com </li>
    //           </ul>
    //         </MDBCol>
    //         <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
    //         <h5 className='text-uppercase'>About Us</h5>

    //           <ul className='list-unstyled mb-0'>
    //           <li> <a href="#"className='text-white'> Home</a> </li>
    //                       <li> <a href="#" className='text-white'> About</a> </li>
    //                       <li> <a href="#" className='text-white'> Service</a> </li>
    //                       <li> <a href="#" className='text-white'> Team</a> </li>
    //                       <li> <a href="#"className='text-white'> Help</a> </li>
    //                       <li> <a href="#"className='text-white'> Contact</a> </li>
    //           </ul>
    //         </MDBCol>

    //         <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
    //         <h5 className='text-uppercase'>Contact Us</h5>

    //           <ul className='list-unstyled mb-0'>
    //             <li> <a href="#" className='text-white'> Cab Faciliy</a> </li>
    //                       <li > <a href="#" className='text-white'> Fax</a> </li>
    //                       <li > <a href="#" className='text-white'> Terms</a> </li>
    //                       <li > <a href="#"className='text-white'> Policy</a> </li>
    //                       <li > <a href="#" className='text-white'> Refunds</a> </li>
    //                       <li > <a href="#"className='text-white'> Paypal</a> </li>
                          
    //           </ul>
    //         </MDBCol>
    //         <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
    //           <h5 className='text-uppercase'>for business you can know info and contact us.</h5>

    //           <ul className='list-unstyled mb-0'>
    //             <li> <a href="#" className='text-white'> advertisment</a> </li>
    //                       <li > <a href="#" className='text-white'> tv show</a> </li>
                          
    //           </ul>
    //         </MDBCol>
    //         </MDBRow>
    //     </section>
    //   </MDBContainer>

    //   <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    //     © 2020 Copyright : 
    //     <a className='text-white' href='https://mdbootstrap.com/'>
    //     Home Decor        </a>
    //   </div>
    // </MDBFooter>
    // </footer>
    // </div>
  );
}

