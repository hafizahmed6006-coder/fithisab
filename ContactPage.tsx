import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, HelpCircle } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Query', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="Contact FitHisab - Suggestions & Food Corrections"
        description="Have a question, feedback, or a traditional recipe calorie correction for FitHisab? Reach out to our team."
        canonicalUrl="https://fithisab.pages.dev/contact/"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[{ label: 'Contact Us' }]}
          onNavigate={onNavigate}
        />

        <div className="my-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B4F55] mt-3 tracking-tight">
            We Value Your Feedback
          </h1>
          <p className="text-base text-[#64787A] mt-2 leading-relaxed max-w-lg mx-auto">
            Whether you want to suggest a new Desi food item, report a bug, or inquire about nutritional sources, we would love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCEBE9] shadow-xs">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EAF8F7] text-[#63A944] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-[#0B4F55]">Message Sent Successfully!</h2>
              <p className="text-sm text-[#64787A] max-w-md mx-auto">
                Thank you for contacting FitHisab. We typically review and respond to inquiries within 24–48 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#087F82] text-white text-sm font-bold"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Khan"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tariq@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                  Topic / Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] bg-white text-[#183438] text-sm"
                >
                  <option value="General Query">General Question</option>
                  <option value="Food Suggestion">Suggest a South Asian Food</option>
                  <option value="Calorie Correction">Nutritional Value Correction</option>
                  <option value="Calculator Feedback">Calculator Accuracy Feedback</option>
                  <option value="Business">Partnership / Advertising Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  className="w-full px-4 py-3 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#087F82] to-[#0B4F55] hover:brightness-105 shadow-md shadow-[#087F82]/20"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
