import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <HelmetProvider>
            <div>
                {/* navbar */}
                <Navbar />

                <div className="min-h-[calc(100vh-250px)] container mx-auto">
                    {/* dynamic section */}
                    <Outlet />
                </div>

                {/* footer */}
                <Footer />
            </div>
        </HelmetProvider>
    );
};

export default MainLayout;
