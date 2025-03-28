import React from 'react';
import { ArrowRight, Brain, Calendar, Cloud, Code, Settings } from 'lucide-react';
import { TestimonialCard } from '../components/TestimonialCard';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { ValueProposition } from '../components/ValueProposition';
import './Home.css';
import { MagnifyingGlassIcon, PencilSquareIcon, CodeBracketIcon, CloudArrowUpIcon } from '@heroicons/react/16/solid';

const testimonials = [
  {
    quote:
      "Bluejay Tech transformed our customer service with their AI solution. Response times improved by 80%.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "Global Retail Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
  },
  {
    quote:
      "Their cloud migration expertise helped us modernize our infrastructure seamlessly.",
    author: "Michael Chang",
    role: "Director of IT",
    company: "FinTech Solutions",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    quote:
      "Bluejay redesigned our Wix store and integrated AI chatbots. Our sales increased by 50% in three months!",
    author: "Jane Doe",
    role: "Owner",
    company: "Cozy Candle Co.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=800",
  },
];

const valueProps = [
  {
    title: "Cutting-edge AI Solutions",
    description: "Boost efficiency and sales with AI tools like chatbots and automation.",
    icon: <Brain /> // Add an actual icon component
  },
  {
    title: "Seamless Integration",
    description: "Enhance your e-commerce platform with advanced features.",
    icon: <Cloud />
  },
  {
    title: "Scalable Architecture",
    description: "Cloud solutions that adapt as your business grows.",
    icon: <Code />
  },
  {
    title: "Expert Support",
    description: "24/7 guidance for AI, cloud, and website management.",
    icon: <Settings />
  }
];


const services = [
  {
    title: "AI Chatbots",
    description: "Automate customer interactions with AI-driven chatbots.",
    icon: <Brain />, 
    link: "/ai-chatbots"
  },
  {
    title: "Cloud Solutions",
    description: "Migrate and scale your business in the cloud seamlessly.",
    icon: <Cloud />,
    link: "/cloud-services"
  },
  {
    title: "Custom Development",
    description: "Tailor-made AI solutions for your business needs.",
    icon: <Code />,
    link: "/custom-development"
  },
  {
    title: "Automation Tools",
    description: "Optimize operations with AI-powered automation.",
    icon: <Settings />,
    link: "/automation-tools"
  }
];


export function HomePage() {
  return (
    <>
      {/* Hero Section */}
<section className="relative h-screen bg-cover bg-center overflow-hidden">
  {/* Animated Background */}
  <div 
    className="absolute inset-0 bg-blue-600/80 animate-scale-in"
    style={{ 
      backgroundImage: "url('https://source.unsplash.com/1920x1080/?technology,ai')",
      backgroundBlendMode: 'multiply',
      animation: 'scaleIn 20s infinite alternate'
    }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-indigo-900/60"></div>
  </div>

  {/* Content Container */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <div className="max-w-4xl space-y-8 animate-fade-in-up">
      {/* Animated Badge */}
      <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium text-white/90 animate-slide-in">
        <span className="mr-2">🚀</span> Pioneering Tomorrow's Tech Today
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 leading-tight">
        <span className="block mb-4">Bluejay</span>
        <span className="text-white">Tech Innovations</span>
      </h1>

      {/* Subtext with Glassmorphism */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
        <p className="text-lg md:text-2xl text-gray-200 font-light mb-8">
          Transformative AI Solutions for the <span className="text-cyan-300">Digital Frontier</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Launch Your Future →
          </a>
          <a
            href="/contact"
            className="px-8 py-4 border-2 border-cyan-400/50 hover:border-cyan-400 rounded-xl text-cyan-300 hover:text-white font-semibold shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            Explore Solutions
          </a>
        </div>
      </div>
    </div>
    

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 animate-bounce">
      <div className="w-8 h-8 border-4 border-cyan-400 rounded-full"></div>
    </div>
  </div>
</section>

      {/* Services Section */}
<section className="relative py-20 bg-gradient-to-b from-blue-50/30 to-white/50">
  {/* Geometric background pattern */}
  <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16 space-y-4">
      <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
        AI-Driven Solutions
      </span>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-cyan-800 bg-clip-text text-transparent">
        Transform Your Business with AI
      </h2>
    </div>
    

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div 
          key={index}
          className="group relative bg-white rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          
          <div className="p-6 space-y-4">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-lg">
              {React.cloneElement(service.icon, { 
                className: "h-8 w-8 text-white stroke-[1.5] group-hover:scale-110 transition-transform" 
              })}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
            <a
              href={service.link}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group/cta"
            >
              <span className="mr-2">Explore AI Solutions</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Quick Contact Form Section */}
<section className="py-16 bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-800 bg-clip-text text-transparent mb-4">
      Let's Build Your AI Future
    </h2>
    <p className="text-lg text-gray-600 mb-8">
      Get a free consultation and discover how AI can transform your business.
    </p>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
      />
      <select
        className="col-span-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
      >
        <option value="">What are you looking for?</option>
        <option value="ai-integration">AI Integration</option>
        <option value="cloud-solutions">Cloud Solutions</option>
        <option value="software-development">Software Development</option>
        <option value="consulting">AI Consulting</option>
      </select>
      <button
        type="submit"
        className="col-span-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        Get Free Consultation
      </button>
    </form>
    <p className="text-sm text-gray-500 mt-4">
      We'll never share your information. Unsubscribe anytime.
    </p>
  </div>
</section>

{/* Unified About & Value Proposition Section */}
<section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
    {/* About Section */}
    <div className="space-y-8">
      <div className="inline-block bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm">
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          AI Innovators Since 2020
        </span>
      </div>
      <h2 className="text-4xl font-bold">Pioneering AI Solutions for SMBs</h2>
      <p className="text-lg text-blue-100 leading-relaxed">
        At Bluejay Tech, we demystify AI for small businesses, creating customized solutions that drive real results. 
        Our unique blend of technical expertise and business acumen ensures you get practical AI tools that integrate 
        seamlessly with your operations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/about"
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
        >
          Our AI Journey →
        </a>
        <a
          href="/casestudies"
          className="px-8 py-3 border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-300 hover:text-white rounded-lg font-bold transition-all"
        >
          Client Success Stories
        </a>
      </div>
    </div>

    {/* Why Choose Us */}
    <div className="space-y-8">
      <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-6">Why Partner With Us</h3>
        <div className="space-y-6">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 group transition-all hover:bg-white/5 p-4 rounded-xl"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors">
                {prop.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg">{prop.title}</h4>
                <p className="text-blue-100 text-sm">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
          <div className="text-3xl font-bold text-cyan-400">200+</div>
          <div className="text-sm">AI Implementations</div>
        </div>
        <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
          <div className="text-3xl font-bold text-cyan-400">98%</div>
          <div className="text-sm">Client Retention</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* AI-Driven Development Section */}
<section className="py-20 bg-gradient-to-b from-blue-50/30 to-white/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg mb-4">
        AI-Powered Development
      </span>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-cyan-800 bg-clip-text text-transparent">
        Smarter Software Development
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
        Our AI-enhanced process delivers faster, smarter, and more reliable solutions
      </p>
    </div>

    {/* Process Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Step 1 */}
      <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="p-6 space-y-4">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-lg">
            <MagnifyingGlassIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">AI Discovery</h3>
          <p className="text-gray-600 text-sm">
            Intelligent analysis of your business needs and market trends
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="p-6 space-y-4">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-lg">
            <PencilSquareIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">AI Design</h3>
          <p className="text-gray-600 text-sm">
            Smart prototyping and UI/UX optimization
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="p-6 space-y-4">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-lg">
            <CodeBracketIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">AI Development</h3>
          <p className="text-gray-600 text-sm">
            Automated coding and intelligent testing
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="p-6 space-y-4">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-lg">
            <CloudArrowUpIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">AI Deployment</h3>
          <p className="text-gray-600 text-sm">
            Continuous learning and performance optimization
          </p>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <a
        href="/process"
        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        <span>Explore Our Process</span>
        <ArrowRight className="h-5 w-5 ml-2" />
      </a>
    </div>
  </div>
</section>

      {/* Interactive Demo Preview
      <section className="py-16 bg-primary text-light">
        <div className="container mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience AI in Action</h2>
          <p className="text-lg mb-8">
            Try our interactive demos and discover how AI can transform your business operations.
          </p>
          <a href="/ai-demos" className="btn-primary inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition">
            Explore AI Demos
          </a>
        </div>
      </section> */}

      {/* Testimonials
      <section className="py-16 bg-secondary text-light">
        <div className="container mx-auto px-6 sm:px-12">
          <h2 className="section-title text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter & CTA Section */}
<section className="relative py-20 bg-gradient-to-br from-blue-900 to-cyan-900 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Consultation CTA */}
    <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
      <div className="absolute -top-6 -right-6 bg-cyan-400/20 w-24 h-24 rounded-full blur-2xl"></div>
      <h2 className="text-3xl font-bold text-white mb-4">
        Ready to Transform Your Business?
      </h2>
      <p className="text-blue-100 mb-6">
        Schedule your free AI consultation today and discover how our solutions can drive your business forward.
      </p>
      <a
        href="/contact"
        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        <Calendar className="h-5 w-5 mr-2" />
        Book Free Consultation
      </a>
    </div>

    {/* Newsletter */}
    <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
      <div className="absolute -bottom-6 -left-6 bg-blue-400/20 w-24 h-24 rounded-full blur-2xl"></div>
      <h2 className="text-3xl font-bold text-white mb-4">
        Stay Ahead with AI Insights
      </h2>
      <p className="text-blue-100 mb-6">
        Get monthly updates on AI trends, business automation, and exclusive offers.
      </p>
      <form className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:ring-2 focus:ring-cyan-400 outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          Subscribe
        </button>
      </form>
      <p className="text-blue-200/80 text-sm mt-3">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  </div>
</section>
    </>
  );
}
