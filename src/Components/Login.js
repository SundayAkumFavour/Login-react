import React from 'react';
import '../Css/Login.css';


  const Main = () => {
    return (
      <div class="body">
      <div class="form-container">
      <h2>Log In</h2>
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required></input>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="text" id="email" name="password" placeholder="Your Password" required></input>
        </div>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
      </div>
   
    );
  };

  function Login() {
    return (
        <div>
        {/* <Navbar/> */}
        <Main/>
        {/* <Footer/> */}
        </div>
    )
}

export default Login;