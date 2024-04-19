import React from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () =>{
   return (
    <div className="wrapper">
       <Navbar />
       <Outlet />
       <Footer />
    </div>
   );
};

export default Root;