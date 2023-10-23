"use client";

import { useState, useEffect } from "react";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [toyInfo, setToyInfo] = useState({});

    useEffect(() => {
        setToyInfo(JSON.parse(localStorage.getItem("toyInfo")));
    }, []);


    return (
        <div className="py-24 w-full h-[620px] bg-yellow-100">
            <h4 className="text-2xl font-semibold text-center mt-16 mb-10">Make Your Payment</h4>
            <div className="flex justify-center">
                {
                    <Elements stripe={stripePromise}>
                        <CheckOutForm toyInfo={toyInfo} price={(+toyInfo?.price) + (+((toyInfo?.price * 0.5)/100))} />
                    </Elements>
                }
            </div>
        </div >
    );
};

export default Payment;