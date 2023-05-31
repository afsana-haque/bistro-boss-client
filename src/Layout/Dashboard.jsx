import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaShoppingBag } from 'react-icons/fa';
import { GoThreeBars } from "react-icons/go";
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import useCart from '../hooks/UseCart';

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] ">
                        <li><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                        <li><NavLink to='/dashboard/reservation'><FaCalendarAlt /> Reservation</NavLink></li>
                        <li><NavLink to='/dashboard/history'><FaWallet /> Payment history</NavLink></li>
                        <li>
                            <NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart <span className="badge  badge-secondary">+{cart?.length || 0}</span></NavLink>
                            
                            </li>
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