import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckOutForm.css';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const CheckOutForm = ({ toyInfo, price }) => {
    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    price = Number(price.toFixed(2));

    useEffect(() => {
        if (price && price > 0) {

            fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setClientSecret(data?.clientSecret);
                })
                .catch(error => console.log(error));
        }
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('[error]', error?.message);
            setCardError(error?.message);
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true);

        // console.log(clientSecret);

        // console.log(email, name);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: toyInfo?.buyerEmail || 'unknown',
                        name: toyInfo?.buyerName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }

        console.log('paymentIntent', paymentIntent);
        setProcessing(false);

        if (paymentIntent?.status === 'succeeded') {
            setTransactionId(paymentIntent?.id);

            const newToyInfo = { ...toyInfo, quantity: 1, transactionId: paymentIntent?.id };

            const payment = {
                toyName: toyInfo?.toyName,
                email: toyInfo?.buyerEmail,
                transactionId: paymentIntent?.id,
                price: price,
                sellerName: toyInfo?.sellerName,
                sellerEmail: toyInfo?.sellerEmail
            };

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        fetch('http://localhost:5000/mycollections', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newToyInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId || data.modifiedCount > 0) {
                                    fetch(`http://localhost:5000/toys/quantity/${toyInfo?.toyId}`, {
                                        method: 'PATCH',
                                        headers: {
                                            'content-type': 'application/json',
                                        },
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.modifiedCount > 0) {
                                                Swal.fire({
                                                    position: 'top-end',
                                                    icon: 'success',
                                                    title: `Payment Successful! You successfully bought the toy!`,
                                                    showConfirmButton: false,
                                                    timer: 2500
                                                });
                                            }
                                        })
                                }
                            })
                    }
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
            <form onSubmit={handleSubmit} id="checkoutform">
                <CardElement
                    className="shadow-xl border-2 rounded-md"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-center">
                    <button type="submit" className="bg-blue-500 text-white w-3/4 h-10 mt-8 text-lg font-semibold rounded" disabled={!stripe || !clientSecret || processing}>
                        Pay Now
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-600 mt-4 ">{cardError}</p>}
            {transactionId && <p className="text-green-700 mt-4">
                Transaction complete with transactionId: {transactionId} (Wait few seconds for confirmation sweet alert)
            </p>}
        </div>
    );
};

export default CheckOutForm;