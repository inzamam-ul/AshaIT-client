import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IhIfJGYqXQ5Jm4rnW1Q5aesb69sYBM5h6p37oFDsi6zFC4dKLHVisb4KthlxCPcKzqv37C69YPiFObwM6G2hAmi00klVwas6E"
);

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};

const PaymentGateWay = ({ formData }) => {
  console.log(formData);
  return (
    <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
      <CheckOutForm formData={formData} />
    </Elements>
  );
};

export default PaymentGateWay;
