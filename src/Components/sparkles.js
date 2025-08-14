import React from 'react';
import '../Css/Awotelo.css';

// const Navbar = () => {
//   return (
//   <nav class="navbar">
//     <div class='logo'><img src={require('./logo.png')} alt="logo" height="50px" width="178px"></img></div>
//       <ul class="nav-links">
//         <li>HOME</li>
//         <li>SERVICES</li>
//         <li>PRODUCTS</li>
//         <li>ABOUT</li>
//         <li>CONTACT</li>
//       </ul>
//   </nav>
//   );
// };

const Hero = () => {
    return (
      <div className="hero">
        <div className="hero-content">
          <h1>Don't just choose your jewels let them pick you </h1>
          <h1>Be stylish, be beautiful, be uniqe , be you.</h1>
          <button type="button">Shop </button>
        </div>
      </div>
    );
  };

  const CardHead = () => {
    return (
    <div className="CardHead"> 
          <h3>HOW IT WORKS</h3>
          <h1>THIS IS THE FUTURE OF <br></br>PREMIUM FASHION</h1>
    </div>
    );
  };

  const Circles = () => {
    return (
  <div>
  
  <hr style={{marginTop:'100px'}}/>
  <div className='circle-container'>
  <div className='lenses-circle'></div>
  <div className='lenses-circle'></div>
  <div className='lenses-circle'></div>
  <div className='lenses-circle'></div>
  </div>
  
  
  
  <div style={{marginTop:'60px'}} className='lenses-container'>
  <div className='lenses-item'>
  <div className='circle'> 
      <i class="fa-solid fa-pencil fa-3x"></i>
    </div>
  <h4>Measured for You</h4>
  <p>Select your style, select your color, finetune the fabric and get your desired outcome.</p>
  </div>
  
  <div className='lenses-item'>
    <div className='circle'> 
      <i class="fa fa-star fa-3x"></i>
    </div>
  <h4>Perfected for You</h4>
  <p>The Jewelries will be Fitted perfectly for you, No issues with size as you will get your desired outcome.</p>
  </div>
    
  <div className='lenses-item'>
  <div className='circle'> 
  <i class="fa fa-check-circle fa-3x"></i>
    </div>
  <h4>100 Percent for You</h4>
  <p>100% your style, 100% your color, 100% your taste and 100% your desired outcome.</p>
  </div>
  
  <div className='lenses-item'>
  <div className='circle'> 
      <i class="fa-solid fa-house fa-3x"></i>
    </div>
  <h4>Made In-House for You</h4>
  <p>Customise your style, Customise your color, Customise to your  and get your desired outcome.</p>
  </div>
  </div>
  </div>
    )    
  };

  const Pictures = () =>{
    return(
     <div className="pictures">
       <div className="sub-L">
         <div className="gal gal-1"></div>
         <div className="gal gal-2"></div>
         <div className="gal gal-3"></div>
         <div className="sub-R">
      <div className='double'>
            <div className="gal gal-4">
                <h4>Fashion is not just a trend; It's an expression of individuality</h4>
                <h1>Redefining Elegance in Fashion</h1>
                <p>Established with a passion for creativity and an unwavering commitment to quality, 
                  Sparkles has emerged as a distinguished name in the fashion industry. 
                  Our journey began with a vision to create a brand that transcends fleeting fashion fads 
                  and instead focuses on crafting pieces that stand the test of time. </p>
          </div>
         </div>
         <div className='double'>
            <div className="gal gal-5"></div>
         <div className="gal gal-6"></div>
         </div>
      </div> 
      </div>
      
     </div>
    )
  
  }

  const Services = () =>{
    return(
        <div class="flex-container">
        <div class="flex-box">
            <h3>FIND A <br></br>
                LOCATION</h3>
            <i class="fa fa-location-arrow fa-5x" aria-hidden="true" ></i>
            <p>Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></p>           
        </div>
        <div class="flex-box">
            <h3>BROWSE OUR 
                FASHION STYLES</h3>
            <i class="fa fa-search fa-5x" aria-hidden="true" ></i>
            <p>Explore Styles <i class="fa fa-arrow-right" aria-hidden="true"></i></p>  
        </div>
        <div class="flex-box">
            <h3>EXPLORE OUR SHIPPING OPTIONS</h3>
            <i class="fa fa-truck fa-5x" aria-hidden="true" ></i>
            <p>Explore YOUR STYLE <i class="fa fa-arrow-right" aria-hidden="true"></i></p>  
        </div>
        </div>
    )
  }

  const About = () => {
    return (
        <div className="about">
          <img src={require('./img1.jpeg')} alt="logo" height="400px" width="400px"></img>
          <div className="about-text">
            <h2>About Us</h2>
            <p>Dear Sparkles Community,
                We are thrilled to welcome you to the Awotelo family, where style meets passion, and fashion becomes a statement. 
                As the heart and soul of our brand, we wanted to take a moment to share our story and values with you.
                At Sparkles, we believe that fashion is not just about clothing; it's a form of self-expression. 
                It's about embracing individuality, celebrating diversity, and empowering each person to feel confident in their own skin. 
                Our journey began with a vision to create a space where every individual, regardless of age, size, or background, 
                could find clothing that resonates with their unique style.</p>
                <p>Founded in 2016, Awotelo emerged from a simple idea: to curate a collection that blends timeless elegance with contemporary trends. 
                  We have tirelessly sought out the finest fabrics, collaborated with skilled artisans, and stayed on the forefront of design to bring you a selection that embodies quality, 
                  comfort, and, of course, a touch of glamour. At the core of our mission is the commitment to redefine fashion norms. We strive to be more than just a clothing brand; 
                  we aim to be a movement that promotes body positivity, sustainability, and a sense of community. By prioritizing ethical practices in our production processes, 
                  we hope to contribute to a world where fashion is both a personal joy and a force for good.</p>
                  <p> Our team of designers draws inspiration from global trends, creating pieces that stand out and make a statement.
                  We offer a diverse range of sizes and styles, ensuring that everyone can find something that resonates with their personal taste.
                  We are committed to reducing our environmental footprint by adopting eco-friendly practices and sourcing materials responsibly.
                  Your satisfaction is our top priority. We are here to provide an exceptional shopping experience and to address any questions or concerns you may have.</p>
          </div>
        </div>
    );
  };

  // const FooterHead = () => {
  //   return (
  //     <div className="footer-head">
  //       <img src={require('./logo.png')} alt="logo" height="50px" width="178px"></img>
  //       <p>FOLLOW US</p>
  //     </div>
  //   );
  // };

  // const Footer = () => {
  //   return (
  //     <footer id='footer'>
  //     <div class="footer-top">
  //       <div class="container">
  //         <div class="row">
  
  //           <div class="col-lg-3 col-md-6 footer-contact">
  //             <h2>Awotelo Fashion House and Luxury Brand, Ottawa, Canada.</h2>
  //             <p>
  //             <strong>Awotelo Fashion House and Luxury Brand, Ottawa, Canada.</strong>
  //               <br></br>
  //               <strong>Phone:</strong> 08038341496, 08189641074<br></br>
  //               <strong>Email:</strong> enquiry@awotelo<br></br>
  //             </p>
  //           </div>
  
  //           <div class="col-lg-2 col-md-6 footer-links">
  //             <h4>Useful Links</h4>
  //             <ul>
  //               <li><i class="bx bx-chevron-right"></i> <a href="#">HOME</a></li>
  //               <li><i class="bx bx-chevron-right"></i> <a href="#">ABOUT</a></li>
  //               <li><i class="bx bx-chevron-right"></i> <a href="#">SERVICES</a></li>
  //               <li><i class="bx bx-chevron-right"></i> <a href="#">PROGRAM</a></li>
  //               <li><i class="bx bx-chevron-right"></i> <a href="#">ADDRESS</a></li>
  //             </ul>
  //           </div>
  

  
  //           <div class="col-lg-4 col-md-6 footer-newsletter">
  //             <h4>Join Our Newsletter</h4>
  //             <p>Join our comunity to get the latest offers and Packages from Awotelo.</p>
  //             <form action="" method="post">
  //             <input type="email" name="email"/><input type="submit" value="Subscribe"/>
  //             </form>
  //           </div>
  
  //         </div>
  //       </div>
  //     </div>
  
  //     <div class="container d-md-flex py-4">
  
  //       <div class="me-md-auto text-center text-md-start">
  //         <div class="copyright">
  //           &copy; <strong><span>Copyright © 2023 Awotelo Fashion House and Luxury Brand, Ottawa, Canada. - All Rights Reserved.</span></strong>
  //         </div>
  //       </div>
  //     </div>
  //         </footer>
  //   );
  // };

function Awotelo() {
    return (
        <div>
        {/* <Navbar /> */}
        <Hero />
        <CardHead />
        <Circles />
        <Pictures />
        <Services />
        <About />
        {/* <FooterHead />
        <Footer /> */}
      </div>
    )
}
  
export default Awotelo;