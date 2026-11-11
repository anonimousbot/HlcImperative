import React, { useState, useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Copy, Send, Mail, AlertCircle, RefreshCw, Zap, Check, Lock } from 'lucide-react';

interface EmailSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailSetupModal: React.FC<EmailSetupModalProps> = ({ isOpen, onClose }) => {
  const [accessKeyInput, setAccessKeyInput] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [currentConfig, setCurrentConfig] = useState<{ configured: boolean; maskedKey: string | null } | null>(null);

  const [testSending, setTestSending] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string; refId?: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const TARGET_EMAIL = 'hlcimperativegrupo@gmail.com';

  useEffect(() => {
    if (isOpen) {
      fetch('/api/settings/web3forms')
        .then((res) => res.json())
        .then((data) => {
          setCurrentConfig(data);
        })
        .catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(TARGET_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSaveKey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessKeyInput.trim()) return;

    setIsSaving(true);
    setSaveSuccess(null);
    setSaveError(null);

    try {
      const res = await fetch('/api/settings/web3forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: accessKeyInput.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setSaveSuccess('Access Key saved successfully! All inquiries will now forward automatically.');
        setCurrentConfig({ configured: true, maskedKey: `${accessKeyInput.slice(0, 5)}••••••••${accessKeyInput.slice(-4)}` });
        setAccessKeyInput('');
      } else {
        setSaveError(data.error || 'Failed to save key.');
      }
    } catch (err: any) {
      setSaveError(err.message || 'Network connection failed.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSendTest = async () => {
    setTestSending(true);
    setTestResult(null);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: 'Web3Forms Test User',
          company: 'HLC Commercial Test',
          email: TARGET_EMAIL,
          subject: 'Web3Forms Live Pipeline Verification',
          message: 'Testing instant forwarding via Web3Forms directly to hlcimperativegrupo@gmail.com.',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setTestResult({
          success: true,
          refId: data.referenceId,
          message: data.emailSent
            ? 'Success! Test inquiry dispatched via Web3Forms directly into hlcimperativegrupo@gmail.com!'
            : 'Inquiry saved to server log. (Make sure you have saved your Web3Forms Access Key above).',
        });
      } else {
        setTestResult({
          success: false,
          message: data.error || 'Server error during test.',
        });
      }
    } catch (err: any) {
      setTestResult({
        success: false,
        message: err.message || 'Connection test failed.',
      });
    } finally {
      setTestSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div 
        className="relative w-full max-w-2xl my-6 bg-[#0B172B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Web3Forms Simple Email Setup
              </h2>
              <p className="text-[11px] text-slate-400 font-mono">
                Receiving Email: <span className="text-[#D4AF37] font-semibold">{TARGET_EMAIL}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[82vh] overflow-y-auto text-xs sm:text-sm">
          
          {/* Status Indicator Bar */}
          <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
            currentConfig?.configured
              ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
              : 'bg-amber-950/30 border-amber-500/40 text-amber-300'
          }`}>
            <div className="flex items-center gap-2.5">
              {currentConfig?.configured ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
              )}
              <div>
                <span className="font-bold block text-xs sm:text-sm">
                  {currentConfig?.configured
                    ? 'Web3Forms is Connected & Active'
                    : 'Web3Forms Access Key Needed'}
                </span>
                <span className="text-[11px] opacity-80 font-mono">
                  {currentConfig?.configured
                    ? `Key: ${currentConfig.maskedKey} ➔ ${TARGET_EMAIL}`
                    : 'Follow the 2 simple steps below to start receiving inquiries in Gmail'}
                </span>
              </div>
            </div>

            {currentConfig?.configured && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/60 border border-emerald-700 text-emerald-200 font-bold">
                READY
              </span>
            )}
          </div>

          {/* Simple 2-Step Instructions */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              2 Simple Steps (Takes 60 Seconds — No Password Needed):
            </div>

            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-slate-950 text-xs flex items-center justify-center font-bold">1</span>
                  Enter your email on Web3Forms
                </span>

                <a
                  href="https://web3forms.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-[#D4AF37] hover:bg-white rounded-lg transition-colors flex items-center gap-1 font-mono cursor-pointer"
                >
                  <span>Open Web3Forms</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-slate-300 text-xs pl-7">
                Go to <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="text-[#D4AF37] underline">web3forms.com</a>, enter your email below, and click <strong>"Create Access Key"</strong>:
              </p>

              <div className="pl-7 pt-1 flex items-center gap-2">
                <code className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-amber-300 font-mono text-xs flex-1 truncate">
                  {TARGET_EMAIL}
                </code>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-2 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-slate-950 text-xs flex items-center justify-center font-bold">2</span>
                Check your Gmail & Paste your Key below
              </div>
              <p className="text-slate-300 text-xs pl-7">
                Web3Forms will immediately send an email to <strong>{TARGET_EMAIL}</strong> with your <strong>Access Key</strong> (e.g. <code>a1b2c3d4-e5f6-7890-abcd...</code>). Paste it into the box below:
              </p>
            </div>
          </div>

          {/* Key Input & Save Form */}
          <form onSubmit={handleSaveKey} className="p-4 sm:p-5 rounded-xl bg-slate-900 border-2 border-[#D4AF37]/40 space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Paste Your Web3Forms Access Key:
            </label>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <input
                  type="text"
                  required
                  placeholder="e.g. a1b2c3d4-e5f6-7890-abcd-ef1234567890"
                  value={accessKeyInput}
                  onChange={(e) => setAccessKeyInput(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white font-mono focus:border-[#D4AF37] focus:outline-none min-h-[44px]"
                />
              </div>

              <button
                type="submit"
                disabled={isSaving || !accessKeyInput.trim()}
                className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C5A059] hover:from-[#FFF1B8] hover:to-[#D4AF37] rounded-xl transition-all cursor-pointer min-h-[44px] shrink-0 disabled:opacity-50 flex items-center justify-center gap-1.5"
              >
                {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                <span>{isSaving ? 'Saving...' : 'Save Access Key'}</span>
              </button>
            </div>

            {saveSuccess && (
              <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{saveSuccess}</span>
              </div>
            )}

            {saveError && (
              <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{saveError}</span>
              </div>
            )}
          </form>

          {/* Test Pipeline Dispatcher */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-bold text-white block text-xs sm:text-sm">
                  Test Web3Forms Pipeline
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Send a sample inquiry to verify it reaches {TARGET_EMAIL}
                </span>
              </div>

              <button
                type="button"
                onClick={handleSendTest}
                disabled={testSending}
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-[#D4AF37] hover:bg-white rounded-lg transition-colors flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 cursor-pointer min-h-[40px]"
              >
                {testSending ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Test Lead</span>
                  </>
                )}
              </button>
            </div>

            {testResult && (
              <div className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${
                testResult.success
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                  : 'bg-rose-950/40 border-rose-500/50 text-rose-300'
              }`}>
                {testResult.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-semibold">{testResult.message}</div>
                  {testResult.refId && (
                    <div className="text-[10px] font-mono text-slate-400 mt-1">
                      Tracking ID: {testResult.refId}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Built-in Fallback Note */}
          <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/30 text-slate-300 text-xs flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed text-[11px]">
              <strong className="text-white block mb-0.5">Built-in Zero-Key Fallback:</strong>
              Even before pasting your key, the site works immediately. Every RFQ and inquiry is logged on the server and prospective buyers see an instant <strong>"Open in Gmail Web"</strong> button with the quotation manifest pre-addressed to <strong>{TARGET_EMAIL}</strong>.
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
