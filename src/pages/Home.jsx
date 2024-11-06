import React from 'react';
import Banner from '../components/Banner';
import HeadingHome from '../components/HeadingHome';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* Banner  */}
            <Banner/>
            {/* heading */}
            <HeadingHome/>

            <div className='flex flex-row'>
                {/* categories tab */}
            <Categories categories={categories} />
            {/* dynamic nested components */}
            <Outlet />
            </div>

            
        </div>
    );
};

export default Home;