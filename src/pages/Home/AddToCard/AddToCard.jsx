import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const AddToCard = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"---Should Try---"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className='grid lg:grid-cols-3 gap-5 my-12'>
                <div className="card w-96 h-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/cgkwqjW/slide1.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline btn-warning border-0 border-b-4">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/x1FJx0C/slide3.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Soups</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn btn-outline btn-warning border-0 border-b-4">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full h-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/vvrDJHf/slide4.jpg" alt="Shoes" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">desserts</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn btn-outline btn-warning border-0 border-b-4">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCard;