import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Building, Pickaxe } from 'lucide-react';
import { Language, SupplierApplicationData } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PhoneInput } from './PhoneInput';
import { submitToWebForms } from '../lib/webforms';
import { COMMODITIES } from '../data/commodities';
import { COUNTRIES } from '../data/callingCodes';

interface SupplierPortalModalProps {
  isOpen: boolean;
  currentLang: Language;
  onClose: () => void;
}

export const SupplierPortalModal: React.FC<SupplierPortalModalProps> = ({
  isOpen,
  currentLang,
  onClose,
}) => {
  const t = TRANSLATIONS[currentLang].supplier;

  const [formData, setFormData] = useState<SupplierApplicationData>({
    companyName: '',
    registrationNumber: '',
    country: 'Nigeria',
    stateOrProvince: '',
    contactPerson: '',
    email: '',
    phone: '',
    mineralOrCommodity: '',
    miningLeaseNumber: '',
    monthlySupplyCapacity: '',
    laboratoryAssayAvailable: false,
    notes: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `HLC-SUP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setIsSubmitting(true);
    setSubmitError('');
    try {
      await submitToWebForms('Supplier application', {
        supplier_company: formData.companyName,
        registration_number: formData.registrationNumber,
        country: formData.country,
        state_or_province: formData.stateOrProvince,
        contact_person: formData.contactPerson,
        email: formData.email,
        _replyto: formData.email,
        phone_whatsapp: formData.phone,
        commodity: formData.mineralOrCommodity,
        mining_lease_number: formData.miningLeaseNumber,
        monthly_supply_capacity: formData.monthlySupplyCapacity,
        laboratory_assay_available: formData.laboratoryAssayAvailable ? 'Yes' : 'No',
        notes: formData.notes || 'None',
        application_reference: refCode,
      });
      setSubmittedRef(refCode);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Your application could not be sent. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl my-8 bg-[#0B172B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
              SUPPLIER ENQUIRY
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submittedRef ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {t.submittedTitle}
              </h3>

              <p className="text-sm text-slate-300 max-w-md mx-auto">
              {t.submittedDesc} Your application has been sent to HLC for review.
              </p>

              <div className="inline-block p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs my-2">
                <span className="text-slate-400 block mb-1">Application Reference Code:</span>
                <span className="text-lg font-bold text-[#D4AF37]">{submittedRef}</span>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setSubmittedRef(null);
                    onClose();
                  }}
                  className="px-6 py-2.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
                >
                  Return to Portal
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {t.subtitle}
                </p>
              </div>

              {/* Grid 1: Legal Entity Info */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <Building className="w-4 h-4 text-[#D4AF37]" />
                  <span>1. Company and source information</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.companyName} *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nasarawa Solid Minerals Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.regNumber} (if applicable)</label>
                    <input
                      type="text"
                      placeholder="e.g. RC 1482930"
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.country} *</label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="">Select a country</option>
                      {COUNTRIES.map((country) => <option key={country} value={country}>{country}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.state} *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nasarawa / Plateau / Kogi / Cross River"
                      value={formData.stateOrProvince}
                      onChange={(e) => setFormData({ ...formData, stateOrProvince: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.leaseId} (if applicable)</label>
                    <input
                      type="text"
                      placeholder="e.g. ML 29402 or SSML 1184"
                      value={formData.miningLeaseNumber}
                      onChange={(e) => setFormData({ ...formData, miningLeaseNumber: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Grid 2: Commodity & Production Metrics */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <Pickaxe className="w-4 h-4 text-[#D4AF37]" />
                  <span>2. Product and availability</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.commodityType} *</label>
                    <select
                      required
                      value={formData.mineralOrCommodity}
                      onChange={(e) => setFormData({ ...formData, mineralOrCommodity: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="">Select a commodity</option>
                      {COMMODITIES.map((commodity) => <option key={commodity.id} value={commodity.name}>{commodity.name}</option>)}
                      <option value="Other">Other industrial commodity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.monthlyTonnage} *</label>
                    <input
                      type="text"
                      required
                      placeholder="State the volume you can currently offer"
                      value={formData.monthlySupplyCapacity}
                      onChange={(e) => setFormData({ ...formData, monthlySupplyCapacity: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="assayCheckbox"
                    checked={formData.laboratoryAssayAvailable}
                    onChange={(e) => setFormData({ ...formData, laboratoryAssayAvailable: e.target.checked })}
                    className="w-4 h-4 text-[#D4AF37] rounded border-slate-700 bg-slate-800 focus:ring-0"
                  />
                  <label htmlFor="assayCheckbox" className="text-xs text-slate-300 cursor-pointer">
                    {t.assayCheckbox}
                  </label>
                </div>
              </div>

              {/* Grid 3: Contact Person Details */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  3. Contact information
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.contactPerson} *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.email} *</label>
                    <input
                      type="email"
                      required
                      placeholder="corporate@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.phone} *</label>
                    <PhoneInput
                      label={t.phone}
                      required
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(phone) => setFormData({ ...formData, phone })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">{t.notes}</label>
                  <textarea
                    rows={2}
                    placeholder="Provide details on truck loading ramps, mine pit accessibility, and current stockpile tonnage..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 min-h-[44px] text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer text-center"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 min-h-[44px] text-xs font-bold text-slate-950 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C5A059] hover:from-[#FFF1B8] hover:to-[#D4AF37] rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center active:scale-[0.99]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : t.submitBtn}
                </button>
                {submitError && <p role="alert" className="text-sm text-red-300">{submitError}</p>}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
