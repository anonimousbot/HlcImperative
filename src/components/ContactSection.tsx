import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building2, Send, CheckCircle2, ShieldCheck, Globe2 } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PhoneInput } from './PhoneInput';
import { submitToWebForms } from '../lib/webforms';
import { COUNTRIES } from '../data/callingCodes';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang].contact;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    destinationCountry: '',
    subject: 'Commodity Supply Inquiry',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please complete the required contact fields.');
      return;
    }
    setIsSubmitting(true);
    setSubmitError('');
    try {
      await submitToWebForms('Contact enquiry', {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        _replyto: formData.email,
        phone_whatsapp: formData.phone || 'Not provided',
        destination_country: formData.destinationCountry || 'Not provided',
        subject: formData.subject,
        message: formData.message,
      });
      setFormSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'The form could not be sent. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#070F1E] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-mono mb-2">
            GLOBAL TRADING DESKS & COMMUNICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Offices & Map on Left, Contact Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Dual Offices, Registrations & Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* UK contact desk */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D4AF37] mb-2 font-semibold">
                <Globe2 className="w-4 h-4" />
                <span>{t.ukOfficeTitle}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                United Kingdom contact
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Email and WhatsApp contact
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <a href="mailto:info@hlcgrupo.co.uk" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>info@hlcgrupo.co.uk</span>
                </a>
                <a href="mailto:hlcimperativegrupo@gmail.com" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>hlcimperativegrupo@gmail.com</span>
                </a>
                <a href="https://wa.me/447900904646" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5" target="_blank" rel="noreferrer">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>WhatsApp: +44 7900 904646</span>
                </a>
              </div>
            </div>

            {/* Nigeria Sourcing Operations Desk Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D4AF37] mb-2 font-semibold">
                <Building2 className="w-4 h-4" />
                <span>{t.nigeriaOfficeTitle}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                HLC IMPERATIVE GRUPO LIMITED
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Nigeria sourcing enquiries
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <a href="https://wa.me/2348055108156" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5" target="_blank" rel="noreferrer">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>WhatsApp: +234 805 510 8156</span>
                </a>
                <a href="https://wa.me/2347038817474" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5" target="_blank" rel="noreferrer">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>WhatsApp: +234 703 881 7474</span>
                </a>
              </div>
            </div>

            <a href="https://share.google/npYZihsPXc0OzagjO" target="_blank" rel="noreferrer" className="inline-flex text-xs text-[#D4AF37] hover:text-white underline underline-offset-4">Find HLC on Google</a>

            {/* Interactive Trade Hub Map Visualization */}
            <div className="p-6 rounded-2xl bg-[#0B172B] border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Dual-Hub Operational Axis
                </span>
                <span className="text-[11px] font-mono text-[#D4AF37]">
                  GMT+0 & GMT+1
                </span>
              </div>

              {/* Simplified Schematic Map / Vector Node Graphic */}
              <div className="h-44 w-full rounded-xl bg-slate-950/80 border border-slate-800 relative p-4 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-white">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                    <span>United Kingdom contact</span>
                  </div>
                  <span className="text-slate-500">Buyer and supplier enquiries</span>
                </div>

                {/* Connecting Visual SVG Line */}
                <svg className="w-full h-16 pointer-events-none" viewBox="0 0 400 60">
                  <path
                    d="M 50 10 Q 200 55 350 45"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="opacity-70"
                  />
                  <circle cx="50" cy="10" r="4" fill="#3B82F6" />
                  <circle cx="350" cy="45" r="4" fill="#D4AF37" />
                </svg>

                <div className="flex justify-between items-center text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-[#D4AF37]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span>Nigeria sourcing enquiries</span>
                  </div>
                  <span className="text-slate-500">Supply and logistics discussions</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs font-mono text-slate-400 space-y-1.5">
              <div className="text-slate-300 font-bold uppercase text-[11px] mb-1">
                Sourcing and export
              </div>
              <div>Product origin, grade, available volume and export documents are confirmed for each transaction.</div>
              <div>Independent inspection can be discussed against the buyer’s requirements.</div>
            </div>

          </div>

          {/* Right Column: Direct Commercial Inquiries Form */}
          <div className="lg:col-span-6 bg-[#0B172B] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Your enquiry has been sent
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for contacting HLC IMPERATIVE GRUPO LIMITED. Your message has been submitted to our team.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-[#D4AF37] hover:bg-[#E5C07B] rounded-lg transition-colors mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {t.sendEnquiry}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Email <a href="mailto:info@hlcgrupo.co.uk" className="text-[#D4AF37] hover:text-white">info@hlcgrupo.co.uk</a> / <a href="mailto:hlcimperativegrupo@gmail.com" className="text-[#D4AF37] hover:text-white">hlcimperativegrupo@gmail.com</a> · UK WhatsApp <a href="https://wa.me/447900904646" target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:text-white">+44 7900 904646</a>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alistair Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Corporate Entity *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sterling Smelting Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Destination Country</label>
                  <select
                    value={formData.destinationCountry}
                    onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="">Select a destination country</option>
                    {COUNTRIES.map((country) => <option key={country} value={country}>{country}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Phone / WhatsApp</label>
                    <PhoneInput
                      label="Phone / WhatsApp"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(phone) => setFormData({ ...formData, phone })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Subject / Commodity Category</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Commodity Supply Inquiry">Commodity Supply Inquiry (Purchase)</option>
                    <option value="Long-term Offtake Mandate">Long-term Offtake Mandate</option>
                    <option value="Supplier Partnership">Supplier / Mine Partnership</option>
                    <option value="Logistics & Chartering">Logistics & Vessel Chartering</option>
                    <option value="General Corporate">General Corporate Governance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Detailed Message / Specifications *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify tonnage, target delivery month, required destination discharge port, and target assay parameters..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C5A059] hover:from-[#FFF1B8] hover:to-[#D4AF37] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending…' : t.submitMessage}</span>
                  </button>
                </div>

                {submitError && <p role="alert" className="text-sm text-red-300">{submitError}</p>}

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Your enquiry is sent securely to HLC’s contact inbox.</span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
