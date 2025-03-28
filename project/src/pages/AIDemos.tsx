import React from 'react';
import { Bot, Image, FileText, Mic } from 'lucide-react';

export function AIDemos() {
  const demos = [
    {
      title: 'Conversational AI',
      description: 'Interact with our intelligent chatbot designed to enhance customer experiences.',
      icon: <Bot className="h-12 w-12 text-[#3AAFB9]" />,
      comingSoon: false
    },
    {
      title: 'Image Recognition',
      description: 'Witness our AI-powered computer vision technology in action.',
      icon: <Image className="h-12 w-12 text-[#3AAFB9]" />,
      comingSoon: true
    },
    {
      title: 'Text Analysis',
      description: 'Explore our advanced natural language processing capabilities.',
      icon: <FileText className="h-12 w-12 text-[#3AAFB9]" />,
      comingSoon: true
    },
    {
      title: 'Speech Recognition',
      description: 'Test how our AI transforms speech into actionable insights.',
      icon: <Mic className="h-12 w-12 text-[#3AAFB9]" />,
      comingSoon: true
    }
  ];

  return (
    <div className="py-20 bg-[#F4F4F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1B263B] mb-4">AI Demos</h1>
          <p className="text-xl text-[#707070] max-w-2xl mx-auto">
            Explore how our AI solutions can transform your business. Engage with live demos or get a sneak peek of upcoming innovations.
          </p>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {demos.map((demo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Demo Icon */}
              <div className="flex items-center justify-center mb-6">
                {demo.icon}
              </div>

              {/* Demo Title */}
              <h3 className="text-2xl font-semibold text-center text-[#1B263B] mb-4">
                {demo.title}
              </h3>

              {/* Demo Description */}
              <p className="text-[#707070] text-center mb-6">{demo.description}</p>

              {/* Action Section */}
              <div className="text-center">
                {demo.comingSoon ? (
                  <span className="inline-block bg-gray-200 text-gray-600 px-4 py-2 rounded-full font-medium">
                    Coming Soon
                  </span>
                ) : (
                  <button className="bg-[#3AAFB9] text-white px-6 py-2 rounded-md hover:bg-[#FF007F] transition-colors">
                    Try Demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
