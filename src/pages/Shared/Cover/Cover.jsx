import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, details }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >

            <div className=' relative text-center'>
                <img src={img} alt="" />
                <div className=" text-white bg-black bg-opacity-40 p-16 absolute transform -translate-y-1/2  lg:left-60 lg:right-60 top-1/2">
                    <h2 className='text-5xl font-semibold mb-4'>{title}</h2>
                    <p>{details}</p>
                </div>
            </div>

        </Parallax>

    );
};

export default Cover;