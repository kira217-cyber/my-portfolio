import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';
import DashBoardNav from '../components/DashBoardNav/DashBoardNav';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Dashboard = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <DashBoardNav></DashBoardNav>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollToTopButton></ScrollToTopButton>
            <ScrollToTop />
        </div>
    );
};

export default Dashboard;