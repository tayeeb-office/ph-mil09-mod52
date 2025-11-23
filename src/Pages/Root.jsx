import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Loading from "../Pages/Loading"; 

const Root = () => {
    return (
        <div className='bg-[#101622] space-grotesk'>
            <header>
                <Navbar></Navbar>
            </header>
            <Suspense fallback={<Loading />}>
                <Outlet></Outlet>
            </Suspense>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;