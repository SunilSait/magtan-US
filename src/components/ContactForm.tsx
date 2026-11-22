'use client';

import { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required.';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters.';
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#071325]/90 border border-cyan-500/30 rounded-2xl p-10 text-center backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <div className="w-16 h-16 bg-cyan-500/15 border border-cyan-400 rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(0,240,255,0.35)]">
          <svg className="w-8 h-8 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Thank You for Your Enquiry</h3>
        <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
          We have received your message. Our Delaware executive team will review your requirements and respond within 1–2 business days.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ fullName: '', email: '', company: '', subject: '', message: '' });
          }}
          className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-cyan-400/80 text-cyan-300 text-xs font-semibold tracking-wider uppercase hover:bg-cyan-500/20 hover:text-white transition-all cursor-pointer"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3 text-sm rounded-lg transition-all duration-200 outline-none text-white ${
      hasError
        ? 'border border-red-500 bg-red-950/20 focus:border-red-400'
        : 'border border-cyan-500/30 bg-[#020814]/80 placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 focus:shadow-[0_0_12px_rgba(0,240,255,0.2)]'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-[#071325]/90 border border-cyan-500/25 rounded-2xl p-7 md:p-9 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={inputClasses(!!errors.fullName)}
            placeholder="Your full name"
          />
          {errors.fullName && <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>}
        </div>

        {/* Business Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
            Business Email <span className="text-cyan-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses(!!errors.email)}
            placeholder="you@company.com"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
            Company Name <span className="text-cyan-400">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses(!!errors.company)}
            placeholder="Your enterprise / organization"
          />
          {errors.company && <p className="mt-1.5 text-xs text-red-400">{errors.company}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
            Subject <span className="text-cyan-400">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputClasses(!!errors.subject)}
          >
            <option value="" className="bg-[#040D1A] text-slate-400">Select an engagement area</option>
            <option value="IT Consulting" className="bg-[#040D1A] text-white">IT Consulting & Governance</option>
            <option value="Software Development" className="bg-[#040D1A] text-white">Software Development & Cloud</option>
            <option value="Digital & Data Solutions" className="bg-[#040D1A] text-white">Digital & Data Solutions</option>
            <option value="Project Management" className="bg-[#040D1A] text-white">Cross-Border Project Management</option>
            <option value="General Enquiry" className="bg-[#040D1A] text-white">General Enterprise Enquiry</option>
            <option value="Partnership" className="bg-[#040D1A] text-white">Delivery Partnership</option>
          </select>
          {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
          Message <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={inputClasses(!!errors.message)}
          placeholder="Please describe your technology requirements and target timeline..."
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
      </div>

      {/* Important Note */}
      <p className="mt-4 text-xs text-slate-400 leading-relaxed">
        Note: This enquiry is governed under Delaware corporate compliance. By submitting, you agree to our{' '}
        <a href="/privacy-policy" className="text-cyan-400 underline hover:text-cyan-300">Privacy Policy</a>.
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,240,255,0.35)] cursor-pointer"
      >
        {submitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Submitting Enquiry...
          </span>
        ) : (
          'Submit Enquiry'
        )}
      </button>
    </form>
  );
}
