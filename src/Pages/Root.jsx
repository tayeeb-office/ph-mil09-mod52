import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='bg-[#101622] space-grotesk'>
            <header>
                <Navbar></Navbar>
            </header>
            <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
                <Outlet></Outlet>
            </Suspense>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;