import React from 'react';
import { Cloud, CheckCircle, Settings, ArrowRight } from 'lucide-react';

export function AwsCloudSupportPage() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            AWS Cloud Support for Small Businesses
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Empower your business with flexible, cost-efficient, and scalable AWS solutions. Whether you're just getting started or growing fast, we simplify the cloud for small teams.
          </p>
          <div className="mt-8">
            <a
              href="/consult"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              Book a Free AWS Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex items-start space-x-4">
            <Cloud className="w-10 h-10 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">AWS Setup & Migration</h3>
              <p className="text-gray-600 text-sm">
                We handle your migration and environment setup so you can get to work faster.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Settings className="w-10 h-10 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Cost Optimization</h3>
              <p className="text-gray-600 text-sm">
                Stop overspending. We analyze your bill and optimize your usage with automation.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="w-10 h-10 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Managed Support</h3>
              <p className="text-gray-600 text-sm">
                Focus on growth while we handle monitoring, backups, and performance tuning.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-100 to-cyan-100 p-8 rounded-2xl shadow-md">
          <p className="text-lg italic text-blue-800 max-w-3xl mx-auto">
            "Bluejay helped us cut our AWS bill by 30% and automated our backups across regions. As a small team, we couldn’t have done it without their support."
          </p>
          <div className="mt-4 text-right text-sm text-gray-600">— Carla Simmons, Founder of FitWell Retreats</div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to make AWS work for you?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Let's build a future-proof cloud strategy tailored for your business.
          </p>
          <a
            href="/consult"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
            Start Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}