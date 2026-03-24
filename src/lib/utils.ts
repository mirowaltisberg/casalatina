import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(amount: number, currency: 'USD' | 'HNL' = 'USD'): string {
  return new Intl.NumberFormat('es-HN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function convertToHNL(usd: number, rate: number): number {
  return Math.round(usd * rate);
}

export const PROPERTY_TYPE_LABELS: Record<string, string> = {
  casa: 'Casa',
  terreno: 'Terreno',
  apartamento: 'Apartamento',
  finca: 'Finca',
};

export const FEATURE_LABELS: Record<string, string> = {
  vista_al_mar: 'Vista al Mar',
  playa: 'Playa',
  montañas: 'Montañas',
  ciudad: 'Ciudad',
  pueblo: 'Pueblo',
  colonial: 'Colonial',
  isla: 'Isla',
  rio: 'Río',
  bosque: 'Bosque',
};

export const DEPARTMENT_OPTIONS = [
  'Atlántida',
  'Colón',
  'Comayagua',
  'Copán',
  'Cortés',
  'Francisco Morazán',
  'Gracias a Dios',
  'Islas de la Bahía',
  'Lempira',
  'Ocotepeque',
  'Olancho',
  'Santa Bárbara',
  'Valle',
  'Yoro',
];

export const LEGAL_STATUS_LABELS: Record<string, { label: string; description: string }> = {
  registeredMunicipality: {
    label: 'Registro Municipal',
    description: 'Registrado en la municipalidad correspondiente',
  },
  inLandRegistry: {
    label: 'Registro de Propiedad',
    description: 'Inscrito en el Instituto de la Propiedad',
  },
  taxesCurrent: {
    label: 'Impuestos al Día',
    description: 'Todos los impuestos municipales están al día',
  },
  legallyClear: {
    label: 'Sin Gravámenes',
    description: 'Libre de hipotecas, embargos y gravámenes',
  },
};
