// Optimized Consult Page for Conversions
import React from 'react';
import { Calendar } from 'lucide-react';

export const Consult = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-800 to-cyan-600 text-transparent bg-clip-text mb-6">
          Book a Consulting Call
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Get expert guidance on AI prompt engineering, automation strategy, and cloud architecture—plus access to exclusive Eventbrite class offers.
        </p>

        <a
          href="https://calendly.com/bluejaytechnologygroup/introduction-to-our-company-clone-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105"
        >
          <Calendar className="h-5 w-5" />
          Book a Free Discovery Call
        </a>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Prompt Engineering Strategy Call",
            description: "Book a 30-minute session to prepare your business or team for AI. Includes audit and tailored recommendations."
          },
          {
            title: "Cloud Architecture Audit",
            description: "Already on AWS or migrating soon? Let’s audit your stack for performance, security, and cost savings."
          },
          {
            title: "AI Demo Walkthrough",
            description: "We’ll walk you through a custom GPT/automation use case to show what’s possible for your workflows."
          },
          {
            title: "Private Team Workshops",
            description: "Bring our Eventbrite training to your team in a private session with tailored examples and hands-on coaching."
          }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="https://calendly.com/bluejaytechnologygroup/introduction-to-our-company-clone-1"
          className="inline-block px-8 py-3 border-2 border-cyan-500 text-cyan-700 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};
