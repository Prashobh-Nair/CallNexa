'use strict';
'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Globe, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-gray-100">
          
          {/* Brand Bio */}
          <div className="md:col-span-1.5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-brand-500 text-white p-2 rounded-xl">
                <ShieldCheck size={18} className="stroke-[2.5]" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-gray-900">
                Call<span className="text-brand-500">Nexa</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              CallNexa is an investor-ready, privacy-first caller intelligence platform powered by AI. We protect communities from scam, phishing, and robocalls without exposing personal identity.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Lock size={12} />
                <span>No Personal Identity Exposure (PII-free)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck size={12} />
                <span>GDPR & CCPA Compliant API Standards</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 text-sm tracking-wide uppercase mb-4">
              Platform
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-gray-500 hover:text-brand-500 transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/lookup" className="text-sm text-gray-500 hover:text-brand-500 transition-colors">
                  Caller Lookup
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-brand-500 transition-colors">
                  Mission & About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-brand-500 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 text-sm tracking-wide uppercase mb-4">
              Trust & Legal
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-brand-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-400 cursor-not-allowed">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400 cursor-not-allowed">
                  API License Agreement
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400 cursor-not-allowed">
                  Ethical Code of Conduct
                </span>
              </li>
            </ul>
          </div>

          {/* Contact info & Status */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 text-sm tracking-wide uppercase mb-4">
              Corporate Info
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Mail size={14} className="text-brand-500" />
                <span>prashobhmanojnair@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Globe size={14} className="text-brand-500" />
                <span>Global Threat Database v2.4</span>
              </li>
              <li className="mt-2">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-medium border border-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  API Gateways Operational
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} CallNexa Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with 💙 for Digital Cybersecurity & Spam Prevention
          </p>
        </div>

      </div>
    </footer>
  );
}
