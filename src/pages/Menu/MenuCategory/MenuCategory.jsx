import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items , img, title, details}) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title} details={details}
            ></Cover>}
            <div className='grid md:grid-cols-2 gap-4 my-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
            <Link to={`/order/${title}`}><button className="btn btn-outline btn-warning border-0 border-b-4 mb-8">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;