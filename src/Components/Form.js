import React from 'react';
import '../Css/Form.css';
 const Main = () => {
    return (
     <div class="body">
      <div class="form-container">
      <h2>Registration Form</h2>
      <form>
        <div class="form-group">
          <label for="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" placeholder="Your First Name" required></input>
        </div>
        <div class="form-group">
          <label for="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" placeholder="Your Last Name" required></input>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Your E-Mail" required></input>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="text" id="password" name="password" placeholder="Your Password" required></input>
        </div>
        <div class="form-group">
          <label for="password">Confirm Your Password:</label>
          <input type="text" id="password" name="password" placeholder="Confirm Your Password" required></input>
        </div>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
     
    );
  }
  function Form() {
    return (
        <div>
        {/* <Navbar/> */}
        <Main/>
        {/* <Footer/> */}
        </div>
    );
};

export default Form;







// import React from 'react';
// import '../Css/Form.css';

// const Main = ({ formData, onSubmit }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Call the onSubmit function provided as a prop
//     if (onSubmit) {
//       onSubmit(formData);
//     }
//   };

//   return (
//     <div className="body">
//       <div className="form-container">
//         <h2>Registration Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="firstname">First Name:</label>
//             <input
//               type="text"
//               id="firstname"
//               name="firstname"
//               placeholder="Your First Name"
//               value={formData.firstname || ''}
//               onChange={(e) => formData.setFirstname(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastname">Last Name:</label>
//             <input
//               type="text"
//               id="lastname"
//               name="lastname"
//               placeholder="Your Last Name"
//               value={formData.lastname || ''}
//               onChange={(e) => formData.setLastname(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="text"
//               id="email"
//               name="email"
//               placeholder="Your E-Mail"
//               value={formData.email || ''}
//               onChange={(e) => formData.setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="text"
//               id="password"
//               name="password"
//               placeholder="Your Password"
//               value={formData.password || ''}
//               onChange={(e) => formData.setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Your Password:</label>
//             <input
//               type="text"
//               id="confirmPassword"
//               name="confirmPassword"
//               placeholder="Confirm Your Password"
//               value={formData.confirmPassword || ''}
//               onChange={(e) => formData.setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// function Form() {
//   // Initialize state for form data
//   const [formData, setFormData] = React.useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   // Handle form submission
//   const handleSubmit = (data) => {
//     console.log('Form data submitted:', data);
//     // Add logic to handle form submission, e.g., send data to the server
//   };

//   return (
//     <div>
//       {/* <Navbar/> */}
//       <Main formData={formData} onSubmit={handleSubmit} />
//       {/* <Footer/> */}
//     </div>
//   );
// }

// export default Form;
