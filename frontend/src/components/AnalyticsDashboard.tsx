'use strict';
'use client';

import React, { useState } from 'react';
import { Activity, ShieldAlert, CheckCircle, BarChart3, TrendingUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnalyticsDashboard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Hardcoded threat metrics for premium visual experience
  const weeklyData = [
    { day: 'Mon', threatCount: 240, rate: '42%' },
    { day: 'Tue', threatCount: 310, rate: '48%' },
    { day: 'Wed', threatCount: 450, rate: '61%' },
    { day: 'Thu', threatCount: 380, rate: '54%' },
    { day: 'Fri', threatCount: 520, rate: '68%' },
    { day: 'Sat', threatCount: 290, rate: '45%' },
    { day: 'Sun', threatCount: 180, rate: '35%' }
  ];

  // SVG Coordinates calculation for 7-day threat graph (width: 500, height: 200)
  // Maps threatCount values (180 - 520) to SVG viewbox points
  const points = [
    { x: 30, y: 160 },   // Mon
    { x: 105, y: 130 },  // Tue
    { x: 180, y: 80 },   // Wed
    { x: 255, y: 105 },  // Thu
    { x: 330, y: 50 },   // Fri
    { x: 405, y: 140 },  // Sat
    { x: 470, y: 180 }   // Sun
  ];

  // Build the SVG path string
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  // Build area path string (extends to bottom line y=200)
  const areaPath = `${linePath} L ${points[points.length - 1].x} 200 L ${points[0].x} 200 Z`;

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-100/50">
      
      {/* Title block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-brand-500 font-bold text-xs uppercase tracking-wider">
            <Activity size={14} />
            <span>Threat Intelligence Node</span>
          </div>
          <h3 className="font-heading font-extrabold text-xl text-gray-900 mt-1">
            Global Call Threat Tracking
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-1.5 text-xs text-gray-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Feed updating live</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Stats counters */}
        <div className="lg:col-span-1 flex flex-col gap-5 justify-center">
          
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex items-center gap-4">
            <div className="bg-rose-100 text-rose-600 p-3 rounded-xl border border-rose-200">
              <ShieldAlert size={20} />
            </div>
            <div>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Daily Block Rate</span>
              <h4 className="font-heading font-extrabold text-2xl text-slate-800 mt-0.5">
                87,249
              </h4>
              <p className="text-[11px] text-rose-600 font-semibold flex items-center gap-0.5 mt-0.5">
                <TrendingUp size={10} /> +12.4% vs last week
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex items-center gap-4">
            <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl border border-emerald-200">
              <CheckCircle size={20} />
            </div>
            <div>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">False Positives</span>
              <h4 className="font-heading font-extrabold text-2xl text-slate-800 mt-0.5">
                &lt; 0.04%
              </h4>
              <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                Industry-leading PII safety
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-600 to-brand-700 text-white rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute right-2 bottom-2 opacity-10 pointer-events-none">
              <Sparkles size={80} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-200">Neural Network Cache</span>
            <h4 className="font-heading font-extrabold text-xl mt-1 leading-snug">
              AI Fraud Scanner Active
            </h4>
            <p className="text-xs text-brand-100 leading-relaxed mt-1">
              CallNexa continuously scans carrier hops and VOIP pools to preempt spam.
            </p>
          </div>

        </div>

        {/* Right Side: SVG Graph and Data */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-gray-400 font-semibold mb-1">
            <span className="flex items-center gap-1"><BarChart3 size={12} /> Spam Calls Blocked (Weekly Trend)</span>
            <span className="text-brand-500">Peak: 520 alerts/min</span>
          </div>

          {/* Interactive Graph Box */}
          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 relative shadow-inner overflow-hidden">
            
            {/* SVG Plot */}
            <svg viewBox="0 0 500 220" className="w-full h-auto overflow-visible">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="30" y1="50" x2="480" y2="50" className="stroke-slate-800" strokeWidth="1" strokeDasharray="3" />
              <line x1="30" y1="100" x2="480" y2="100" className="stroke-slate-800" strokeWidth="1" strokeDasharray="3" />
              <line x1="30" y1="150" x2="480" y2="150" className="stroke-slate-800" strokeWidth="1" strokeDasharray="3" />
              <line x1="30" y1="200" x2="480" y2="200" className="stroke-slate-700" strokeWidth="1" />

              {/* Area path */}
              <path d={areaPath} fill="url(#chartGradient)" />

              {/* Line path */}
              <path d={linePath} fill="none" className="stroke-brand-500" strokeWidth="3" strokeLinecap="round" />

              {/* Data points */}
              {points.map((p, idx) => (
                <g key={idx} 
                   className="cursor-pointer"
                   onMouseEnter={() => setHoveredIndex(idx)}
                   onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Subtle hover pulse */}
                  {hoveredIndex === idx && (
                    <circle cx={p.x} cy={p.y} r="10" className="fill-brand-500/30 stroke-brand-500/10" strokeWidth="2" />
                  )}
                  {/* Main Point */}
                  <circle cx={p.x} cy={p.y} r="5" 
                    className={`transition-colors duration-200 ${hoveredIndex === idx ? 'fill-white stroke-brand-500' : 'fill-brand-500'}`} 
                    strokeWidth="2" 
                  />
                </g>
              ))}

              {/* X Axis Labels */}
              {weeklyData.map((d, idx) => (
                <text key={idx} x={points[idx].x} y="215" 
                  className={`text-[10px] font-bold text-center fill-slate-400 font-heading ${hoveredIndex === idx ? 'fill-white' : ''}`}
                  textAnchor="middle"
                >
                  {d.day}
                </text>
              ))}
            </svg>

            {/* Float values tooltip */}
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white rounded-xl border border-slate-700 px-4 py-2 flex items-center gap-3 shadow-xl pointer-events-none"
                >
                  <div>
                    <span className="text-[9px] font-bold uppercase text-slate-400 block tracking-wide">Threat Volume</span>
                    <span className="font-heading font-extrabold text-sm text-brand-300">
                      {weeklyData[hoveredIndex].threatCount} queries/min
                    </span>
                  </div>
                  <div className="h-6 w-px bg-slate-700" />
                  <div>
                    <span className="text-[9px] font-bold uppercase text-slate-400 block tracking-wide">Risk Ratio</span>
                    <span className="font-heading font-extrabold text-sm text-rose-400">
                      {weeklyData[hoveredIndex].rate}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          <div className="text-[11px] text-gray-400 leading-relaxed mt-2 italic text-center sm:text-left">
            *This graph maps hourly incoming phone verification patterns, comparing normal traffic nodes vs reported telemarketing vectors.
          </div>

        </div>

      </div>

    </div>
  );
}
