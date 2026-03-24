'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Locale, TranslationKey } from './translations';
import { getTranslation } from './translations';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');

  useEffect(() => {
    const saved = localStorage.getItem('casalatina-locale') as Locale | null;
    if (saved && ['es', 'en', 'de'].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('casalatina-locale', l);
    document.documentElement.lang = l === 'de' ? 'de' : l === 'en' ? 'en' : 'es';
  }, []);

  const t = useCallback(
    (key: TranslationKey) => getTranslation(key, locale),
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
