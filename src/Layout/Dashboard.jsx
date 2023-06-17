import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaShoppingBag ,FaUtensils, FaBook, FaUsers} from 'react-icons/fa';
import { GoThreeBars } from "react-icons/go";
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import useCart from '../hooks/UseCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();

    //TODO: load data from the server to have dynamic isAdmin based on data
    //const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-blue-200 ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 ">

                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/home'><FaHome /> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><FaUtensils/> Add items</NavLink></li>
                                <li><NavLink to='/dashboard/manageItems'><FaWallet /> Manage items</NavLink></li>
                                <li><NavLink to='/dashboard/bookings'><FaBook /> Manage bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers /> All Users</NavLink></li>
                              
                            </> : <>
                                <li><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt /> Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet /> Payment history</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart <span className="badge  badge-secondary">+{cart?.length || 0}</span></NavLink>

                                </li>
                            </>
                        }


                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                        <li><NavLink to='/menu'><GoThreeBars /> Our Menu</NavLink></li>
                        <li><NavLink to='/order/salad'><FaShoppingBag /> Order Food</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;