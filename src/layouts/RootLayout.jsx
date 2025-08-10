import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollToTopButton></ScrollToTopButton>
            <ScrollToTop />
        </div>
    );
};

export default RootLayout;