import React from "react";
import { Mail } from "lucide-react";
import { ContactForm } from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-[#F4F4F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1B263B] mb-4">Contact Us</h1>
          <p className="text-xl text-[#707070] max-w-2xl mx-auto">
            Get in touch to discuss how we can help transform your business.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#1B263B] mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#3AAFB9]" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-[#707070]">contact@bluejaytg.com</p>
                </div>
              </div>
            </div>

            {/* Book a Consultation */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#1B263B] mb-6">Book a Consultation</h2>
              <p className="text-[#707070] mb-4">
                Schedule a free consultation with our AI experts to discuss your needs and goals.
              </p>
              <a
                href="https://calendly.com/bluejaytechnologygroup/introduction-to-our-company-clone-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#3AAFB9] text-white px-6 py-3 rounded-md hover:bg-[#FF007F] transition-colors"
              >
                Schedule Meeting
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#1B263B] mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;  