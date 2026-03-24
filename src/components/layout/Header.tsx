'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { LOCALE_LABELS, LOCALE_NAMES, type Locale } from '@/lib/translations';
import { useHaptics } from '@/hooks/useHaptics';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { trigger } = useHaptics();
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/propiedades', label: t('nav.properties') },
    { href: '/publicar', label: t('nav.publish') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-warm-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-600 transition-colors duration-200 group-hover:bg-accent-700">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M3 21V9l9-7 9 7v12a1 1 0 01-1 1H4a1 1 0 01-1-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-semibold tracking-tight text-warm-900">
              Casa<span className="text-accent-600">Latina</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-warm-600 rounded-lg transition-colors duration-200 hover:text-warm-900 hover:bg-warm-100"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Language */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-warm-200 px-3 py-2 text-xs font-medium text-warm-600 transition-all duration-200 hover:bg-warm-50 hover:border-warm-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                {LOCALE_LABELS[locale]}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1.5 w-36 rounded-lg border border-warm-200 bg-white shadow-lg shadow-warm-200/50 py-1 z-50"
                  >
                    {(Object.keys(LOCALE_LABELS) as Locale[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLocale(l); setLangOpen(false); trigger('selection'); }}
                        className={`flex items-center justify-between w-full px-3 py-2 text-xs transition-colors duration-150 ${
                          locale === l
                            ? 'bg-accent-50 text-accent-700 font-medium'
                            : 'text-warm-600 hover:bg-warm-50'
                        }`}
                      >
                        <span>{LOCALE_NAMES[l]}</span>
                        <span className="text-warm-400 font-mono">{LOCALE_LABELS[l]}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/publicar"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-700 hover:shadow-md active:scale-[0.98]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              {t('nav.publishProperty')}
            </Link>
          </div>

          {/* Mobile: language + menu */}
          <div className="flex md:hidden items-center gap-1">
            {/* Mobile language toggle (cycles through) */}
            <button
              onClick={() => {
                const locales: Locale[] = ['es', 'en', 'de'];
                const next = locales[(locales.indexOf(locale) + 1) % locales.length];
                setLocale(next);
                trigger('selection');
              }}
              className="p-2 rounded-lg text-warm-600 hover:bg-warm-100 transition-colors duration-200 text-xs font-semibold"
            >
              {LOCALE_LABELS[locale]}
            </button>

            <button
              onClick={() => { setMobileOpen(!mobileOpen); trigger('light'); }}
              className="p-2 rounded-lg text-warm-600 hover:bg-warm-100 transition-colors duration-200"
              aria-label={t('nav.menu')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden md:hidden"
            >
              <div className="pb-4 pt-2 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-warm-700 rounded-lg hover:bg-warm-100 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/publicar"
                  onClick={() => setMobileOpen(false)}
                  className="block mx-4 mt-2 text-center rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-medium text-white"
                >
                  {t('nav.publishProperty')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
