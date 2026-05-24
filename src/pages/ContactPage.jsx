import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API/Email transmission latency over network architecture
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form field states
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-zinc-50 min-h-screen flex flex-col justify-between relative">
      
      {/* Structural Accent Element */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full flex-1 flex flex-col justify-center">
        
        {/* Page Typography Header */}
        <div className="text-center mb-10 space-y-3">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-800 block">
             Intake Department
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-zinc-950 tracking-tight font-normal">
            Secure Legal Consultation
          </h1>
          <div className="w-12 h-[1px] bg-emerald-800 mx-auto mt-2"></div>
          <p className="text-zinc-500 text-xs sm:text-sm max-w-sm mx-auto font-light leading-relaxed">
            Please submit your baseline parameters below. Our legal intake team will evaluate the details.
          </p>
        </div>

        {/* Premium Form Card Wrapper */}
        <div className="bg-white border border-zinc-200 p-6 sm:p-10 rounded-xl shadow-lg transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Form Fields Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name Input (Compulsory) */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-700 flex items-center gap-0.5">
                  <span>Full Name</span>
                  <span className="text-emerald-700 font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. Adam Aided"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs sm:text-sm px-4 py-3 bg-zinc-50/50 border border-zinc-200 focus:border-emerald-800 focus:bg-white outline-hidden transition-all rounded-lg font-sans text-zinc-900 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              {/* Phone Number Input (Compulsory) */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-700 flex items-center gap-0.5">
                  <span>Phone Number</span>
                  <span className="text-emerald-700 font-bold">*</span>
                </label>
                <input
                  type="tel"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. +60 12-345 6789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs sm:text-sm px-4 py-3 bg-zinc-50/50 border border-zinc-200 focus:border-emerald-800 focus:bg-white outline-hidden transition-all rounded-lg font-sans text-zinc-900 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Email Address Input (Optional) */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-700">
                Email Address <span className="text-zinc-400 font-normal lowercase italic">(Optional)</span>
              </label>
              <input
                type="email"
                disabled={isSubmitting}
                placeholder="e.g. adamaided97@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-xs sm:text-sm px-4 py-3 bg-zinc-50/50 border border-zinc-200 focus:border-emerald-800 focus:bg-white outline-hidden transition-all rounded-lg font-sans text-zinc-900 disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            {/* General Brief Textarea (Optional) */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-700">
                Brief Legal Matter Briefing <span className="text-zinc-400 font-normal lowercase italic">(Optional)</span>
              </label>
              <textarea
                rows="4"
                disabled={isSubmitting}
                placeholder="Outline core parameters of the matter here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-xs sm:text-sm px-4 py-3 bg-zinc-50/50 border border-zinc-200 focus:border-emerald-800 focus:bg-white outline-hidden transition-all rounded-lg font-sans text-zinc-900 resize-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            {/* Submission Button with State-Aware Loading Layout */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-950 text-white font-sans font-medium text-xs uppercase tracking-widest py-3.5 px-6 rounded-lg border border-emerald-900 hover:bg-emerald-900 shadow-md transition-all active:scale-[0.99] disabled:opacity-80 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Encrypting &amp; Dispatching...</span>
                </>
              ) : (
                <span>Dispatch Submission Profile</span>
              )}
            </button>

          </form>
        </div>

        {/* Back to Homepage Hyperlink */}
        <div className="text-center mt-6">
          <Link to="/" className="text-xs font-sans font-medium text-zinc-500 hover:text-emerald-800 transition-colors inline-flex items-center gap-1">
            &larr; Return to Firm Mainframe
          </Link>
        </div>

      </div>

      {/* ========================================== */}
      {/* POPUP MODAL CONTROL STRUCTURE              */}
      {/* ========================================== */}
      {showSuccess && (
        <div className="fixed inset-0 bg-zinc-950/60 backup-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white border border-zinc-200 rounded-xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl relative overflow-hidden transform scale-100 transition-transform duration-300">
            {/* Top color tag banner line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-800" />
            
            {/* Luxury Success Icon Circle */}
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-emerald-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            {/* Modal Heading Elements */}
            <h2 className="text-lg font-serif text-zinc-900 tracking-tight mb-2">
              Dispatch Securely Logged
            </h2>
            <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed mb-6 font-light">
              Success! Your consultation parameters have been securely transmitted to our centralized database infrastructure.
            </p>

            {/* Close Trigger Button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-zinc-900 text-white font-sans font-medium text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg hover:bg-zinc-800 shadow transition-colors"
            >
              Acknowledge Record
            </button>
          </div>
        </div>
      )}

    </div>
  );
}