import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/8Kvj83t/02.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/bgc7Wpv/01.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/zn5xs3m/06.png" />
            </div>
            <div>
                <img src="https://i.ibb.co/gS30j1B/04.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/YhvQ0Wc/03.png" />
            </div>
            <div>
                <img src="https://i.ibb.co/92y2Gj1/05.png" />
            </div>
        </Carousel>
    );
};

export default Banner;