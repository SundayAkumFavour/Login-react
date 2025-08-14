import React from 'react';
import '../Css/Footer.css';


const Head = () => {
    return (
        <div className="footer-head">
        <img src={require('../img/logo.jpeg')} alt="logo" height="50px" width="178px"></img>
        <p>FOLLOW US</p>
      </div>
    );
  };


const Main = () => {
  return (
    <footer id='footer'>
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h2>Fashion House and Luxury Brand, Valantino,Paris.</h2>
            <p>
            <strong> Fashion House and Luxury Brand, Valantino,Paris.</strong>
              <br></br>
              <strong>Phone:</strong> 09114935733, 09120739706<br></br>
              <strong>Email:</strong> enquiry@redsparks<br></br>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="Home">HOME</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="About">ABOUT</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="Service">SERVICES</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="Program">PROGRAM</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="Address">ADDRESS</a></li>
            </ul>
          </div>



          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Join our comunity to get the latest offers and Packages from Sparkles.</p>
            <form action="" method="post">
            <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; <strong><span>Copyright © 2023 Favourite Sparkles(Sparkles)  . - All Rights Reserved.</span></strong>
        </div>
      </div>
    </div>
        </footer>
  );
};

function Footer() {
    return (
        <div>
        <Head />
        <Main />
      </div>
    )
}
  
export default Footer;