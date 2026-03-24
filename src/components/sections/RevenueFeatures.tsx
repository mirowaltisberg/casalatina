'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const plans = [
  {
    name: 'Básico',
    price: 'Gratis',
    description: 'Para vendedores ocasionales',
    features: [
      'Publicar hasta 2 propiedades',
      'Fotos estándar (3 máx.)',
      'Visibilidad normal',
      'Contacto mediado',
    ],
    cta: 'Comenzar Gratis',
    popular: false,
  },
  {
    name: 'Destacado',
    price: '$29/mes',
    description: 'Para vendedores activos',
    features: [
      'Publicar hasta 10 propiedades',
      'Fotos HD ilimitadas',
      'Listado destacado con prioridad',
      'Insignia de vendedor verificado',
      'Estadísticas de visitas',
    ],
    cta: 'Elegir Plan',
    popular: true,
  },
  {
    name: 'Premium',
    price: '$79/mes',
    description: 'Para empresas inmobiliarias',
    features: [
      'Propiedades ilimitadas',
      'Verificación legal incluida',
      'Posicionamiento prioritario',
      'Página de empresa personalizada',
      'Soporte dedicado',
      'API de integración',
    ],
    cta: 'Contactar Ventas',
    popular: false,
  },
];

export function RevenueFeatures() {
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
            Planes para Vendedores
          </h2>
          <p className="mt-3 text-sm text-warm-500">
            Elige el plan que mejor se adapte a tus necesidades. Cancela cuando quieras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
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
                  Más Popular
                </div>
              )}

              <h3 className="text-base font-semibold text-warm-900">{plan.name}</h3>
              <p className="text-xs text-warm-500 mt-1">{plan.description}</p>
              <p className="mt-4 text-3xl font-bold text-warm-900">{plan.price}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-warm-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success-500 mt-0.5 shrink-0">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
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
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
