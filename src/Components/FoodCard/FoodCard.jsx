import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/UseCart';


const FoodCard = ({item}) => {
  const { name, image, price, recipe , _id} = item;
  const {user} = useContext(AuthContext);
  const[, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();


  const handleAddToCart = item => {
    console.log(item);
    if(user && user.email){
      const cartItem = {menuItemId: _id, name, image, price, email: user.email};
      // console.log(cartItem)
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body:JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Food added on the cart.',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    else{
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from: location}})
        }
      })
    }
  }
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
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-200 border-warning border-0 border-b-4">add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;