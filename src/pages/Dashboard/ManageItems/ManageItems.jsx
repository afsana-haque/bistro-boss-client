import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../hooks/UseMenu';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

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
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('delete res', res.data)
                        if (res.data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                        }
                        refetch();
                    })

            }
        })
    }

    return (
        <div className='w-full '>
            <Helmet>
                <title> Bistro Boss | Manage items</title>
            </Helmet>
            <SectionTitle
                subHeading={"---Hurry Up!---"}
                heading={"MANAGE ALL ITEMS"}
            ></SectionTitle>
            <h3 className='text-3xl my-6 font-semibold lg:ps-44'>Total items: {menu.length}</h3>
            <div className="overflow-x-auto lg:ps-32 px-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>CATEGORY</th>
                            <th>PRICE</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>${item.price}</td>
                                <th>
                                    <button className="btn btn-info bg-blue-300 text-xl text-white"><FaEdit /></button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn btn-error text-xl text-white"><FaRegTrashAlt /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;