import React from 'react';
import { TeamMemberCard } from '../components/TeamMemberCard';
import './about.css'

const teamMembers = [
  {
    role: 'Chief AI Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    bio: 'Ph.D. in Machine Learning with 15+ years of experience in AI research and development.'
  },
  {
    role: 'Cloud Architecture Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    bio: 'Expert in cloud infrastructure with a track record of successful enterprise deployments.'
  },
  {
    role: 'Head of Innovation',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    bio: 'Leading our R&D initiatives in artificial intelligence and emerging technologies.'
  },
  {
    role: 'Solutions Architect',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    bio: 'Specialized in creating custom AI solutions for enterprise clients.'
  }
];

export function About() {
  return (
    <div className="py-20 bg-[#F4F4F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1B263B] mb-4">About Us</h1>
          <p className="text-xl text-[#707070] max-w-2xl mx-auto">
            Leading the future of AI innovation and cloud technology
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="prose max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Our Mission</h2>
          <p className="text-[#707070] mb-8">
            At Bluejay Technology Group, we're dedicated to making artificial intelligence accessible
            and practical for businesses of all sizes. Our mission is to bridge the gap between
            cutting-edge AI technology and real-world business applications.
          </p>

          <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Our Vision</h2>
          <p className="text-[#707070] mb-8">
            We envision a future where AI enhances every aspect of business operations, making
            companies more efficient, innovative, and competitive in the global marketplace.
          </p>
        </div>

        {/* Team Section
        <h2 className="text-3xl font-bold text-center text-[#1B263B] mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              role={member.role}
              image={member.image}
              bio={member.bio}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
