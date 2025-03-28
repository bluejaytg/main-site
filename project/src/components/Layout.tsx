import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4F4F9]">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}