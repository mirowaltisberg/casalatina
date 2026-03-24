'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { DEPARTMENT_OPTIONS } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';
import { useHaptics } from '@/hooks/useHaptics';

export function SearchBar() {
  const router = useRouter();
  const { t } = useI18n();
  const { trigger } = useHaptics();
  const [search, setSearch] = useState('');
  const [listingType, setListingType] = useState('');
  const [type, setType] = useState('');
  const [department, setDepartment] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    trigger('medium');
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (listingType) params.set('listingType', listingType);
    if (type) params.set('type', type);
    if (department) params.set('department', department);
    router.push(`/propiedades?${params.toString()}`);
  };

  const typeOptions = [
    { value: 'casa', label: t('type.casa') },
    { value: 'terreno', label: t('type.terreno') },
    { value: 'apartamento', label: t('type.apartamento') },
    { value: 'finca', label: t('type.finca') },
  ];

  return (
    <motion.form
      onSubmit={handleSearch}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-xl shadow-warm-900/5 border border-warm-200 p-2">
        {/* Buy / Rent toggle */}
        <div className="flex gap-1 mb-2 px-1">
          {[
            { value: '', label: t('listingType.all') },
            { value: 'venta', label: t('listingType.venta') },
            { value: 'alquiler', label: t('listingType.alquiler') },
          ].map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { setListingType(opt.value); trigger('selection'); }}
              className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                listingType === opt.value
                  ? 'bg-accent-600 text-white'
                  : 'text-warm-500 hover:text-warm-700 hover:bg-warm-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-warm-400">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('search.placeholder')}
              className="w-full rounded-xl bg-warm-50 py-3 pl-11 pr-4 text-sm text-warm-900 placeholder:text-warm-400 border-0 outline-none focus:ring-2 focus:ring-accent-500/20 focus:bg-white transition-all duration-200"
            />
          </div>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-xl bg-warm-50 py-3 px-4 text-sm text-warm-700 border-0 outline-none focus:ring-2 focus:ring-accent-500/20 transition-all duration-200 appearance-none cursor-pointer sm:w-40"
          >
            <option value="">{t('search.type')}</option>
            {typeOptions.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="rounded-xl bg-warm-50 py-3 px-4 text-sm text-warm-700 border-0 outline-none focus:ring-2 focus:ring-accent-500/20 transition-all duration-200 appearance-none cursor-pointer sm:w-48"
          >
            <option value="">{t('search.department')}</option>
            {DEPARTMENT_OPTIONS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <button
            type="submit"
            className="rounded-xl bg-accent-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-700 active:scale-[0.97] shrink-0"
          >
            {t('search.button')}
          </button>
        </div>
      </div>
    </motion.form>
  );
}
