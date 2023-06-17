import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

//TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <Helmet>
                <title> Bistro Boss | Payment</title>
            </Helmet>
            <SectionTitle
                subHeading={"--- Please Process ---"}
                heading={"Payment"}
            ></SectionTitle>
            <h2 className='text-3xl'>Taka fmf fgj dss djf </h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;