


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  mode: 'payment',
  line_items: [
    {
      price: 'price_1RT6uLGTmN7KrpOLZbzJ1AoZ',
      quantity: 1
    }
  ],
  customer_email: email,
  success_url: 'https://bluejaytg.com/success',
  cancel_url: 'https://bluejaytg.com/cancel',
  metadata: {
    name,
    instagram,
    bookingLink
  }
});


    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ id: session.id })
    };
  } catch (err) {
    console.error('Stripe error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Checkout failed' })
    };
  }
};
