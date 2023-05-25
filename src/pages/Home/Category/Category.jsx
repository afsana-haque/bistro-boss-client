import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section className='my-12'>
            <SectionTitle
            subHeading={"---From 11:00am to 10:00pm---"}
            heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb24"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/cgkwqjW/slide1.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center -m-16 text-blue-50'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/xLp2qYc/slide2.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center -m-16 text-blue-50'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/x1FJx0C/slide3.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center -m-16 text-blue-50'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/vvrDJHf/slide4.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center -m-16 text-blue-50'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/cgkwqjW/slide1.jpg" alt="" />
                    
                    </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;