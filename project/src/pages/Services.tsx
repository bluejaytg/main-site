import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cloud, Code, Settings, Database, Shield, Bot, LineChart, ArrowRight, Calendar } from 'lucide-react';
import './services.css';

const services = [
  {
    icon: <Settings className="h-8 w-8" />,
    title: 'Website Rebranding',
    description: 'Professional rebranding for DIY websites with AI-powered features and automation.',
    href: '/services/website-rebranding'
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'AI Integration',
    description: 'Boost efficiency and sales with AI tools like chatbots, voice assistants, and automation.',
    href: '/services/ai-integration'
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Services',
    description: 'Secure and scalable AWS cloud solutions designed for small businesses.',
    href: '/aws-support'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Software Development',
    description: 'Enterprise-grade software solutions tailored to meet your unique needs.',
    href: '/services/software'
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics.',
    href: '/services/data-analytics'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'AI Security',
    description: 'Protect your AI systems with state-of-the-art security measures.',
    href: '/services/ai-security'
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'Chatbot Development',
    description: 'Intelligent conversational AI solutions for customer service and support.',
    href: '/services/chatbots'
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: 'AI Consulting',
    description: 'Strategic guidance on implementing AI solutions in your business.',
    href: '/services/ai-consulting'
  }
];

export function Services() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
            AI-Powered Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-cyan-800 bg-clip-text text-transparent">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Accelerate growth through intelligent automation, cloud innovation, and expert AI consulting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const isCloudService = service.title === 'Cloud Services';

            const CardContent = (
              <div
                className="group relative bg-white rounded-2xl border border-gray-100/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="p-6 space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-lg">
                    {React.cloneElement(service.icon, {
                      className: 'h-8 w-8 text-white stroke-[1.5]'
                    })}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group/cta">
                    <span className="mr-2">Explore Solution</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                  </div>
                </div>
              </div>
            );

            return isCloudService ? (
              <Link to={service.href} key={index} className="block">
                {CardContent}
              </Link>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>

        <div className="mt-20 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              AI Strategy Consultation for Small Businesses
            </h3>
            <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
              Discover practical AI applications tailored to your operations with our free 1-hour consultation
            </p>
            <a
              href="https://calendly.com/bluejaytechnologygroup/introduction-to-our-company-clone-1"
              className="inline-flex items-center px-8 py-3 bg-white hover:bg-gray-50 text-blue-600 font-bold rounded-lg shadow-md transition-all duration-300 hover:scale-105"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Free Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}