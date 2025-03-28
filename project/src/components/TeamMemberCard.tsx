import React from 'react';

interface TeamMemberCardProps {
  role: string;
  image: string;
  bio: string;
}

export function TeamMemberCard({ role, image, bio }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <img
        src={image}
        alt={role}
        className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-bold text-[#1B263B] mb-2">{role}</h3>
      <p className="text-sm text-[#707070]">{bio}</p>
    </div>
  );
}
