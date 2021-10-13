import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState} from 'react'

//use 4242424242424242 as CC, can use any future date, CCV and valid US zipcode
const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
            base: {
                iconColor: "#c4f0ff",
                color: "#fff",
                fontWeight: 500,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": { color: "#fce883" },
                "::placeholder": { color: "#87bbfd" }
            },
            invalid: {
                iconColor: "#ffc7ee",
                color: "#ffc7ee"
            }
        }
    }

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    console.log(setSuccess)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:3001/payment", {
                amount: 2000,
                id
            })

            if(response.data.success) {
                console.log("Payment successful")
                setSuccess(true)
            }
        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}
    return (
        <>
        {!success ?
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Donate</button>
        </form>
        :
        <div>
            <h2>You just donated funds! Congrats on supporting the Board Reactions team! Your contribution will help us develop more features and content!</h2>
        </div>
    }
    </>
    )
}