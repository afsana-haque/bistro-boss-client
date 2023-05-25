import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

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
        </div>
    );
};

export default MenuCategory;