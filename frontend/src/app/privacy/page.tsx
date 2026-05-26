'use strict';
'use client';

import React from 'react';
import { ShieldCheck, EyeOff, Lock, Scale, FileText } from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      icon: <EyeOff className="text-brand-500" size={20} />,
      title: 'Anti-Doxxing Covenant',
      desc: 'CallNexa does not operate as an identity index. Unlike public reverse directories, our database is engineered to block the lookup of individual names, residential addresses, social profiles, or private emails linked to phone numbers.'
    },
    {
      icon: <Lock className="text-brand-500" size={20} />,
      title: 'Personal Identifiable Information (PII) Shield',
      desc: 'We store technical caller metadata only: signaling status, origin country, registered network carrier, routing type (VOIP vs mobile), search counts, and aggregate spam reports. Zero personal profiles are generated or kept.'
    },
    {
      icon: <Scale className="text-brand-500" size={20} />,
      title: 'Safe and Ethical Data Aggregation',
      desc: 'Community report inputs (e.g. flagging a number as telemarketing or phishing) are filtered to remove any personal information. We analyze numbers on a purely behavioral level (call frequency indicators, routing pool anomalies).'
    },
    {
      icon: <ShieldCheck className="text-brand-500" size={20} />,
      title: 'Third-Party API Integrations',
      desc: 'NumLookupAPI connections are piped securely through our backend server. No API keys or vendor endpoints are exposed to the browser client, preventing metadata eavesdropping or unauthorized scraping.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 flex flex-col gap-12">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto flex flex-col gap-3">
        <div className="bg-brand-50 text-brand-700 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full inline-block mx-auto">
          Compliance & Ethics
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
          Privacy Policy & Ethical Charter
        </h1>
        <p className="text-sm text-gray-500 font-normal">
          Last updated: May 2026. Review our commitment to secure, non-identifying caller spam intelligence.
        </p>
      </div>

      {/* Main Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((sec, idx) => (
          <div key={idx} className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm flex flex-col gap-3">
            <div className="bg-brand-50 text-brand-600 p-2.5 rounded-xl w-fit">
              {sec.icon}
            </div>
            <h3 className="font-heading font-bold text-base text-gray-900">
              {sec.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed font-normal">
              {sec.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Detailed policy breakdown */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-6 font-sans">
        
        <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
          <FileText size={18} className="text-brand-500" />
          <h2 className="font-heading font-bold text-gray-800 text-lg">
            Operational Telemetry & API Usage
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-xs text-gray-600 leading-relaxed font-normal">
          <h4 className="font-heading font-bold text-sm text-gray-800">1. Data Collected Automatically</h4>
          <p>
            When a number query is made, we transmit the phone string to our secure APIs to check validity, country, carrier name, and routing network. We log the timestamp of the query and increment a search counter in our cache so that repeated checks do not consume API limits.
          </p>
          
          <h4 className="font-heading font-bold text-sm text-gray-800">2. Community Reports & Flagging Logs</h4>
          <p>
            If a visitor reports a number as suspicious, they supply a classification reason (e.g. phishing, telemarketing) and optional text logs. This submission is stored in our database and used to adjust the number's spam score. Users are prohibited from submitting private names, addresses, or identifiers in the optional comments box. All comments are programmatically sanitized.
          </p>

          <h4 className="font-heading font-bold text-sm text-gray-800">3. Information Disclosures & Partners</h4>
          <p>
            We do not sell caller metadata or community reports to third-party data brokers. Aggregate threat volumes and generic risk distributions may be shared with threat researcher networks and security developers for the purpose of global scam prevention.
          </p>

          <h4 className="font-heading font-bold text-sm text-gray-800">4. Opt-Out & Number Censorship</h4>
          <p>
            Although CallNexa does not index private personal profiles, individuals may request to have their phone numbers toggled to a "Private/Do Not Track" status inside our lookup index, disabling community flags and metrics searches for that number. To submit an opt-out, contact prashobhmanojnair@gmail.com.
          </p>
        </div>

      </div>

    </div>
  );
}
