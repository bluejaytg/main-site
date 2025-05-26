import React from 'react';
import { MessageSquare, Calendar, Brain, CheckCircle } from 'lucide-react';

export function WellnessAutomationPage() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            AI-Powered Booking Automation for Wellness & Beauty Pros
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Turn Instagram DMs into confirmed client bookings — automatically.
            No bots, no spam — just done-for-you AI workflows that save you hours every week.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full mb-4">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg">DM Auto-Response</h3>
            <p className="text-sm text-gray-600 mt-2">
              Instantly reply to new DMs with a friendly message and a direct booking link.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg">Booking Integration</h3>
            <p className="text-sm text-gray-600 mt-2">
              Clients can book straight from your DMs into your calendar or booking system.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full mb-4">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg">Built with Real AI</h3>
            <p className="text-sm text-gray-600 mt-2">
              We use smart automation — not fake bots — trained to fit your brand tone.
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gradient-to-r from-green-100 to-lime-100 p-8 rounded-2xl shadow-xl mb-16">
          <h2 className="text-2xl font-bold text-green-900 mb-4">What’s Included in Your Free Setup</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 list-disc list-inside">
            <li>AI audit of your DM funnel & booking process</li>
            <li>1 automated DM-to-booking workflow installation</li>
            <li>Custom message templates tailored to your voice</li>
            <li>Live test & support to ensure it’s working</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Let’s Set Yours Up — Free</h2>
          <p className="text-md text-gray-700 max-w-xl mx-auto mb-6">
            We’re onboarding wellness professionals now. Claim your free AI automation setup today and stop letting leads go cold in your DMs.
          </p>
          <a
            href="/ai-wellness-form"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
          >
            Get My Free Setup
          </a>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-6">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <strong>Do I need to know code?</strong>
              <p>Nope. We handle everything for you.</p>
            </div>
            <div>
              <strong>Is it really free?</strong>
              <p>Yes. We’ll set up your first automation free to prove its value. If you love it, we offer paid upgrades later.</p>
            </div>
            <div>
              <strong>How long does it take?</strong>
              <p>1–2 business days after form submission.</p>
            </div>
            <div>
              <strong>Can this work for med spas or mobile beauty services?</strong>
              <p>Yes — if you take appointments via DMs or email, we can streamline it.</p>
            </div>
          </div>
        </div>

        {/* Why Bluejay */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Why Aesthetic Brands Choose Bluejay</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">We Speak Beauty + Tech</h4>
                <p className="text-sm text-gray-600">
                  Our team understands both the backend and the brand voice you need to protect.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">AWS-Powered & Secure</h4>
                <p className="text-sm text-gray-600">
                  We build on scalable cloud infrastructure that grows with your brand.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Results in Days</h4>
                <p className="text-sm text-gray-600">
                  We don’t do long-term vague retainers. You’ll see workflow results in a week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
