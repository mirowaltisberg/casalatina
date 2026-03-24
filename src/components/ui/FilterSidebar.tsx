'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PropertyFilters, Feature } from '@/lib/types';
import {
  PROPERTY_TYPE_LABELS,
  FEATURE_LABELS,
  DEPARTMENT_OPTIONS,
} from '@/lib/utils';

interface FilterSidebarProps {
  filters: PropertyFilters;
  onChange: (filters: PropertyFilters) => void;
  onClose?: () => void;
  isOpen?: boolean;
}

export function FilterSidebar({ filters, onChange, onClose, isOpen = true }: FilterSidebarProps) {
  const [localFilters, setLocalFilters] = useState<PropertyFilters>(filters);

  const update = (partial: Partial<PropertyFilters>) => {
    const next = { ...localFilters, ...partial };
    setLocalFilters(next);
    onChange(next);
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

  const content = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-warm-900">Filtros</h2>
        <button
          onClick={clearAll}
          className="text-xs text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200"
        >
          Limpiar todo
        </button>
      </div>

      {/* Property type */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          Tipo de propiedad
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
            <button
              key={value}
              onClick={() => update({ type: localFilters.type === value ? undefined : value as PropertyFilters['type'] })}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 ${
                localFilters.type === value
                  ? 'bg-accent-600 text-white shadow-sm'
                  : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Department */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          Departamento
        </label>
        <select
          value={localFilters.department ?? ''}
          onChange={(e) => update({ department: e.target.value || undefined })}
          className="w-full rounded-lg border border-warm-200 bg-white px-3 py-2.5 text-sm text-warm-700 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200"
        >
          <option value="">Todos</option>
          {DEPARTMENT_OPTIONS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Price range */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          Rango de precio (USD)
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Mín"
            value={localFilters.minPrice ?? ''}
            onChange={(e) => update({ minPrice: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full rounded-lg border border-warm-200 bg-white px-3 py-2.5 text-sm text-warm-700 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200"
          />
          <input
            type="number"
            placeholder="Máx"
            value={localFilters.maxPrice ?? ''}
            onChange={(e) => update({ maxPrice: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full rounded-lg border border-warm-200 bg-white px-3 py-2.5 text-sm text-warm-700 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200"
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          Habitaciones mínimas
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

      {/* Features */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          Características
        </label>
        <div className="flex flex-wrap gap-1.5">
          {Object.entries(FEATURE_LABELS).map(([value, label]) => (
            <button
              key={value}
              onClick={() => toggleFeature(value as Feature)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                localFilters.features?.includes(value as Feature)
                  ? 'bg-accent-600 text-white shadow-sm'
                  : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Building material */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">
          Material de construcción
        </label>
        <div className="flex flex-wrap gap-1.5">
          {[
            { value: 'concreto', label: 'Concreto' },
            { value: 'madera', label: 'Madera' },
            { value: 'adobe', label: 'Adobe' },
            { value: 'mixto', label: 'Mixto' },
            { value: 'piedra', label: 'Piedra' },
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() =>
                update({
                  buildingMaterial:
                    localFilters.buildingMaterial === value
                      ? undefined
                      : (value as PropertyFilters['buildingMaterial']),
                })
              }
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                localFilters.buildingMaterial === value
                  ? 'bg-accent-600 text-white shadow-sm'
                  : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile: slide-in overlay
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
                <h2 className="text-base font-semibold text-warm-900">Filtros</h2>
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

  // Desktop: static sidebar
  return <aside className="hidden lg:block w-72 shrink-0">{content}</aside>;
}
