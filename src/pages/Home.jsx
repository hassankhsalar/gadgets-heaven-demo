import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import Banner from '../components/Banner';
import HeadingHome from '../components/HeadingHome';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            {/* Helmet for dynamic title */}
            <Helmet>
                <title>Home - Explore Gadgets and Categories</title>
                <meta name="description" content="Explore the latest gadgets and categories on our home page. Discover what's trending and find your next favorite tech item." />
            </Helmet>

            {/* Banner */}
            <Banner />

            {/* Heading */}
            <HeadingHome />

            <div className='flex flex-row'>
                {/* Categories tab */}
                <Categories categories={categories} />
                
                {/* Dynamic nested components */}
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
