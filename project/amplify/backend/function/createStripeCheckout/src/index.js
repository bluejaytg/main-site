


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // use env var for security

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const { name, email, instagram, bookingLink } = data;

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
        name: name || '',
        instagram: instagram || '',
        bookingLink: bookingLink || ''
      }
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST'
      },
      body: JSON.stringify({ id: session.id })
    };

  } catch (err) {
    console.error('Stripe error:', err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST'
      },
      body: JSON.stringify({ error: 'Checkout failed' })
    };
  }
};
