import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import "./Featured.css"

const Featured = () => {
    return (
        <div className='feature-item  bg-fixed my-16 pt-6'>
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className='grid lg:grid-cols-2 justify-center items-center bg-slate-500 bg-opacity-30 pb-20 pt-12 px-36 gap-7'>
                <div>
                    <img src="https://i.ibb.co/qkgSKQR/featured.jpg" alt="" />
                </div>
                <div className='text-white'>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white my-6">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;