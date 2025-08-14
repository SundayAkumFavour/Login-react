
import React from 'react';
import '../Css/Home.css';
import ImageCarousel from './ImageCarousel';

// const Home = () => {
//     return (
//       <div>
//           <h1>Home</h1>
//       </div>
//     );
//   };

  const HomeHero = () => {
    return (
      <div className="home-hero">
        <div className="home-hero-content">
          <h1>Welcome to Sparkles,</h1>
          <h1>where style meets passion,</h1>
          <h1>and fashion becomes a statement.</h1>
          <button type="button">Shop </button>
        </div>
      </div>
    );
  };

  const HomeAbout = () => {
    return (
        <div className="about">
          <img src={require('../images/img4.jpeg')} alt="logo" height="400px" width="400px"></img>
          <div className="about-text">
            <h2>About Us</h2>
            <p>Dear Sparkles,
                We are thrilled to welcome you to the Sparkles family, where style meets passion, and fashion becomes a statement. 
                As the heart and soul of our brand, we wanted to take a moment to share our story and values with you.
                At Sparkles, we believe that fashion is not just about clothing; it's a form of self-expression. 
                It's about embracing individuality, celebrating diversity, and empowering each person to feel confident in their own style. 
                Our journey began with a vision to create a space where every individual, regardless of age, size, or background, 
                could find Juwelries that resonates with their unique style.</p>
                <p>Founded in 2016, Sparkles emerged from a simple idea: to curate a collection that blends timeless elegance with contemporary trends. 
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

//   const HomeFooterHead = () => {
//     return (
//       <div className="footer-head">
//         <img src={require('./logo.png')} alt="logo" height="50px" width="178px"></img>
//         <p>FOLLOW US</p>
//       </div>
//     );
//   };

//   const Footer = () => {
//     return (
//       <footer id='footer'>
//       <div class="footer-top">
//         <div class="container">
//           <div class="row">
  
//             <div class="col-lg-3 col-md-6 footer-contact">
//               <h2>Awotelo Fashion House and Luxury Brand, Ottawa, Canada.</h2>
//               <p>
//               <strong>Awotelo Fashion House and Luxury Brand, Ottawa, Canada.</strong>
//                 <br></br>
//                 <strong>Phone:</strong> 08038341496, 08189641074<br></br>
//                 <strong>Email:</strong> enquiry@awotelo<br></br>
//               </p>
//             </div>
  
//              <div class="col-lg-2 col-md-6 footer-links">
//               <h4>Useful Links</h4>
//               <ul>
//                 <li><i class="bx bx-chevron-right"></i> <a href="#">HOME</a></li>
//                 <li><i class="bx bx-chevron-right"></i> <a href="#">ABOUT</a></li>
//                 <li><i class="bx bx-chevron-right"></i> <a href="#">SERVICES</a></li>
//                 <li><i class="bx bx-chevron-right"></i> <a href="#">PROGRAM</a></li>
//                 <li><i class="bx bx-chevron-right"></i> <a href="#">ADDRESS</a></li>
//               </ul>
//             </div>
  
//             <div class="col-lg-4 col-md-6 footer-newsletter">
//               <h4>Join Our Newsletter</h4>
//               <p>Join our comunity to get the latest offers and Packages from Awotelo.</p>
//               <form action="" method="post">
//               <input type="email" name="email"/><input type="submit" value="Subscribe"/>
//               </form>
//             </div>
  
//           </div>
//         </div>
//       </div>
  
//       <div class="container d-md-flex py-4">
  
//         <div class="me-md-auto text-center text-md-start">
//           <div class="copyright">
//             &copy; <strong><span>Copyright © 2023 Awotelo Fashion House and Luxury Brand, Ottawa, Canada. - All Rights Reserved.</span></strong>
//           </div>
//         </div>
//       </div>
//           </footer>
//     );
//   };


  function Home () {
    return (
        <div>
        <HomeHero />
        <ImageCarousel />
        <HomeAbout />
        {/* <HomeFooterHead /> */}
        {/* <Footer /> */}
      </div>
    );
};
  
export default Home;






















// import React from 'react';
// import '../Css/Home.css';

// const HomeHero = (props) => {
//   return (
//     <div className="home-hero" style={props.style}>
//       <div className="home-hero-content">
//         <h1>Welcome to Sparkles,</h1>
//         <h1>where style meets passion,</h1>
//         <h1>and fashion becomes a statement.</h1>
//         <button type="button">Shop </button>
//       </div>
//     </div>
//   );
// };

// const HomeAbout = (props) => {
//   return (
//     <div className="about" style={props.style}>
//       <img src={require('../images/img4.jpeg')} alt="logo" height="400px" width="400px"></img>
//       <div className="about-text">
//         <h2 style={{ color: props.titleColor }}>About Us</h2>
//         <p>{props.aboutText}</p>
//       </div>
//     </div>
//   );
// };

// function Home() {
//   const heroStyle = {
//     // Define your style for HomeHero component here
//   };

//   const aboutStyle = {
//     // Define your style for HomeAbout component here
//   };

//   return (
//     <div>
//       <HomeHero style={heroStyle} />
//       <HomeAbout
//         style={aboutStyle}
//         titleColor="blue" // Example of a specific style prop
//         aboutText="Your about text goes here." // Example of passing dynamic text
//       />
//     </div>
//   );
// }

// export default Home;
