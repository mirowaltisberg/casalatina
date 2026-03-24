import { NextRequest, NextResponse } from 'next/server';
import { properties } from '@/data/properties';
import type { PropertyFilters } from '@/lib/types';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const filters: PropertyFilters = {
    listingType: searchParams.get('listingType') as PropertyFilters['listingType'] ?? undefined,
    type: searchParams.get('type') as PropertyFilters['type'] ?? undefined,
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    department: searchParams.get('department') ?? undefined,
    features: searchParams.get('features')?.split(',') as PropertyFilters['features'] ?? undefined,
    minSize: searchParams.get('minSize') ? Number(searchParams.get('minSize')) : undefined,
    maxSize: searchParams.get('maxSize') ? Number(searchParams.get('maxSize')) : undefined,
    bedrooms: searchParams.get('bedrooms') ? Number(searchParams.get('bedrooms')) : undefined,
    buildingMaterial: searchParams.get('buildingMaterial') as PropertyFilters['buildingMaterial'] ?? undefined,
    search: searchParams.get('search') ?? undefined,
  };

  let filtered = [...properties];

  if (filters.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.location.city.toLowerCase().includes(q) ||
        p.location.department.toLowerCase().includes(q)
    );
  }

  if (filters.listingType) {
    filtered = filtered.filter((p) => p.listingType === filters.listingType);
  }

  if (filters.type) {
    filtered = filtered.filter((p) => p.type === filters.type);
  }

  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.priceUSD >= filters.minPrice!);
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.priceUSD <= filters.maxPrice!);
  }

  if (filters.department) {
    filtered = filtered.filter((p) => p.location.department === filters.department);
  }

  if (filters.features?.length) {
    filtered = filtered.filter((p) =>
      filters.features!.some((f) => p.features.includes(f))
    );
  }

  if (filters.minSize !== undefined) {
    filtered = filtered.filter((p) => (p.size.terrain ?? p.size.construction ?? 0) >= filters.minSize!);
  }

  if (filters.bedrooms !== undefined) {
    filtered = filtered.filter((p) => (p.bedrooms ?? 0) >= filters.bedrooms!);
  }

  if (filters.buildingMaterial) {
    filtered = filtered.filter((p) => p.buildingMaterial === filters.buildingMaterial);
  }

  // Promoted first, then by date
  filtered.sort((a, b) => {
    if (a.promoted && !b.promoted) return -1;
    if (!a.promoted && b.promoted) return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return NextResponse.json({ properties: filtered, total: filtered.length });
}
