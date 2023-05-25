import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const desserts = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title> Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover img="https://i.ibb.co/6Fj7NGD/banner3.jpg" title='OUR MENU' details="Would you like to try a dish?"></Cover>
            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory
                items={desserts}
                title="DESSERT"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img='https://i.ibb.co/5MkyB2b/dessert-bg.jpg'
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                title="PIZZA"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img='https://i.ibb.co/q1XJpqY/pizza-bg.jpg'
            ></MenuCategory>

            <MenuCategory
                items={salad}
                title="SALAD"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img='https://i.ibb.co/GMJCmNK/salad-bg.jpg'
            ></MenuCategory>
            <MenuCategory
                items={soup}
                title="Soup"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img='https://i.ibb.co/026X5WR/soup-bg.jpg'
            ></MenuCategory>


        </div>
    );
};

export default Menu;