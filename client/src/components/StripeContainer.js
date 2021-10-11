import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'

const PUBLIC_KEY = "pk_test_51JjEXYAm84GzBXtjvTPkq6GlMGxhpKWgmCAH7z9PuqIhWC8CqIUxNI6DXNXq7Zp6VTN7s3fXzXwYTSjciBWPAVQ100dDaehVVx"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return {
        <Elements stripe ={stripeTestPromise}>
            <PaymentForm />

        </Elements>
    }
}