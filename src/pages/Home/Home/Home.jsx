import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Bistro from '../Bistro/Bistro';
import PopularMenu from '../PopularMenu/PopularMenu';
import AddToCard from '../AddToCard/AddToCard';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Bistro></Bistro>
            <PopularMenu></PopularMenu>
            <AddToCard></AddToCard>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;