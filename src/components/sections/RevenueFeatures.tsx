'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import type { TranslationKey } from '@/lib/translations';

export function RevenueFeatures() {
  const { t } = useI18n();

  const plans: {
    nameKey: TranslationKey;
    priceKey: TranslationKey;
    descKey: TranslationKey;
    featureKeys: TranslationKey[];
    ctaKey: TranslationKey;
    popular: boolean;
    price?: string;
  }[] = [
    {
      nameKey: 'pricing.basic.name',
      priceKey: 'pricing.basic.price',
      descKey: 'pricing.basic.desc',
      featureKeys: ['pricing.basic.f1', 'pricing.basic.f2', 'pricing.basic.f3', 'pricing.basic.f4'],
      ctaKey: 'pricing.basic.cta',
      popular: false,
    },
    {
      nameKey: 'pricing.featured.name',
      priceKey: 'pricing.featured.name', // unused, price is hardcoded
      descKey: 'pricing.featured.desc',
      featureKeys: ['pricing.featured.f1', 'pricing.featured.f2', 'pricing.featured.f3', 'pricing.featured.f4', 'pricing.featured.f5'],
      ctaKey: 'pricing.featured.cta',
      popular: true,
      price: '$29/mes',
    },
    {
      nameKey: 'pricing.premium.name',
      priceKey: 'pricing.premium.name',
      descKey: 'pricing.premium.desc',
      featureKeys: ['pricing.premium.f1', 'pricing.premium.f2', 'pricing.premium.f3', 'pricing.premium.f4', 'pricing.premium.f5', 'pricing.premium.f6'],
      ctaKey: 'pricing.premium.cta',
      popular: false,
      price: '$79/mes',
    },
  ];

  return (
    <section className="py-20 bg-warm-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-warm-900">
            {t('pricing.title')}
          </h2>
          <p className="mt-3 text-sm text-warm-500">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`relative rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'border-accent-300 bg-white shadow-lg shadow-accent-100/50'
                  : 'border-warm-200 bg-white hover:shadow-lg hover:shadow-warm-200/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-600 px-3 py-1 text-xs font-medium text-white">
                  {t('pricing.popular')}
                </div>
              )}

              <h3 className="text-base font-semibold text-warm-900">{t(plan.nameKey)}</h3>
              <p className="text-xs text-warm-500 mt-1">{t(plan.descKey)}</p>
              <p className="mt-4 text-3xl font-bold text-warm-900">
                {plan.price ?? t(plan.priceKey)}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.featureKeys.map((fk) => (
                  <li key={fk} className="flex items-start gap-2.5 text-sm text-warm-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success-500 mt-0.5 shrink-0">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {t(fk)}
                  </li>
                ))}
              </ul>

              <Link
                href="/publicar"
                className={`mt-6 block w-full rounded-lg py-2.5 text-sm font-medium text-center transition-all duration-200 active:scale-[0.98] ${
                  plan.popular
                    ? 'bg-accent-600 text-white hover:bg-accent-700'
                    : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
                }`}
              >
                {t(plan.ctaKey)}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
