'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Property } from '@/lib/types';
import { ImageGallery } from '@/components/ui/ImageGallery';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import { LegalBadge } from '@/components/ui/LegalBadge';
import { ContactForm } from '@/components/ui/ContactForm';
import { Skeleton } from '@/components/ui/Skeleton';
import { PROPERTY_TYPE_LABELS, FEATURE_LABELS } from '@/lib/utils';

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setProperty)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-[400px] w-full rounded-xl" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="h-64 w-full rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-lg font-medium text-warm-700">Propiedad no encontrada</p>
        <Link href="/propiedades" className="mt-4 inline-flex text-sm text-accent-600 hover:text-accent-700 font-medium">
          Volver a propiedades
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-warm-500 mb-6">
        <Link href="/" className="hover:text-warm-700 transition-colors duration-200">Inicio</Link>
        <span>/</span>
        <Link href="/propiedades" className="hover:text-warm-700 transition-colors duration-200">Propiedades</Link>
        <span>/</span>
        <span className="text-warm-700 truncate max-w-[200px]">{property.title}</span>
      </nav>

      {/* Gallery */}
      <ImageGallery images={property.images} title={property.title} />

      {/* Content grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Title & Price */}
          <div>
            <div className="flex flex-wrap items-start gap-2 mb-2">
              <span className="inline-flex items-center rounded-md bg-warm-100 px-2.5 py-1 text-xs font-medium text-warm-700">
                {PROPERTY_TYPE_LABELS[property.type]}
              </span>
              {property.promoted && (
                <span className="inline-flex items-center rounded-md bg-accent-100 px-2.5 py-1 text-xs font-medium text-accent-700">
                  Destacado
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-warm-900 mt-3">{property.title}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-warm-500">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {property.location.city}, {property.location.department}, {property.location.country}
            </p>
            <div className="mt-4">
              <PriceDisplay priceUSD={property.priceUSD} size="lg" />
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {property.size.terrain ? (
              <div className="rounded-lg bg-warm-50 border border-warm-200 p-4 text-center">
                <p className="text-xs text-warm-500">Terreno</p>
                <p className="text-base font-semibold text-warm-900 mt-1">{property.size.terrain.toLocaleString()} m²</p>
              </div>
            ) : null}
            {property.size.construction ? (
              <div className="rounded-lg bg-warm-50 border border-warm-200 p-4 text-center">
                <p className="text-xs text-warm-500">Construcción</p>
                <p className="text-base font-semibold text-warm-900 mt-1">{property.size.construction.toLocaleString()} m²</p>
              </div>
            ) : null}
            {property.bedrooms ? (
              <div className="rounded-lg bg-warm-50 border border-warm-200 p-4 text-center">
                <p className="text-xs text-warm-500">Habitaciones</p>
                <p className="text-base font-semibold text-warm-900 mt-1">{property.bedrooms}</p>
              </div>
            ) : null}
            {property.bathrooms ? (
              <div className="rounded-lg bg-warm-50 border border-warm-200 p-4 text-center">
                <p className="text-xs text-warm-500">Baños</p>
                <p className="text-base font-semibold text-warm-900 mt-1">{property.bathrooms}</p>
              </div>
            ) : null}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-base font-semibold text-warm-900 mb-3">Descripción</h2>
            <p className="text-sm text-warm-600 leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-base font-semibold text-warm-900 mb-3">Características</h2>
            <div className="flex flex-wrap gap-2">
              {property.features.map((f) => (
                <span key={f} className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1.5 text-xs font-medium text-accent-700">
                  {FEATURE_LABELS[f]}
                </span>
              ))}
              {property.buildingMaterial && (
                <span className="inline-flex items-center rounded-full bg-warm-100 px-3 py-1.5 text-xs font-medium text-warm-700">
                  {property.buildingMaterial.charAt(0).toUpperCase() + property.buildingMaterial.slice(1)}
                </span>
              )}
              {property.houseType && (
                <span className="inline-flex items-center rounded-full bg-warm-100 px-3 py-1.5 text-xs font-medium text-warm-700">
                  {property.houseType.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                </span>
              )}
            </div>
          </div>

          {/* Legal status (large, inline) */}
          <LegalBadge legalStatus={property.legalStatus} />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Seller info */}
          <div className="rounded-xl border border-warm-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-100 text-warm-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-warm-900">{property.seller.name}</p>
                <p className="text-xs text-warm-500">
                  {property.seller.type === 'empresa' ? 'Empresa inmobiliaria' : 'Vendedor particular'}
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <ContactForm propertyId={property.id} sellerName={property.seller.name} />

          {/* Exchange rate info */}
          <div className="rounded-xl border border-warm-200 bg-warm-50 p-5">
            <p className="text-xs text-warm-500">
              <span className="font-medium text-warm-700">Tipo de cambio referencial:</span> 1 USD = 24.72 HNL
            </p>
            <p className="text-[11px] text-warm-400 mt-1">
              Fuente: Banco Central de Honduras. El tipo de cambio puede variar al momento de la transacción.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
