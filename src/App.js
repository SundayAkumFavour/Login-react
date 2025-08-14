import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Form from './Components/Form';
import Awotelo from './Components/sparkles';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Dashbored from './Components/dashbored';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/awotelo" element={<Awotelo />} />
          <Route path="/dashbored" element={<Dashbored/>} />
        </Routes>
        <Footer />
      </div>  
    </BrowserRouter>
  );
};


export default App;