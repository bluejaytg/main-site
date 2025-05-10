import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { title: 'Services', href: '/services' },
  { title: 'Who We Help', href: '/whowehelppage' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full backdrop-blur-lg bg-white/70 border-b border-gray-100/80 z-50 transition-all duration-300 hover:bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         {/* Animated Logo */}
<Link 
  to="/" 
  className="flex items-center group space-x-2 transition-transform duration-300 hover:scale-105"
>
  <img 
    src="/images/BTG_primary_logo_fullcolor (1).png" 
    alt="Bluejay Logo"
    className="h-12 w-auto object-contain"
  />
  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
    BlueJayTech
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="relative px-3 py-2 text-gray-600 hover:text-blue-900 font-medium transition-colors
                    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-cyan-500
                    before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link
              to="/consult"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg
                       font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300
                       flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gradient-to-r from-blue-600/10 to-cyan-500/10
                       hover:from-blue-600/20 hover:to-cyan-500/20 transition-all duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
  
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-sm">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50/50
                       transition-colors duration-300 font-medium"
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/consult"
            className="block px-4 py-3 mt-2 bg-gradient-to-r from-blue-600 to-cyan-500
                     text-white rounded-lg font-semibold shadow-md"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
};
