'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Property } from '@/lib/types';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { PropertyCardSkeleton } from '@/components/ui/Skeleton';
import { useI18n } from '@/lib/i18n';

export function FeaturedListings() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useI18n();

  useEffect(() => {
    fetch('/api/properties')
      .then((res) => res.json())
      .then((data) => setProperties(data.properties.filter((p: Property) => p.promoted).slice(0, 4)))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 bg-warm-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-warm-900">
              {t('featured.title')}
            </h2>
            <p className="mt-2 text-sm text-warm-500">
              {t('featured.subtitle')}
            </p>
          </div>
          <Link
            href="/propiedades"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors duration-200"
          >
            {t('featured.viewAll')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <PropertyCardSkeleton key={i} />)
            : properties.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/propiedades"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600"
          >
            {t('featured.viewAllMobile')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
