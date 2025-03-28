import React from 'react';
import { Check } from 'lucide-react';

interface ValuePropProps {
  title: string;
  description: string;
}

export function ValueProposition({ title, description }: ValuePropProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1">
        <Check className="h-6 w-6 text-[#3AAFB9]" />
      </div>
      <div>
        <h4 className="font-semibold text-[#1B263B] mb-1">{title}</h4>
        <p className="text-[#707070]">{description}</p>
      </div>
    </div>
  );
}