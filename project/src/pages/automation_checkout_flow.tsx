import React, { useState, ChangeEvent, FormEvent } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// ✅ Your live publishable key
const stripePromise = loadStripe('pk_live_51QMdzsGTmN7KrpOLqjDs8Up1BH17UzyIPEjVY03LP8gjc6rQh8EsytB4XJ41dNtlT0PdwZk0DJHRqE8Vi7rqeZc600NUlyPkAU');

interface FormData {
  name: string;
  email: string;
  instagram: string;
  bookingLink: string;
}

export default function AutomationCheckout(): JSX.Element {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    instagram: '',
    bookingLink: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        'https://x8x8fsino4.execute-api.us-east-1.amazonaws.com/dev/createStripeCheckout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        }
      );

      const session = await response.json();
      const stripe = await stripePromise;
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: session.id });
      }
    } catch (error) {
      console.error('Checkout error:', error);
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Done-for-You AI Automation Setup</h2>
        <p className="text-gray-600 mb-8 text-center">
          Fill out your info and get your AI DM automation delivered within 48 hours.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="instagram"
            placeholder="Instagram Handle"
            value={form.instagram}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="url"
            name="bookingLink"
            placeholder="Booking Link (Calendly, etc.)"
            value={form.bookingLink}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            {loading ? 'Processing...' : 'Checkout & Launch Setup'}
          </button>
        </form>
        {submitted && <p className="text-green-600 mt-4">Redirecting to payment...</p>}
      </div>
    </section>
  );
}
