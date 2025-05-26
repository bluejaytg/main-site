// pages/Success.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function SuccessPage(): JSX.Element {
  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-20">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>
        <p className="text-lg text-green-800 mb-6">
          Thanks for purchasing your AI automation setup. Our team is already reviewing your submission and will start building your automation shortly.
        </p>
        <p className="text-md text-green-900 mb-6">
          You’ll receive a confirmation email soon. If you submitted your Instagram and booking link, you’re all set.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
