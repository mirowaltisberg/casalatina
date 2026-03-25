'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PropertyFilters, Feature, ListingType } from '@/lib/types';
import { DEPARTMENT_OPTIONS } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';
import type { TranslationKey } from '@/lib/translations';
import { useHaptics } from '@/hooks/useHaptics';

interface FilterSidebarProps {
  filters: PropertyFilters;
  onChange: (filters: PropertyFilters) => void;
  onClose?: () => void;
  isOpen?: boolean;
}

const LOCATION_FEATURES: Feature[] = ['vista_al_mar', 'vista_panoramica', 'playa', 'acceso_playa', 'montañas', 'lago', 'ciudad', 'pueblo', 'colonial', 'isla', 'rio', 'bosque'];
const AMENITY_FEATURES: Feature[] = ['piscina', 'jardin', 'terraza', 'garage', 'amueblado', 'seguridad', 'aire_acondicionado'];
const MATERIAL_KEYS = ['concreto', 'madera', 'adobe', 'mixto', 'piedra'] as const;

export function FilterSidebar({ filters, onChange, onClose, isOpen = true }: FilterSidebarProps) {
  const [localFilters, setLocalFilters] = useState<PropertyFilters>(filters);
  const { t } = useI18n();
  const { trigger } = useHaptics();

  const update = (partial: Partial<PropertyFilters>) => {
    const next = { ...localFilters, ...partial };
    setLocalFilters(next);
    onChange(next);
    trigger('selection');
  };

  const toggleFeature = (feature: Feature) => {
    const current = localFilters.features ?? [];
    const next = current.includes(feature)
      ? current.filter((f) => f !== feature)
      : [...current, feature];
    update({ features: next.length ? next : undefined });
  };

  const clearAll = () => {
    const empty: PropertyFilters = {};
    setLocalFilters(empty);
    onChange(empty);
  };

  const typeOptions = [
    { value: 'casa', labelKey: 'type.casa' as TranslationKey },
    { value: 'terreno', labelKey: 'type.terreno' as TranslationKey },
    { value: 'apartamento', labelKey: 'type.apartamento' as TranslationKey },
    { value: 'finca', labelKey: 'type.finca' as TranslationKey },
  ];

  const content = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-warm-900">{t('listings.filters')}</h2>
        <button
          onClick={clearAll}
          className="text-xs text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200"
        >
          {t('filter.clearAll')}
        </button>
      </div>

      {/* Listing type: Buy / Rent */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          {t('listingType.label')}
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {([undefined, 'venta', 'alquiler'] as (ListingType | undefined)[]).map((lt) => {
            const labelKey = lt ? `listingType.${lt}` as TranslationKey : 'listingType.all' as TranslationKey;
            return (
              <button
                key={lt ?? 'all'}
                onClick={() => update({ listingType: lt })}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 ${
                  localFilters.listingType === lt
                    ? 'bg-accent-600 text-white shadow-sm'
                    : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                }`}
              >
                {t(labelKey)}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          {t('filter.propertyType')}
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {typeOptions.map(({ value, labelKey }) => (
            <button
              key={value}
              onClick={() => update({ type: localFilters.type === value ? undefined : value as PropertyFilters['type'] })}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 ${
                localFilters.type === value
                  ? 'bg-accent-600 text-white shadow-sm'
                  : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
              }`}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          {t('filter.department')}
        </label>
        <select
          value={localFilters.department ?? ''}
          onChange={(e) => update({ department: e.target.value || undefined })}
          className="w-full rounded-lg border border-warm-200 bg-white px-3 py-2.5 text-sm text-warm-700 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200"
        >
          <option value="">{t('filter.all')}</option>
          {DEPARTMENT_OPTIONS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          {t('filter.priceRange')}
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder={t('filter.min')}
            value={localFilters.minPrice ?? ''}
            onChange={(e) => update({ minPrice: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full rounded-lg border border-warm-200 bg-white px-3 py-2.5 text-sm text-warm-700 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200"
          />
          <input
            type="number"
            placeholder={t('filter.max')}
            value={localFilters.maxPrice ?? ''}
            onChange={(e) => update({ maxPrice: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full rounded-lg border border-warm-200 bg-white px-3 py-2.5 text-sm text-warm-700 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          {t('filter.minBedrooms')}
        </label>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => update({ bedrooms: localFilters.bedrooms === n ? undefined : n })}
              className={`flex-1 rounded-lg py-2 text-xs font-medium transition-all duration-200 ${
                localFilters.bedrooms === n
                  ? 'bg-accent-600 text-white shadow-sm'
                  : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
              }`}
            >
              {n}+
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          {t('filter.location')}
        </label>
        <div className="flex flex-wrap gap-1.5">
          {LOCATION_FEATURES.map((f) => {
            const featureKey = `feature.${f}` as TranslationKey;
            return (
              <button
                key={f}
                onClick={() => toggleFeature(f)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                  localFilters.features?.includes(f)
                    ? 'bg-accent-600 text-white shadow-sm'
                    : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                }`}
              >
                {t(featureKey)}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          {t('filter.amenities')}
        </label>
        <div className="flex flex-wrap gap-1.5">
          {AMENITY_FEATURES.map((f) => {
            const featureKey = `feature.${f}` as TranslationKey;
            return (
              <button
                key={f}
                onClick={() => toggleFeature(f)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                  localFilters.features?.includes(f)
                    ? 'bg-accent-600 text-white shadow-sm'
                    : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                }`}
              >
                {t(featureKey)}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          {t('filter.buildingMaterial')}
        </label>
        <div className="flex flex-wrap gap-1.5">
          {MATERIAL_KEYS.map((m) => {
            const matKey = `filter.material.${m}` as TranslationKey;
            return (
              <button
                key={m}
                onClick={() =>
                  update({
                    buildingMaterial:
                      localFilters.buildingMaterial === m
                        ? undefined
                        : (m as PropertyFilters['buildingMaterial']),
                  })
                }
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                  localFilters.buildingMaterial === m
                    ? 'bg-accent-600 text-white shadow-sm'
                    : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                }`}
              >
                {t(matKey)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  if (onClose !== undefined) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-warm-200 overflow-y-auto p-6 lg:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-base font-semibold text-warm-900">{t('listings.filters')}</h2>
                <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-warm-100 transition-colors duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {content}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    );
  }

  return <aside className="hidden lg:block w-72 shrink-0">{content}</aside>;
}
