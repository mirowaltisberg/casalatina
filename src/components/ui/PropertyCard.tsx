'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Property } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { LegalBadge } from './LegalBadge';
import { useI18n } from '@/lib/i18n';
import type { TranslationKey } from '@/lib/translations';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const { t } = useI18n();

  const typeKey = `type.${property.type}` as TranslationKey;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35, ease: 'easeOut' }}
    >
      <Link href={`/propiedades/${property.id}`} className="group block">
        <div className="rounded-xl border border-warm-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-warm-200/50 hover:-translate-y-1">
          <div className="relative h-52 overflow-hidden">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-3 left-3 flex gap-1.5">
              {property.promoted && (
                <span className="rounded-full bg-accent-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                  {t('featured.promoted')}
                </span>
              )}
              <span className={`rounded-full px-3 py-1 text-xs font-medium text-white shadow-sm ${
                property.listingType === 'alquiler' ? 'bg-blue-600' : 'bg-success-600'
              }`}>
                {t(`listingType.badge.${property.listingType}` as TranslationKey)}
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <LegalBadge legalStatus={property.legalStatus} compact />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-warm-900 truncate group-hover:text-accent-700 transition-colors duration-200">
                  {property.title}
                </h3>
                <p className="mt-1 text-sm text-warm-500 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {property.location.city}, {property.location.department}
                </p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center rounded-md bg-warm-100 px-2 py-0.5 text-xs font-medium text-warm-700">
                {t(typeKey)}
              </span>
              {property.features.slice(0, 2).map((f) => {
                const featureKey = `feature.${f}` as TranslationKey;
                return (
                  <span key={f} className="inline-flex items-center rounded-md bg-accent-50 px-2 py-0.5 text-xs font-medium text-accent-700">
                    {t(featureKey)}
                  </span>
                );
              })}
            </div>

            <div className="mt-3 flex items-center gap-4 text-xs text-warm-500">
              {property.size.terrain ? (
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                  {property.size.terrain.toLocaleString()} m²
                </span>
              ) : null}
              {property.bedrooms ? (
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 4v16M22 4v16M2 8h20M2 16h20M6 8v8M18 8v8" />
                  </svg>
                  {property.bedrooms} {t('card.rooms')}
                </span>
              ) : null}
              {property.bathrooms ? (
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1zM6 12V5a2 2 0 012-2h3v2.25" />
                  </svg>
                  {property.bathrooms} {t('card.baths')}
                </span>
              ) : null}
            </div>

            <div className="mt-4 pt-3 border-t border-warm-100 flex items-end justify-between">
              <p className="text-lg font-bold text-warm-900">
                {formatPrice(property.priceUSD, 'USD')}
                {property.listingType === 'alquiler' && <span className="text-xs font-normal text-warm-500">{t('listingType.perMonth')}</span>}
              </p>
              <p className="text-xs text-warm-400">
                {property.seller.type === 'empresa' ? t('card.company') : t('card.individual')}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
