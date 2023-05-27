import React from 'react';

const FoodCard = ({item}) => {
  const { name, image, price, recipe } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-12">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <p className='absolute right-0 mr-12 mt-12 px-4 bg-slate-950 text-white'>${price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
          <button className="btn btn-outline btn-warning border-0 border-b-4">add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;