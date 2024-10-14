import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar/Navbar';
const Main = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>
            <Outlet></Outlet>
               <hr />
            <Footer></Footer>
        </div>
    );
};

export default Main;