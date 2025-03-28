import React from 'react';

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1B263B]">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3AAFB9] focus:ring focus:ring-[#3AAFB9] focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1B263B]">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3AAFB9] focus:ring focus:ring-[#3AAFB9] focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1B263B]">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3AAFB9] focus:ring focus:ring-[#3AAFB9] focus:ring-opacity-50"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#FF007F] text-white px-6 py-3 rounded-md hover:bg-[#3AAFB9] transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}