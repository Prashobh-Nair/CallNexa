'use strict';
'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, ShieldCheck, AlertCircle, Send, Globe, Loader2, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          access_key: 'd70314bc-fef9-400f-a6b4-17067d30f91e',
          name, 
          email, 
          message,
          subject: 'New Contact Submission - CallNexa'
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(data.message || 'Failed to submit contact request.');
      }
    } catch (err) {
      console.error('Error submitting form', err);
      setError('An network error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Column: Direct Info */}
      <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
        <div>
          <div className="bg-brand-100 text-brand-700 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3">
            Get In Touch
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
            Connect With Our Security Experts
          </h1>
        </div>
        
        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-normal">
          Have queries about API licenses, global caller spam metrics, or platform security audits? Fill out the portal form or drop a note to our corporate mailbox.
        </p>

        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-center gap-3 text-sm text-gray-600 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
            <div className="bg-brand-50 text-brand-500 p-2.5 rounded-xl border border-brand-100">
              <Mail size={16} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Mailbox Support</p>
              <h5 className="font-bold text-gray-800 mt-0.5">prashobhmanojnair@gmail.com</h5>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
            <div className="bg-brand-50 text-brand-500 p-2.5 rounded-xl border border-brand-100">
              <Phone size={16} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Contact Number</p>
              <h5 className="font-bold text-gray-800 mt-0.5">9426062574</h5>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 text-white rounded-2xl p-5 border border-slate-900 text-xs leading-relaxed font-normal opacity-90 mt-2">
          💡 <b>Notice:</b> Standard response timeline is 12-24 business hours. Submissions are processed in compliance with SOC2 telemetry standards.
        </div>
      </div>

      {/* Right Column: Interactive Form */}
      <div className="lg:col-span-7 bg-white border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-100/50">
        
        {success ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 flex flex-col items-center justify-center gap-4 text-center"
          >
            <div className="bg-emerald-50 text-emerald-600 p-4 rounded-full border border-emerald-100 shadow-md">
              <ShieldCheck size={40} className="animate-bounce" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-gray-900">
              Message Transmitted
            </h3>
            <p className="text-sm text-gray-500 max-w-sm font-normal">
              Thank you. Your inquiry has been cataloged under SOC2 ticket telemetry. A customer success representative will be in touch shortly.
            </p>
            <button 
              onClick={() => setSuccess(false)}
              className="mt-4 bg-gray-900 hover:bg-brand-500 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                Your Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white text-gray-700 transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. alex@company.com"
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white text-gray-700 transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                Detailed Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your request..."
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white text-gray-700 transition-all placeholder:text-gray-400 resize-none"
              />
            </div>

            {error && (
              <div className="bg-rose-50 border border-rose-100 text-rose-700 text-xs px-3.5 py-3 rounded-xl flex items-center gap-2">
                <AlertCircle size={14} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-brand-500 hover:bg-brand-600 disabled:bg-brand-400 text-white font-bold text-sm py-3.5 rounded-xl shadow-md shadow-brand-500/10 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Transmitting...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={14} />
                </>
              )}
            </button>

          </form>
        )}

      </div>

    </div>
  );
}
