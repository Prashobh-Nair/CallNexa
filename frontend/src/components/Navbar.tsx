'use strict';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldAlert, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Lookup', path: '/lookup' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-200/50 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-500 text-white p-2 rounded-xl shadow-md shadow-brand-500/20 group-hover:bg-brand-600 transition-colors">
            <ShieldAlert size={20} className="stroke-[2.5]" />
          </div>
          <span className="font-heading font-extrabold text-2xl tracking-tight text-gray-900 group-hover:text-brand-600 transition-colors">
            Call<span className="text-brand-500">Nexa</span>
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path}
                className={`font-medium text-sm transition-colors relative py-1 ${
                  isActive 
                    ? 'text-brand-500' 
                    : 'text-gray-600 hover:text-brand-500'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA BUTTON */}
        <div className="hidden md:block">
          <Link href="/lookup">
            <button className="bg-gray-900 hover:bg-brand-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:shadow-brand-500/10 flex items-center gap-2 transition-all duration-300 group">
              Start Lookup
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg overflow-hidden"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-semibold text-base py-2 border-b border-gray-50 transition-colors ${
                    isActive ? 'text-brand-500' : 'text-gray-600 hover:text-brand-500'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/lookup" onClick={() => setIsOpen(false)} className="w-full mt-2">
              <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors">
                Start Free Lookup
                <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
