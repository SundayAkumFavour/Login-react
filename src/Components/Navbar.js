import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/NavBar.css';

const Navbar = () => {
  return (
    <nav>
    <div class='logo'><img src={require('./img3.jpeg')} alt="logo" height="50px" width="178px"/></div>
      <ul>
        <li>
          <Link className='text-link' to="/">Home</Link>
        </li>
        <li>
          <Link className='text-link' to="/login">Login</Link>
        </li>
        <li>
          <Link className='text-link' to="/form">Form</Link>
        </li>
        <li>
          <Link className='text-link' to="/awotelo">Sparkles</Link>
        </li>
      </ul>
    </nav>
  );
};



export default Navbar;











// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Css/NavBar.css';

// const Navbar = ({ onLoginClick, onFormClick, onSparklesClick }) => {
//   return (
//     <nav>
//       <div className='logo'><img src={require('./img3.jpeg')} alt="logo" height="50px" width="178px" /></div>
//       <ul>
//         <li>
//           <Link className='text-link' to="/">Home</Link>
//         </li>
//         <li>
//           <button className='text-link' onClick={onLoginClick}>Login</button>
//         </li>
//         <li>
//           <button className='text-link' onClick={onFormClick}>Form</button>
//         </li>
//         <li>
//           <button className='text-link' onClick={onSparklesClick}>Sparkles</button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;






// import React from 'react';
// import Navbar from './Navbar';

// const App = () => {
//   const handleLoginClick = () => {
//     // Logic to handle the login click
//     console.log('Login clicked');
//   };

//   const handleFormClick = () => {
//     // Logic to handle the form click
//     console.log('Form clicked');
//   };

//   const handleSparklesClick = () => {
//     // Logic to handle the Sparkles click
//     console.log('Sparkles clicked');
//   };

//   return (
//     <div>
//       <Navbar
//         onLoginClick={handleLoginClick}
//         onFormClick={handleFormClick}
//         onSparklesClick={handleSparklesClick}
//       />
//       {/* Other components and content */}
//     </div>
//   );
// };

// export default App;



















