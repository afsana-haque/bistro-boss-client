import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider"
import Swal from 'sweetalert2';


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile}  = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true});
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                console.log("user profile info updated");
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => console.log(error));
        })
    };

    return (
        <>
            <Helmet>
                <title> Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">sing now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600 mt-4'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL&& <span className='text-red-600 mt-4'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600 mt-4'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", { required: true, minLength: 6, maxLength: 20 })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <p className='text-red-600 mt-4'>Password must be 6 character</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600 mt-4'>Password must be less 20 character</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn btn-primary" />
                            </div>
                            <p className='font-semibold'><small>Already registered? <Link to='/login' className='text-orange-400'> Go to log in</Link></small></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;