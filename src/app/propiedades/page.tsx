'use client';

import { useEffect, useState, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import type { Property, PropertyFilters } from '@/lib/types';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { FilterSidebar } from '@/components/ui/FilterSidebar';
import { PropertyCardSkeleton } from '@/components/ui/Skeleton';

function PropertyListContent() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [filters, setFilters] = useState<PropertyFilters>(() => ({
    search: searchParams.get('search') ?? undefined,
    type: (searchParams.get('type') as PropertyFilters['type']) ?? undefined,
    department: searchParams.get('department') ?? undefined,
  }));

  const fetchProperties = useCallback(async (f: PropertyFilters) => {
    setLoading(true);
    const params = new URLSearchParams();
    if (f.search) params.set('search', f.search);
    if (f.type) params.set('type', f.type);
    if (f.department) params.set('department', f.department);
    if (f.minPrice) params.set('minPrice', String(f.minPrice));
    if (f.maxPrice) params.set('maxPrice', String(f.maxPrice));
    if (f.features?.length) params.set('features', f.features.join(','));
    if (f.bedrooms) params.set('bedrooms', String(f.bedrooms));
    if (f.buildingMaterial) params.set('buildingMaterial', f.buildingMaterial);

    try {
      const res = await fetch(`/api/properties?${params.toString()}`);
      const data = await res.json();
      setProperties(data.properties);
    } catch {
      setProperties([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProperties(filters);
  }, [filters, fetchProperties]);

  const handleFilterChange = (newFilters: PropertyFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">Propiedades</h1>
          <p className="mt-1 text-sm text-warm-500">
            {loading ? 'Buscando...' : `${properties.length} propiedades encontradas`}
          </p>
        </div>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="lg:hidden inline-flex items-center gap-2 rounded-lg border border-warm-200 bg-white px-4 py-2.5 text-sm font-medium text-warm-700 transition-all duration-200 hover:bg-warm-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
          Filtros
        </button>
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <FilterSidebar filters={filters} onChange={handleFilterChange} />

        {/* Mobile sidebar */}
        <FilterSidebar
          filters={filters}
          onChange={handleFilterChange}
          isOpen={mobileFiltersOpen}
          onClose={() => setMobileFiltersOpen(false)}
        />

        {/* Results */}
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <PropertyCardSkeleton key={i} />
              ))}
            </div>
          ) : properties.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-warm-100 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-warm-400">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <p className="text-base font-medium text-warm-700">No se encontraron propiedades</p>
              <p className="mt-1 text-sm text-warm-500">Intenta ajustar los filtros de búsqueda</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PropiedadesPage() {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <PropertyCardSkeleton key={i} />
          ))}
        </div>
      </div>
    }>
      <PropertyListContent />
    </Suspense>
  );
}
