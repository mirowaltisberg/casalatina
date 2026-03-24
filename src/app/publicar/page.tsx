'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PROPERTY_TYPE_LABELS,
  FEATURE_LABELS,
  DEPARTMENT_OPTIONS,
} from '@/lib/utils';
import type { PropertyType, Feature } from '@/lib/types';

type Step = 1 | 2 | 3;

export default function PublicarPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: '' as PropertyType | '',
    priceUSD: '',
    city: '',
    department: '',
    terrainSize: '',
    constructionSize: '',
    bedrooms: '',
    bathrooms: '',
    buildingMaterial: '',
    features: [] as Feature[],
    sellerName: '',
    sellerPhone: '',
    sellerType: 'particular' as 'particular' | 'empresa',
  });

  const update = (partial: Partial<typeof form>) => setForm({ ...form, ...partial });

  const toggleFeature = (f: Feature) => {
    const features = form.features.includes(f)
      ? form.features.filter((x) => x !== f)
      : [...form.features, f];
    update({ features });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to /api/properties
    console.log('[CasaLatina] Nuevo listado:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto w-16 h-16 rounded-full bg-success-50 flex items-center justify-center mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success-600">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-warm-900">Propiedad Publicada</h1>
          <p className="mt-2 text-sm text-warm-500 max-w-md mx-auto">
            Su propiedad ha sido recibida y será revisada por nuestro equipo.
            Le notificaremos cuando esté publicada.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(1); setForm({ ...form, title: '', description: '' }); }}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-700 transition-all duration-200"
          >
            Publicar otra propiedad
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-warm-900">Publicar Propiedad</h1>
        <p className="mt-1 text-sm text-warm-500">
          Complete los datos de su propiedad. Es gratis con el plan básico.
        </p>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-3 flex-1">
            <button
              onClick={() => s < step ? setStep(s as Step) : undefined}
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-all duration-300 ${
                s === step
                  ? 'bg-accent-600 text-white shadow-sm'
                  : s < step
                  ? 'bg-success-500 text-white cursor-pointer'
                  : 'bg-warm-200 text-warm-500'
              }`}
            >
              {s < step ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                s
              )}
            </button>
            {s < 3 && (
              <div className={`flex-1 h-0.5 rounded-full transition-colors duration-300 ${s < step ? 'bg-success-500' : 'bg-warm-200'}`} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-warm-500 -mt-4 mb-8 px-1">
        <span>Información</span>
        <span>Detalles</span>
        <span>Contacto</span>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-medium text-warm-700 mb-1.5">Título de la propiedad</label>
                <input
                  required
                  value={form.title}
                  onChange={(e) => update({ title: e.target.value })}
                  className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200 placeholder:text-warm-400"
                  placeholder="Ej: Casa Frente al Mar en Roatán"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-warm-700 mb-1.5">Tipo de propiedad</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => update({ type: value as PropertyType })}
                      className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                        form.type === value
                          ? 'bg-accent-600 text-white shadow-sm'
                          : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-warm-700 mb-1.5">Precio (USD)</label>
                <input
                  type="number"
                  required
                  value={form.priceUSD}
                  onChange={(e) => update({ priceUSD: e.target.value })}
                  className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200 placeholder:text-warm-400"
                  placeholder="150000"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-warm-700 mb-1.5">Descripción</label>
                <textarea
                  required
                  rows={5}
                  value={form.description}
                  onChange={(e) => update({ description: e.target.value })}
                  className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200 resize-none placeholder:text-warm-400"
                  placeholder="Describa la propiedad, sus características y puntos fuertes..."
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!form.title || !form.type || !form.priceUSD}
                className="w-full rounded-lg bg-accent-600 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-700 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Siguiente: Detalles
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-warm-700 mb-1.5">Ciudad</label>
                  <input
                    required
                    value={form.city}
                    onChange={(e) => update({ city: e.target.value })}
                    className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200 placeholder:text-warm-400"
                    placeholder="Ej: Roatán"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-warm-700 mb-1.5">Departamento</label>
                  <select
                    required
                    value={form.department}
                    onChange={(e) => update({ department: e.target.value })}
                    className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-700 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200"
                  >
                    <option value="">Seleccionar...</option>
                    {DEPARTMENT_OPTIONS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium text-warm-700 mb-1.5">Terreno (m²)</label>
                  <input
                    type="number"
                    value={form.terrainSize}
                    onChange={(e) => update({ terrainSize: e.target.value })}
                    className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200"
                    placeholder="500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-warm-700 mb-1.5">Construcción (m²)</label>
                  <input
                    type="number"
                    value={form.constructionSize}
                    onChange={(e) => update({ constructionSize: e.target.value })}
                    className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200"
                    placeholder="200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-warm-700 mb-1.5">Habitaciones</label>
                  <input
                    type="number"
                    value={form.bedrooms}
                    onChange={(e) => update({ bedrooms: e.target.value })}
                    className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200"
                    placeholder="3"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-warm-700 mb-1.5">Baños</label>
                  <input
                    type="number"
                    value={form.bathrooms}
                    onChange={(e) => update({ bathrooms: e.target.value })}
                    className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200"
                    placeholder="2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-warm-700 mb-2">Características</label>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(FEATURE_LABELS).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => toggleFeature(value as Feature)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                        form.features.includes(value as Feature)
                          ? 'bg-accent-600 text-white'
                          : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-warm-700 mb-2">Material de construcción</label>
                <div className="flex flex-wrap gap-2">
                  {['concreto', 'madera', 'adobe', 'mixto', 'piedra'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => update({ buildingMaterial: m })}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                        form.buildingMaterial === m
                          ? 'bg-accent-600 text-white'
                          : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                      }`}
                    >
                      {m.charAt(0).toUpperCase() + m.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 rounded-lg border border-warm-200 bg-white py-3 text-sm font-medium text-warm-700 transition-all duration-200 hover:bg-warm-50"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!form.city || !form.department}
                  className="flex-1 rounded-lg bg-accent-600 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-700 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Siguiente: Contacto
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-medium text-warm-700 mb-2">Tipo de vendedor</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'particular', label: 'Particular' },
                    { value: 'empresa', label: 'Empresa' },
                  ].map(({ value, label }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => update({ sellerType: value as typeof form.sellerType })}
                      className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                        form.sellerType === value
                          ? 'bg-accent-600 text-white shadow-sm'
                          : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-warm-700 mb-1.5">
                  {form.sellerType === 'empresa' ? 'Nombre de la empresa' : 'Nombre completo'}
                </label>
                <input
                  required
                  value={form.sellerName}
                  onChange={(e) => update({ sellerName: e.target.value })}
                  className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200 placeholder:text-warm-400"
                  placeholder={form.sellerType === 'empresa' ? 'Ej: Inversiones ABC S.A.' : 'Ej: Juan Pérez'}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-warm-700 mb-1.5">Teléfono</label>
                <input
                  type="tel"
                  required
                  value={form.sellerPhone}
                  onChange={(e) => update({ sellerPhone: e.target.value })}
                  className="w-full rounded-lg border border-warm-200 bg-white px-3.5 py-2.5 text-sm text-warm-900 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-300 transition-all duration-200 placeholder:text-warm-400"
                  placeholder="+504 9999-9999"
                />
              </div>

              <div className="rounded-lg bg-warm-50 border border-warm-200 p-4">
                <p className="text-xs text-warm-600 leading-relaxed">
                  Al publicar su propiedad, acepta que CasaLatina mediará el primer contacto con posibles compradores.
                  Sus datos de contacto no se mostrarán públicamente. Podrá gestionar las consultas desde su panel.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 rounded-lg border border-warm-200 bg-white py-3 text-sm font-medium text-warm-700 transition-all duration-200 hover:bg-warm-50"
                >
                  Anterior
                </button>
                <button
                  type="submit"
                  disabled={!form.sellerName || !form.sellerPhone}
                  className="flex-1 rounded-lg bg-accent-600 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-700 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Publicar Propiedad
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
