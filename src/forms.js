 import React, {useState} from 'react';
 import './forms.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (e) => {
     e.preventDefault();
     console.log('An email was submitted: ', email);
  };
 
  return (
     <div className="login">
       <h2>Login</h2>
       <form onSubmit={handleSubmit}>
         <label>
           Email:
           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
         </label>
         <label>
           Password:
           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
         </label>
         <input type="submit" value="Submit" />
       </form>
     </div>
  );
 };
 
 export default Form;

