'use strict';
'use client';

import React from 'react';
import { Shield, Lock, Eye, CheckCircle, Award, Compass, MessageSquare, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const pillars = [
    {
      icon: <Lock className="text-brand-500" size={24} />,
      title: 'Zero Private PII Mapping',
      desc: 'We do not resolve caller names, residential addresses, or private profiles. Your personal identity remains absolute and unmapped in our registries.'
    },
    {
      icon: <Shield className="text-brand-500" size={24} />,
      title: 'Signal Hops Analysis',
      desc: 'Our neural networks audit raw technical parameters—such as VOIP carrier pools, signal hop counts, and active call rates—to spot threat indicators.'
    },
    {
      icon: <Compass className="text-brand-500" size={24} />,
      title: 'Community Safety Shield',
      desc: 'We crowd-source spam and scam reports dynamically, pooling active reports to recalibrate threat factors within seconds.'
    },
    {
      icon: <Award className="text-brand-500" size={24} />,
      title: 'Investor-Ready Compliance',
      desc: 'Designed with robust compliance parameters in mind, mapping onto standard GDPR and CCPA policies regarding caller metadata.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 flex flex-col gap-20">
      
      {/* Intro Banner */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <div className="bg-brand-100 text-brand-700 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mx-auto">
          Our Manifesto
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-gray-900 tracking-tight">
          Protecting Communications, <br />
          <span className="text-brand-500">Preserving Privacy</span>
        </h1>
        <p className="text-gray-500 text-base md:text-lg font-normal leading-relaxed mt-2">
          At CallNexa, we believe caller security should not come at the cost of personal data exposure. We built an AI-driven caller intelligence ecosystem centered on signal integrity, not personal doxxing.
        </p>
      </section>

      {/* Grid Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar, idx) => (
          <div 
            key={idx}
            className="bg-white border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-md shadow-gray-100/30 flex flex-col gap-4"
          >
            <div className="bg-brand-50 text-brand-600 p-3.5 rounded-2xl w-fit">
              {pillar.icon}
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">
              {pillar.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed font-normal">
              {pillar.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Content Block: AI-powered Spam Analysis */}
      <section className="bg-white border border-gray-200/80 rounded-[36px] p-8 md:p-12 shadow-xl shadow-gray-100/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col gap-4 text-left">
          <div className="flex items-center gap-1.5 text-brand-500 font-bold text-xs uppercase tracking-wider">
            <Target size={14} />
            <span>Under The Hood</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-gray-900 tracking-tight">
            How CallNexa Evaluates Risk
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed font-normal">
            When you verify a line, our backend hits secure E.164 database nodes. It matches routing metadata against our global fraud index, scanning for parameters like:
          </p>
          <ul className="flex flex-col gap-3 mt-2 text-sm text-gray-600 font-semibold">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-500"></span>
              Carrier VOIP line classification ratios
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-500"></span>
              Frequency spikes of matching carrier sequences
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-500"></span>
              Global neighborhood spoofing anomalies
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-500"></span>
              Recent community-driven scam complaints
            </li>
          </ul>
        </div>
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden border border-slate-800">
          <h4 className="font-heading font-bold text-base text-brand-300">
            Our Principle Covenant
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            "We believe that a phone number is a digital address, not a ticket to extract a person's private life. CallNexa does not harvest, trade, or expose the private names or directories of phone owners. We protect users by identifying systemic threat signals."
          </p>
          <div className="mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            — CallNexa Security Covenant
          </div>
        </div>
      </section>

      {/* Team / Mission stats banner */}
      <section className="text-center flex flex-col items-center gap-6 max-w-2xl mx-auto">
        <h3 className="font-heading font-extrabold text-2xl text-gray-900 tracking-tight">
          Join Us in Reclaiming Digital Safety
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed font-normal">
          CallNexa is engineered to meet investor-grade scalability standards, offering real-time caller reputation diagnostics to modern security teams and everyday consumers.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="/lookup">
            <button className="bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-colors cursor-pointer">
              Launch Call Verification
            </button>
          </a>
        </div>
      </section>

    </div>
  );
}
