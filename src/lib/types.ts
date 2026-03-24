export type PropertyType = 'casa' | 'terreno' | 'apartamento' | 'finca';

export type Feature =
  | 'vista_al_mar'
  | 'playa'
  | 'montañas'
  | 'ciudad'
  | 'pueblo'
  | 'colonial'
  | 'isla'
  | 'rio'
  | 'bosque';

export type BuildingMaterial = 'concreto' | 'madera' | 'adobe' | 'mixto' | 'piedra';

export type HouseType = 'una_planta' | 'dos_plantas' | 'cabaña' | 'villa' | 'colonial';

export interface LegalStatus {
  registeredMunicipality: boolean;
  inLandRegistry: boolean;
  taxesCurrent: boolean;
  legallyClear: boolean;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  priceUSD: number;
  images: string[];
  location: {
    city: string;
    department: string;
    country: string;
    coordinates?: { lat: number; lng: number };
  };
  features: Feature[];
  size: {
    terrain?: number; // m²
    construction?: number; // m²
  };
  bedrooms?: number;
  bathrooms?: number;
  buildingMaterial?: BuildingMaterial;
  houseType?: HouseType;
  legalStatus: LegalStatus;
  seller: {
    name: string;
    type: 'particular' | 'empresa';
    phone?: string;
  };
  promoted: boolean;
  createdAt: string;
}

export interface ContactFormData {
  propertyId: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface PropertyFilters {
  type?: PropertyType;
  minPrice?: number;
  maxPrice?: number;
  department?: string;
  features?: Feature[];
  minSize?: number;
  maxSize?: number;
  bedrooms?: number;
  buildingMaterial?: BuildingMaterial;
  search?: string;
}

export interface ExchangeRate {
  usdToHnl: number;
  source: string;
  updatedAt: string;
}
