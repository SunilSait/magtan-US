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

    // Simulate form submission delay
    // In production, this would be replaced with an actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-border rounded-lg p-10 text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-dark mb-2">Thank You for Your Enquiry</h3>
        <p className="text-text-body">
          We have received your message and will respond within 1–2 business days.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ fullName: '', email: '', company: '', subject: '', message: '' });
          }}
          className="mt-6 btn-outline-navy text-sm"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3 text-sm border rounded transition-colors duration-200 outline-none ${
      hasError
        ? 'border-red-400 bg-red-50/50 focus:border-red-500'
        : 'border-border bg-white focus:border-gold focus:ring-1 focus:ring-gold/20'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-border rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-text-dark mb-1.5">
            Full Name <span className="text-red-500">*</span>
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
          {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
        </div>

        {/* Business Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1.5">
            Business Email <span className="text-red-500">*</span>
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
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-dark mb-1.5">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses(!!errors.company)}
            placeholder="Your company name"
          />
          {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-1.5">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputClasses(!!errors.subject)}
          >
            <option value="">Select a subject</option>
            <option value="IT Consulting">IT Consulting</option>
            <option value="Software Development">Software Development</option>
            <option value="Digital & Data Solutions">Digital & Data Solutions</option>
            <option value="Project Management">Project Management</option>
            <option value="General Enquiry">General Enquiry</option>
            <option value="Partnership">Partnership</option>
          </select>
          {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={inputClasses(!!errors.message)}
          placeholder="Please describe your requirements..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {/* Important Note */}
      <p className="mt-4 text-xs text-text-body/60">
        Note: This form captures your enquiry details. Our team will review and respond via the email address you provide.
        By submitting, you agree to our{' '}
        <a href="/privacy-policy" className="text-navy underline">Privacy Policy</a>.
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
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
            Submitting...
          </span>
        ) : (
          'Submit Enquiry'
        )}
      </button>
    </form>
  );
}
