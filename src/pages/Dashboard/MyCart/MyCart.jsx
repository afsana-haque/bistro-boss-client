import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/UseCart';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            console.log(result)
            if (result.isConfirmed ) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        console.log('deleted')
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }
    return (
        <div className='w-full mt-80 px-6'>
            <Helmet>
                <title> Bistro Boss | My Cart</title>
            </Helmet>
            <SectionTitle
                subHeading={"---My Cart---"}
                heading={"WANNA ADD MORE?"}
            ></SectionTitle>
            <div className='uppercase font-semibold h-[60px] flex justify-evenly items-center gap-8 mt-24  mb-5'>
                <h3 className='text-3xl'>Total Items: {cart.length}</h3>
                <h3 className='text-3xl'>Total Price: {total}</h3>
                <button className="btn btn-warning">Play</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-error text-xl text-white"><FaRegTrashAlt/></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;