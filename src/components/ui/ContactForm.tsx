'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useHaptics } from '@/hooks/useHaptics';

interface ContactFormProps {
  propertyId: string;
  sellerName: string;
}

export function ContactForm({ propertyId, sellerName }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const { t } = useI18n();
  const { trigger } = useHaptics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    trigger('medium');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, propertyId }),
      });

      if (!res.ok) throw new Error();
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', message: '' });
      trigger('success');
    } catch {
      setStatus('error');
      trigger('error');
    }
  };

  return (
    <div className="rounded-xl border border-warm-200 bg-white p-6">
      <h3 className="text-base font-semibold text-warm-900">{t('contact.title')}</h3>
      <p className="mt-1 text-sm text-warm-500">
        {t('contact.sendTo')} <span className="font-medium text-warm-700">{sellerName}</span>
      </p>

      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 text-center py-8"
          >
            <div className="mx-auto w-12 h-12 rounded-full bg-success-50 flex items-center justify-center mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success-600">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <p className="text-sm font-medium text-warm-900">{t('contact.sent')}</p>
            <p className="text-xs text-warm-500 mt-1">{t('contact.sentDesc')}</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 text-xs text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200"
            >
              {t('contact.sendAnother')}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="mt-5 space-y-4"
          >
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-warm-700 mb-1.5">
                {t('contact.name')}
              </label>
              <input
                id="contact-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200 placeholder:text-warm-400"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-warm-700 mb-1.5">
                  {t('contact.email')}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200 placeholder:text-warm-400"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-medium text-warm-700 mb-1.5">
                  {t('contact.phone')}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200 placeholder:text-warm-400"
                  placeholder="+504 9999-9999"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-warm-700 mb-1.5">
                {t('contact.message')}
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200 resize-none placeholder:text-warm-400"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>

            {status === 'error' && (
              <p className="text-xs text-danger-600">{t('contact.error')}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-lg bg-accent-600 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {t('contact.sending')}
                </span>
              ) : (
                t('contact.send')
              )}
            </button>

            <p className="text-[11px] text-warm-400 text-center">
              {t('contact.disclaimer')}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
