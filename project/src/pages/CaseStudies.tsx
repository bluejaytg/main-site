import React from 'react';
import { CaseStudyCard } from '../components/CaseStudyCard';
import './casestudies.css'

const caseStudies = [
  {
    title: 'Website Rebranding for E-Commerce',
    description:
      'Revamped the online store of a small business, integrating AI-powered chatbots and improving customer experience.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tags: ['Rebranding', 'E-Commerce', 'AI']
  },
  {
    title: 'AI-Powered Customer Service',
    description: 'How we helped a major retailer reduce response times by 80% using AI chatbots.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    tags: ['AI', 'Chatbot', 'Retail']
  },
  {
    title: 'Cloud Migration Success',
    description:
      'Seamless migration of legacy systems to cloud infrastructure for a financial institution.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    tags: ['Cloud', 'Finance', 'Migration']
  },
  {
    title: 'Predictive Analytics Platform',
    description:
      'Building a predictive maintenance system for a manufacturing company.',
    image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Analytics', 'Manufacturing', 'AI']
  },
  {
    title: 'AI Integration in Healthcare',
    description:
      'Implementing AI-driven diagnosis assistance for a healthcare provider.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tags: ['Healthcare', 'AI', 'Integration']
  },
  {
    title: 'Custom Software for Education',
    description:
      'Developed a user-friendly learning management system for an education provider.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tags: ['Software', 'Education', 'Custom Development']
  }
];

export function CaseStudies() {
  return (
    <div className="py-20 bg-[#F4F4F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1B263B] mb-4">Case Studies</h1>
          <p className="text-xl text-[#707070] max-w-2xl mx-auto">
            Discover how we’ve transformed businesses with tailored AI, cloud, and software solutions.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
}
