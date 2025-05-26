import React from 'react';
import { Brain, Mail, Phone, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Bluejay Technology Group
              </span>
            </div>
            <p className="text-sm text-blue-200">
              Empowering businesses with AI-driven innovation and cloud solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bluejay-technology-group-482393268"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/bluejaytechnologygroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="/about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-200">contact@bluejaytg.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-200">+1 (913) 890-3426</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">AI Insights</h3>
            <p className="text-sm text-blue-200 mb-4">
              Get the latest AI trends and business automation tips.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-300 focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <div className="text-sm text-blue-300">
            <p>&copy; {new Date().getFullYear()} Bluejay Technology Group. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
