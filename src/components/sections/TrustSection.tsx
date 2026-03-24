'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import type { TranslationKey } from '@/lib/translations';

const featureKeys: { icon: React.ReactNode; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    titleKey: 'trust.legal.title',
    descKey: 'trust.legal.desc',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    titleKey: 'trust.transparency.title',
    descKey: 'trust.transparency.desc',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    titleKey: 'trust.mediated.title',
    descKey: 'trust.mediated.desc',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    titleKey: 'trust.currency.title',
    descKey: 'trust.currency.desc',
  },
];

export function TrustSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-warm-900">
            {t('trust.title')}
          </h2>
          <p className="mt-3 text-sm text-warm-500 leading-relaxed">
            {t('trust.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureKeys.map((feature, i) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group rounded-xl border border-warm-200 bg-warm-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-warm-200/50 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-accent-100 text-accent-600 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-warm-900">{t(feature.titleKey)}</h3>
              <p className="mt-2 text-sm text-warm-500 leading-relaxed">{t(feature.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
