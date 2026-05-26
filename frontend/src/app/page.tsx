'use strict';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Shield, PhoneCall, ShieldAlert, FileText, Database, HelpCircle, 
  Search, ArrowRight, UserCheck, CheckCircle2, ShieldCheck, Star, 
  MapPin, EyeOff, Sparkles, Activity, FileSpreadsheet
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';

// Public stock video URLs (Mixkit and other high-bandwidth direct MP4 links)
const HERO_VIDEOS = [
  'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-nodes-31901-large.mp4', // Comm Tech
  'https://assets.mixkit.co/videos/preview/mixkit-cyber-security-code-on-a-screen-845-large.mp4',      // Cybersecurity
  'https://assets.mixkit.co/videos/preview/mixkit-circuit-board-of-a-computer-448-large.mp4'         // AI Systems
];

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);

  // Auto-slide videos every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prevIndex) => (prevIndex + 1) % HERO_VIDEOS.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/lookup?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Main feature list
  const features = [
    {
      icon: <PhoneCall className="text-brand-500" size={24} />,
      title: 'Reverse Phone Validation',
      desc: 'Verify if a phone line is live, active, and properly formatted according to international E.164 standards.'
    },
    {
      icon: <ShieldAlert className="text-brand-500" size={24} />,
      title: 'AI Spam Detection',
      desc: 'Our machine learning models analyze incoming signal vectors and spoof patterns to calculate immediate safety scores.'
    },
    {
      icon: <Sparkles className="text-brand-500" size={24} />,
      title: 'Fraud Risk Analysis',
      desc: 'Flag routing anomalies, VOIP pool hop histories, and active robocalling campaigns before you pick up the phone.'
    },
    {
      icon: <MapPin className="text-brand-500" size={24} />,
      title: 'Country & Carrier Detection',
      desc: 'Identify the authentic origin country, province, and network carrier provider routing the caller signal.'
    },
    {
      icon: <Activity className="text-brand-500" size={24} />,
      title: 'Scam Alerts',
      desc: 'Get immediate visual warnings if a number matches active phishing, banking impersonation, or credit card fraud profiles.'
    },
    {
      icon: <ShieldCheck className="text-brand-500" size={24} />,
      title: 'Caller Safety Score',
      desc: 'A composite safety rating ranging from 0% (Absolute Safe) to 100% (Confirmed Fraud) based on aggregate reports.'
    },
    {
      icon: <Database className="text-brand-500" size={24} />,
      title: 'Smart Number Intelligence',
      desc: 'Examine detailed line attributes including line type (VOIP, mobile, landline, premium rate) and routing networks.'
    },
    {
      icon: <FileSpreadsheet className="text-brand-500" size={24} />,
      title: 'Real-time Lookup Results',
      desc: 'Query fresh network databases instantly with latency-optimized endpoints, returning results in milliseconds.'
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 px-6 md:px-8 py-20">
        
        {/* Cinematic Sliding Background Videos */}
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <AnimatePresence mode="wait">
              <motion.video
                key={videoIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={HERO_VIDEOS[videoIndex]} type="video/mp4" />
              </motion.video>
            </AnimatePresence>
          ) : (
            // High-quality fallback gradient background if video is blocked
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-brand-900/25 to-slate-900" />
          )}

          {/* Transparent Overlay Grid and Shading */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
          
          {/* Animated Top Capsule Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-brand-500/10 text-brand-300 px-4 py-2 rounded-full border border-brand-500/25 text-xs font-semibold tracking-wide backdrop-blur-sm shadow-inner"
          >
            <Shield size={13} className="text-brand-400" />
            <span>Community-First caller intelligence (No PII collected)</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] max-w-4xl"
          >
            Know If a Call Is Safe <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-300 via-brand-500 to-sky-200 bg-clip-text text-transparent">
              Before You Answer
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl"
          >
            AI-powered caller intelligence platform helping users detect spam, identify suspicious callers, and stay protected from scams.
          </motion.p>

          {/* Large Centered Search Bar */}
          <motion.form 
            onSubmit={handleSearchSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="w-full max-w-xl mt-4"
          >
            <div className="bg-white/95 hover:bg-white border border-slate-700/30 rounded-2xl md:rounded-3xl p-2 shadow-2xl flex items-center transition-all duration-300 group">
              <div className="pl-3 text-slate-400">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Enter phone number (e.g. +14158586273)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-0 text-slate-800 focus:ring-0 focus:outline-none text-base font-medium px-3 placeholder:text-slate-400"
              />
              <button 
                type="submit"
                className="bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-6 py-3 rounded-xl md:rounded-2xl flex items-center gap-1.5 transition-all shadow-md shadow-brand-500/20 active:scale-95 cursor-pointer"
              >
                Scan Number
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.form>

          {/* Live Stats Counters */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mt-10 pt-10 border-t border-white/10"
          >
            <div>
              <h4 className="font-heading font-extrabold text-2xl md:text-3xl text-white">24.5M+</h4>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Queries Validated</p>
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-2xl md:text-3xl text-white">1.8M+</h4>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Spam Flagged</p>
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-2xl md:text-3xl text-white">99.96%</h4>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Detection Uptime</p>
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-2xl md:text-3xl text-white">&lt; 150ms</h4>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">API Latency</p>
            </div>
          </motion.div>

          {/* Trusted Security Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8 opacity-65 hover:opacity-85 transition-opacity"
          >
            <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              <ShieldCheck size={14} className="text-brand-400" />
              <span>SOC2 Certified API Gateways</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              <EyeOff size={14} className="text-brand-400" />
              <span>Absolute PII Privacy Shield</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              <UserCheck size={14} className="text-brand-400" />
              <span>SEC compliant disclosure</span>
            </div>
          </motion.div>

        </div>

        {/* Ambient floating UI visual element (Right) */}
        <div className="absolute right-[-10%] top-[30%] opacity-20 pointer-events-none hidden xl:block animate-float">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl w-80 text-left">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-3">
              <div className="bg-rose-500/20 text-rose-400 p-2 rounded-xl">
                <ShieldAlert size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Scam Risk Node</p>
                <h5 className="text-sm font-bold text-white">+1 (415) 858-XXXX</h5>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Risk: <b className="text-rose-400">High</b></span>
              <span>Score: <b className="text-rose-400">92%</b></span>
            </div>
          </div>
        </div>

        {/* Ambient floating UI visual element (Left) */}
        <div className="absolute left-[-10%] bottom-[20%] opacity-20 pointer-events-none hidden xl:block animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl w-80 text-left">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-3">
              <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-xl">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Safe Caller Node</p>
                <h5 className="text-sm font-bold text-white">+91 98765 XXXXX</h5>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Risk: <b className="text-emerald-400">Zero</b></span>
              <span>Score: <b className="text-emerald-400">4%</b></span>
            </div>
          </div>
        </div>

      </section>

      {/* CORE FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <div className="bg-brand-100 text-brand-700 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mx-auto">
            Platform Capabilities
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Comprehensive Caller Safety Features
          </h2>
          <p className="text-gray-500 text-base font-normal">
            CallNexa implements multi-layered signals and intelligence checking, keeping you secure from malicious agents.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-md shadow-gray-100/30 flex flex-col gap-4 group hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300"
            >
              <div className="bg-brand-50 text-brand-600 p-3 rounded-2xl w-fit group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                {feat.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900">
                {feat.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-normal">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DETAILED THREAT ANALYTICS DASHBOARD */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="bg-gray-100/50 border border-gray-200/40 rounded-[36px] p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-4 flex flex-col gap-5 text-left">
            <div className="bg-brand-100 text-brand-700 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full w-fit">
              Advanced Stats
            </div>
            <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight leading-snug">
              Analyze Spam Patterns in Real Time
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed font-normal">
              We monitor millions of daily signal hops globally. By observing routing pool anomalies and carrier signatures, CallNexa anticipates scam calls before they reach your network gateways.
            </p>
            <div className="flex flex-col gap-3.5 mt-2">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  ✓
                </div>
                <span className="text-sm text-gray-700 font-semibold">Zero caller data disclosure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  ✓
                </div>
                <span className="text-sm text-gray-700 font-semibold">Aggregated community complaints</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  ✓
                </div>
                <span className="text-sm text-gray-700 font-semibold">Carrier intelligence checks</span>
              </div>
            </div>
            <Link href="/lookup" className="mt-4">
              <button className="bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-md shadow-brand-500/10 transition-colors w-fit cursor-pointer">
                Launch Spam Searcher
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          <div className="lg:col-span-8 w-full">
            <AnalyticsDashboard />
          </div>

        </div>
      </section>

      {/* TRUST GATE / INVESTOR PITCH CAPSULE */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 text-center bg-white border border-gray-200/80 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-100/50 flex flex-col items-center gap-6 relative overflow-hidden">
        
        {/* Glow lights */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

        <ShieldCheck size={40} className="text-brand-500 stroke-[1.5]" />
        
        <h3 className="font-heading font-extrabold text-2xl text-gray-900 tracking-tight">
          Enterprise Security Built on Trust
        </h3>
        
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
          CallNexa adheres to a strict anti-doxxing, no-identity resolution covenant. We analyze signal health, carrier nodes, scam feedback loops, and geographical routing flags, maintaining user anonymity.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link href="/about">
            <button className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-sm px-6 py-3 rounded-xl border border-gray-200 transition-colors cursor-pointer">
              Read Our Privacy Manifesto
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md shadow-brand-500/10 transition-colors cursor-pointer">
              Contact Enterprise Sales
            </button>
          </Link>
        </div>

      </section>

    </div>
  );
}
