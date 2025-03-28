import React from 'react';

export function NewsletterSignup() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-[#1B263B] mb-4">Stay Updated</h3>
      <p className="text-[#707070] mb-6">
        Get the latest insights on AI technology and cloud solutions delivered to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:border-[#3AAFB9] focus:ring focus:ring-[#3AAFB9] focus:ring-opacity-50"
        />
        <button
          type="submit"
          className="bg-[#FF007F] text-white px-6 py-2 rounded-md hover:bg-[#3AAFB9] transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}