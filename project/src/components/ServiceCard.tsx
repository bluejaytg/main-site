import React, { ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';

// Define the ServiceCard type directly in this file or import it from your types file
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactElement; // Accepts React elements for the icon
  href: string;
}

// Functional Component
export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      {/* Icon */}
      <div className="text-[#3AAFB9] mb-4">{icon}</div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 text-[#1B263B]">{title}</h3>
      
      {/* Description */}
      <p className="text-[#707070] mb-4">{description}</p>
      
      {/* Link */}
      <a href={href} className="text-[#3AAFB9] hover:text-[#FF007F] inline-flex items-center">
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
}
