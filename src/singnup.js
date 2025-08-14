import React, { useState } from 'react';
import './signup.css';


const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted: ', { firstName, lastName, email, password });
    };

    return (
        <div className="body">
            <div className="form-container">
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text" id="firstname" name="firstname" placeholder="Your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" id="lastname" name="lastname" placeholder="Your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Your E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
};

export default Signup;
