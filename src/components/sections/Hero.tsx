'use client';

import { motion } from 'framer-motion';
import { SearchBar } from '@/components/ui/SearchBar';
import { useI18n } from '@/lib/i18n';

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent-50 via-white to-warm-50 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-100 px-3.5 py-1.5 text-xs font-medium text-accent-700 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
              </span>
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-warm-900"
          >
            {t('hero.title')}{' '}
            <span className="text-accent-600">{t('hero.titleHighlight')}</span>
            {t('hero.titleSuffix')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-5 text-lg text-warm-500 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>

        <div className="mt-10">
          <SearchBar />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-14 flex justify-center gap-8 sm:gap-16"
        >
          {[
            { value: '150+', label: t('hero.stat.properties') },
            { value: '14', label: t('hero.stat.departments') },
            { value: '100%', label: t('hero.stat.verified') },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-warm-900">{stat.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-warm-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
