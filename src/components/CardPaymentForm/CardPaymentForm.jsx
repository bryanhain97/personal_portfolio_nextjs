import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51KWQn4BU58LFQRGJhygnRUHbjcHl7r9hY1ziNjV50AgIyJyQXwaVMrECs9T7y0aq0ABAgLrqPsybQvYYSpb80uoo00FJu2Penm')

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        const homepageURL = window.location.href;
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        console.log(cardElement)
        window.location = homepageURL;
    }
    return (
        <>
            <form action="/" className="form-element" onSubmit={handleSubmit}>
                <label htmlFor="card-element">Card</label>
                <CardElement id="card-element" />
                <button type="submit">Pay</button>
            </form>
        </>
    );
}

const CardPaymentForm = () => {
    return (
        <section className="section section4">
            <h1>Card payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </section>
    )
}

export default CardPaymentForm