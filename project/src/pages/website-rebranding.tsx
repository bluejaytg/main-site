import React from 'react';
import {
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  CogIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export function WebsiteRebranding() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Website Rebranding & AI Integration
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Transform your online presence with a fresh look and smart AI-driven experiences.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Rebrand Your Website for the Future
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12">
            In today’s digital landscape, a modern and dynamic website is essential. Our website rebranding service combines innovative design with cutting-edge AI tools to create an engaging, personalized user experience that drives results.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our 6-Step Rebranding Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <ChartBarIcon className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold">Step 1: Analyze & Strategize</h3>
              </div>
              <p className="text-gray-600">
                Conduct a comprehensive review of your current website, target audience, and competitors. Identify key areas for improvement and pinpoint opportunities where AI can boost personalization and performance.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <LightBulbIcon className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold">Step 2: Define Your Brand Identity</h3>
              </div>
              <p className="text-gray-600">
                Revamp your visual identity with new logos, color schemes, and typography that resonate with your audience. Integrate AI to dynamically tailor content and imagery based on user behavior.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <CogIcon className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold">Step 3: Redesign & Optimize</h3>
              </div>
              <p className="text-gray-600">
                Reorganize your website’s structure for intuitive navigation and enhanced usability. Leverage AI-driven insights to optimize page layouts and boost user engagement.
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <ChatBubbleLeftRightIcon className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold">Step 4: Content Overhaul</h3>
              </div>
              <p className="text-gray-600">
                Refresh your content with compelling, SEO-optimized copy that speaks to your target market. Use AI tools to analyze performance metrics and suggest real-time improvements.
              </p>
            </div>
            {/* Step 5 */}
            <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <ChartBarIcon className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold">Step 5: Integrate AI Tools</h3>
              </div>
              <p className="text-gray-600">
                Enhance your website with advanced AI features—chatbots, personalized recommendations, and automated analytics—to deliver a tailored, intuitive experience to every visitor.
              </p>
            </div>
            {/* Step 6 */}
            <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <CogIcon className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold">Step 6: Launch & Iterate</h3>
              </div>
              <p className="text-gray-600">
                Test your rebranded website across devices and browsers before launch. Use AI-powered analytics post-launch to continuously optimize the user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Rebrand Your Website?
          </h2>
          <p className="text-lg mb-8">
            Transform your online presence with a modern design and smart AI integrations that deliver a personalized user experience.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
