import React from 'react';
import { useLocation } from 'wouter';
import Navbar from '@/components/Navbar';

export default function Calculator() {
  const [location, navigate] = useLocation();

  return (
    <>
      <Navbar />
      <iframe 
        src="/Calculator.html" 
        className="w-full h-screen border-0"
        title="Apollo Solar Calculator"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
      />
    </>
  );
}
