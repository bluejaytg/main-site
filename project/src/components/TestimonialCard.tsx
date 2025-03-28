import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export function TestimonialCard({ quote, author, role, company, image }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={image}
          alt={author}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-[#1B263B]">{author}</h4>
          <p className="text-[#3AAFB9] text-sm">{role}</p>
          <p className="text-[#707070] text-sm">{company}</p>
        </div>
      </div>
      <p className="text-[#707070] italic">"{quote}"</p>
    </div>
  );
}