import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const TestStripe = () => {
  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={token => console.log(token)}
      stripeKey="pk_test_51PpiuEBDP1vg4KifTkY71gBC5MQnp7gfxGYaeVSzrd9dWNcSr7pGKkcHrFlbgL4MBsLPyiRzYRfCR32z4uP1PyPY000Nvm8Mjg"
    >
      <button className="btn">Test Button</button>
    </StripeCheckout>
  );
};

export default TestStripe;
