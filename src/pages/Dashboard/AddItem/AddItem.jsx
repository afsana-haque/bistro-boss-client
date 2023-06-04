import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token= import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then( res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const { name, price, category, recipe}= data;
                const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL}
                console.log( newItem)
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: ' Item added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };

    return (
        <div className='w-full px-10 mt-10 mb-5'>
            <Helmet>
                <title> Bistro Boss | Add Item</title>
            </Helmet>
            <SectionTitle
                subHeading={"---What's new?---"}
                heading={"ADD AN ITEM"}
            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name" {...register("name", {required: true, maxLength: 120})} className="input input-bordered w-full " />
                </div>
                <div className='grid lg:grid-cols-2 gap-7'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Category*</span>
                    </label>
                    <select defaultValue='Pick One' className="select select-bordered" {...register("category", { required: true })}>
                        <option disabled>Pick One</option>
                        <option>Salad</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Drinks</option>
                        <option>Desi</option>
                        <option>Dessert</option>
                    </select>
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Price*</span>
                    </label>
                    <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full " />
                </div>
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Recipe Details*</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>
                <div className="form-control w-full mb-4">
                <label className="label">
                        <span className="label-text text-xl font-semibold">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input type="submit" value="Add Item" className='btn btn-info bg-blue-300 mt-4' />
            </form>
        </div>
    );
};

export default AddItem;