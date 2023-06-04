import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';

const ManageItems = () => {
    return (
        <div className='w-full px-10'>
            <Helmet>
                <title> Bistro Boss | Manage items</title>
            </Helmet>
            <SectionTitle
                subHeading={"---Hurry Up!---"}
                heading={"MANAGE ALL ITEMS"}
            ></SectionTitle>
        </div>
    );
};

export default ManageItems;