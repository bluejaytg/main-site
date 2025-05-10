import React from 'react';
import { Cloud, Code, Brain, Settings } from 'lucide-react';

export function WhoWeHelpPage() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Who We Help</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Bluejay Technology Group, we partner with growth-focused businesses looking to scale their operations with intelligent AWS and AI solutions — without the cost or complexity of enterprise infrastructure.
          </p>
        </div>

        {/* Ideal Client Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Ideal Clients</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Small to mid-sized businesses (2–50 employees)</li>
              <li>Annual revenue between $100K–$5M</li>
              <li>Use AWS but lack a dedicated DevOps/cloud team</li>
              <li>Service-based or digital-first operations</li>
              <li>Need automation, cloud migration, or AI implementation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Industries We Serve</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Health & Wellness (clinics, med spas, holistic practices)</li>
              <li>Online Coaches & Educators (course platforms, tutors)</li>
              <li>Light E-Commerce (Shopify, Amazon, WooCommerce)</li>
              <li>Field Services (contractors, mobile professionals)</li>
            </ul>
          </div>
        </div>

        {/* Pain Points Section */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-8 rounded-2xl shadow-xl mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Common Problems We Solve</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            <li>“We’re overpaying for AWS and don’t understand the bill.”</li>
            <li>“We want to automate client communications and workflows.”</li>
            <li>“Our tech stack isn’t scalable or reliable.”</li>
            <li>“We want AI, but don’t know how to apply it to our business.”</li>
          </ul>
        </div>

        {/* Why Choose Bluejay */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Why Small Teams Choose Bluejay</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">
                <Cloud className="w-8 h-8" />
              </div>
              <h3 className="font-semibold">Simplified Cloud Solutions</h3>
              <p className="text-sm text-gray-600 mt-2">No tech jargon — just effective AWS services that work.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="font-semibold">Practical AI</h3>
              <p className="text-sm text-gray-600 mt-2">We use automation and AI where it matters most to your business.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="font-semibold">Custom Development</h3>
              <p className="text-sm text-gray-600 mt-2">From integrations to dashboards, we build what your team actually needs.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="font-semibold">Ongoing Support</h3>
              <p className="text-sm text-gray-600 mt-2">We don’t disappear after launch. We’re here for your evolution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
