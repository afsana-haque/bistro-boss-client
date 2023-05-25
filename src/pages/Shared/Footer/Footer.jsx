import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-neutral text-neutral-content">
                <div className=''>
                    <h3 className='text-2xl font-semibold'>CONTACT US</h3>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold'>Follow US</h3>
                    <p>Join us on social media</p>
                    <div className='grid grid-flow-col gap-4'>
                        <Link className='text-2xl'><FaFacebook/></Link>
                        <Link className='text-2xl'><FaInstagram /></Link>
                        <Link className='text-2xl'><FaTwitter /></Link>
                    </div>
                </div>

            </div>
            <div className="footer footer-center p-4 bg-black text-white">
                <div>
                    <p>Copyright © CulinaryCloud. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

{/* <div className='flex '>
<div>
    <h3>CONTACT US</h3>
    <p>123 ABS Street, Uni 21, Bangladesh</p>
    <p>+88 123456789</p>
    <p>Mon - Fri: 08:00 - 22:00</p>
    <p>Sat - Sun: 10:00 - 23:00</p>
</div>
<div>
    <h3>Follow US</h3>
    <p>Join us on social media</p>
    <p><FaFacebook/></p>
    <p><FaInstagram/></p>
    <p><FaTwitter/></p>
</div>
</div> */}