import React, { useState } from 'react';
import '../Css/dashbored.css';

const StudentDashboard = () => {
    const [subject, setSubject] = useState('');
    const [score, setScore] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Score Submitted: ', { subject, score });
    };

    return (
        <div className="dashboard-container">
            <h2>Student Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" onChange={e => setSubject(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="score">Score:</label>
                    <input type="number" id="score" name="score" onChange={e => setScore(e.target.value)} required />
                </div>
                <button type="submit">Submit Score</button>
            </form>
        </div>
    );
};


function Dashbored() {
    return (
        <div>
        {/* <Navbar/> */}
        < StudentDashboard/>
        {/* <Footer/> */}
        </div>
    );
};
export default Dashbored;