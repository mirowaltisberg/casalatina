import type { Property, PropertyType, Feature, BuildingMaterial, HouseType, ListingType } from '@/lib/types';

// Seed-based pseudo-random for deterministic generation
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const IMAGES = [
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop',
];

interface LocationData {
  city: string;
  department: string;
  features: Feature[];
  lat: number;
  lng: number;
}

const LOCATIONS: LocationData[] = [
  { city: 'Roatán', department: 'Islas de la Bahía', features: ['vista_al_mar', 'playa', 'isla'], lat: 16.32, lng: -86.53 },
  { city: 'West End, Roatán', department: 'Islas de la Bahía', features: ['vista_al_mar', 'playa', 'isla'], lat: 16.30, lng: -86.60 },
  { city: 'West Bay, Roatán', department: 'Islas de la Bahía', features: ['vista_al_mar', 'playa', 'isla'], lat: 16.29, lng: -86.62 },
  { city: 'Utila', department: 'Islas de la Bahía', features: ['isla', 'playa', 'vista_al_mar'], lat: 16.09, lng: -86.89 },
  { city: 'Tegucigalpa', department: 'Francisco Morazán', features: ['ciudad'], lat: 14.08, lng: -87.21 },
  { city: 'Lomas del Guijarro', department: 'Francisco Morazán', features: ['ciudad'], lat: 14.09, lng: -87.19 },
  { city: 'Valle de Ángeles', department: 'Francisco Morazán', features: ['montañas', 'pueblo', 'bosque'], lat: 14.15, lng: -87.04 },
  { city: 'San Pedro Sula', department: 'Cortés', features: ['ciudad'], lat: 15.50, lng: -88.03 },
  { city: 'La Lima', department: 'Cortés', features: ['ciudad'], lat: 15.44, lng: -87.92 },
  { city: 'Puerto Cortés', department: 'Cortés', features: ['playa', 'vista_al_mar'], lat: 15.84, lng: -87.95 },
  { city: 'La Ceiba', department: 'Atlántida', features: ['playa', 'vista_al_mar'], lat: 15.76, lng: -86.80 },
  { city: 'Tela', department: 'Atlántida', features: ['playa', 'vista_al_mar'], lat: 15.78, lng: -87.47 },
  { city: 'El Porvenir', department: 'Atlántida', features: ['playa', 'bosque'], lat: 15.79, lng: -87.10 },
  { city: 'Copán Ruinas', department: 'Copán', features: ['colonial', 'pueblo', 'montañas'], lat: 14.84, lng: -89.14 },
  { city: 'Santa Rosa de Copán', department: 'Copán', features: ['montañas', 'colonial'], lat: 14.77, lng: -88.78 },
  { city: 'Comayagua', department: 'Comayagua', features: ['colonial', 'ciudad'], lat: 14.45, lng: -87.64 },
  { city: 'Siguatepeque', department: 'Comayagua', features: ['montañas', 'bosque'], lat: 14.60, lng: -87.84 },
  { city: 'Gracias', department: 'Lempira', features: ['montañas', 'bosque', 'pueblo'], lat: 14.59, lng: -88.58 },
  { city: 'Trujillo', department: 'Colón', features: ['playa', 'vista_al_mar'], lat: 15.92, lng: -85.95 },
  { city: 'Santa Fe', department: 'Colón', features: ['playa', 'pueblo'], lat: 15.80, lng: -85.80 },
  { city: 'Danlí', department: 'El Paraíso', features: ['montañas'], lat: 14.04, lng: -86.57 },
  { city: 'Choluteca', department: 'Choluteca', features: ['ciudad'], lat: 13.30, lng: -87.19 },
  { city: 'Amapala', department: 'Valle', features: ['isla', 'vista_al_mar', 'pueblo'], lat: 13.29, lng: -87.66 },
  { city: 'Lago de Yojoa', department: 'Santa Bárbara', features: ['montañas', 'bosque', 'rio'], lat: 14.87, lng: -87.98 },
  { city: 'Catacamas', department: 'Olancho', features: ['montañas', 'rio', 'bosque'], lat: 14.80, lng: -85.90 },
  { city: 'Juticalpa', department: 'Olancho', features: ['ciudad', 'montañas'], lat: 14.67, lng: -86.22 },
];

const PROPERTY_TYPES: PropertyType[] = ['casa', 'terreno', 'apartamento', 'finca'];
const MATERIALS: BuildingMaterial[] = ['concreto', 'madera', 'adobe', 'mixto', 'piedra'];
const HOUSE_TYPES: HouseType[] = ['una_planta', 'dos_plantas', 'cabaña', 'villa', 'colonial'];
const LISTING_TYPES: ListingType[] = ['venta', 'alquiler'];

const SELLER_NAMES_PARTICULAR = [
  'Juan Carlos Mejía', 'María Elena Gómez', 'Roberto Hernández', 'Ana Lucía López',
  'Carlos Andino', 'Patricia Reyes', 'José Manuel Flores', 'Sandra Castellanos',
  'Fernando Díaz', 'Gabriela Santos', 'Ricardo Paz', 'Claudia Martínez',
  'Luis Alberto Ramos', 'Daniela Mendoza', 'Marco Antonio Cruz', 'Rosa Amelia Pineda',
  'James Mitchell', 'David Thompson', 'Sarah Williams', 'Michael Johnson',
];

const SELLER_NAMES_EMPRESA = [
  'Caribbean Realty Group', 'Inversiones Morazán S.A.', 'Grupo Inmobiliario del Norte',
  'Bienes Raíces Colón', 'Honduras Property Solutions', 'Roatán Dream Homes',
  'Bay Islands Real Estate', 'Central Inmobiliaria', 'Pacific Coast Properties',
  'Inversiones Centroamérica', 'Casa Ideal Honduras', 'Propiedades del Caribe',
  'Elite Realty HN', 'Inversiones Atlántica', 'Grupo Residencial Maya',
];

const TITLE_TEMPLATES: Record<PropertyType, Record<ListingType, string[]>> = {
  casa: {
    venta: [
      'Casa {adj} en {city}',
      'Residencia {adj} en {city}',
      'Casa de {beds} Habitaciones en {city}',
      'Hermosa Casa {adj} en {city}',
      'Casa con {feature} en {city}',
    ],
    alquiler: [
      'Casa en Alquiler en {city}',
      'Alquiler de Casa {adj} en {city}',
      'Renta de Casa con {feature} en {city}',
      'Casa Amueblada en {city}',
    ],
  },
  terreno: {
    venta: [
      'Terreno {adj} en {city}',
      'Lote de {size}m² en {city}',
      'Terreno con {feature} en {city}',
      'Terreno Ideal para Inversión en {city}',
    ],
    alquiler: [
      'Terreno en Alquiler en {city}',
      'Lote Comercial en Alquiler en {city}',
    ],
  },
  apartamento: {
    venta: [
      'Apartamento {adj} en {city}',
      'Apartamento de {beds} Habitaciones en {city}',
      'Penthouse {adj} en {city}',
      'Apartamento con {feature} en {city}',
    ],
    alquiler: [
      'Apartamento en Alquiler en {city}',
      'Alquiler Apartamento {adj} en {city}',
      'Apartamento Amueblado en {city}',
      'Studio en Alquiler en {city}',
    ],
  },
  finca: {
    venta: [
      'Finca {adj} en {city}',
      'Finca de {size}m² en {city}',
      'Finca Cafetalera en {city}',
      'Finca con {feature} en {city}',
    ],
    alquiler: [
      'Finca en Alquiler en {city}',
      'Eco-Finca en Alquiler en {city}',
    ],
  },
};

const ADJECTIVES = [
  'Moderna', 'Espaciosa', 'Lujosa', 'Acogedora', 'Renovada',
  'Contemporánea', 'Elegante', 'Colonial', 'Tropical', 'Premium',
];

const FEATURE_NAMES: Record<string, string> = {
  vista_al_mar: 'Vista al Mar',
  playa: 'Acceso a Playa',
  montañas: 'Vista a Montañas',
  bosque: 'Rodeada de Bosque',
  rio: 'Acceso a Río',
  isla: 'Ubicación en Isla',
};

const DESC_TEMPLATES = [
  'Excelente propiedad ubicada en {city}, {department}. {adj} y bien mantenida, con acabados de primera calidad. Zona residencial tranquila con todos los servicios cercanos. No pierda esta oportunidad única de inversión.',
  'Propiedad {adj} en una de las mejores zonas de {city}. Cuenta con amplios espacios, iluminación natural y diseño funcional. Ideal para familias o inversión. Zona en constante valorización.',
  'Increíble oportunidad en {city}, {department}. Esta propiedad ofrece {feature_desc}, espacios amplios y una ubicación privilegiada. Documentación al día y lista para escrituración.',
  'Hermosa propiedad en {city} con {feature_desc}. Diseño {adj2} que combina funcionalidad con estética. Ubicada en zona segura con acceso a servicios esenciales. Excelente relación precio-calidad.',
  'Propiedad de primera en {city}, ideal tanto para vivir como para inversión. Ubicación estratégica, {feature_desc} y acabados premium. Zona de alta plusvalía con proyección de crecimiento.',
];

function pick<T>(arr: T[], rand: () => number): T {
  return arr[Math.floor(rand() * arr.length)];
}

function pickN<T>(arr: T[], n: number, rand: () => number): T[] {
  const shuffled = [...arr].sort(() => rand() - 0.5);
  return shuffled.slice(0, Math.min(n, arr.length));
}

function generateProperty(index: number): Property {
  const rand = seededRandom(index * 7919 + 42);

  const loc = pick(LOCATIONS, rand);
  const propType = pick(PROPERTY_TYPES, rand);
  const listingType: ListingType = rand() < 0.7 ? 'venta' : 'alquiler';
  const isRental = listingType === 'alquiler';

  // Price ranges based on type and listing
  let priceUSD: number;
  if (isRental) {
    switch (propType) {
      case 'casa': priceUSD = Math.round((300 + rand() * 2200) / 50) * 50; break;
      case 'apartamento': priceUSD = Math.round((200 + rand() * 1500) / 50) * 50; break;
      case 'terreno': priceUSD = Math.round((100 + rand() * 500) / 50) * 50; break;
      case 'finca': priceUSD = Math.round((500 + rand() * 3000) / 100) * 100; break;
    }
  } else {
    switch (propType) {
      case 'casa': priceUSD = Math.round((45000 + rand() * 450000) / 5000) * 5000; break;
      case 'apartamento': priceUSD = Math.round((35000 + rand() * 300000) / 5000) * 5000; break;
      case 'terreno': priceUSD = Math.round((15000 + rand() * 200000) / 5000) * 5000; break;
      case 'finca': priceUSD = Math.round((50000 + rand() * 350000) / 5000) * 5000; break;
    }
  }

  const bedrooms = propType === 'terreno' ? undefined : Math.ceil(rand() * 5);
  const bathrooms = propType === 'terreno' ? undefined : Math.ceil(rand() * (bedrooms ?? 3));
  const terrain = propType === 'finca'
    ? Math.round((5000 + rand() * 200000) / 100) * 100
    : propType === 'terreno'
    ? Math.round((200 + rand() * 10000) / 50) * 50
    : Math.round((150 + rand() * 2000) / 50) * 50;
  const construction = propType === 'terreno' ? undefined : Math.round((60 + rand() * 400) / 10) * 10;

  const material = propType === 'terreno' ? undefined : pick(MATERIALS, rand);
  const houseType = (propType === 'casa' || propType === 'finca') ? pick(HOUSE_TYPES, rand) : undefined;

  // Features: location features + 0-2 extra
  const extraFeatures: Feature[] = ['vista_al_mar', 'playa', 'montañas', 'ciudad', 'pueblo', 'colonial', 'isla', 'rio', 'bosque'];
  const locFeatures = loc.features;
  const extra = pickN(extraFeatures.filter(f => !locFeatures.includes(f)), Math.floor(rand() * 2), rand);
  const features = [...new Set([...locFeatures, ...extra])];

  // Legal status - realistic distribution
  const legalRoll = rand();
  const legalStatus = legalRoll < 0.25
    ? { registeredMunicipality: true, inLandRegistry: true, taxesCurrent: true, legallyClear: true }
    : legalRoll < 0.5
    ? { registeredMunicipality: true, inLandRegistry: true, taxesCurrent: rand() > 0.3, legallyClear: rand() > 0.4 }
    : legalRoll < 0.75
    ? { registeredMunicipality: true, inLandRegistry: rand() > 0.5, taxesCurrent: rand() > 0.5, legallyClear: rand() > 0.5 }
    : { registeredMunicipality: rand() > 0.3, inLandRegistry: rand() > 0.6, taxesCurrent: rand() > 0.6, legallyClear: rand() > 0.7 };

  // Seller
  const isCompany = rand() > 0.6;
  const seller = isCompany
    ? { name: pick(SELLER_NAMES_EMPRESA, rand), type: 'empresa' as const }
    : { name: pick(SELLER_NAMES_PARTICULAR, rand), type: 'particular' as const };

  // Title
  const adj = pick(ADJECTIVES, rand);
  const templates = TITLE_TEMPLATES[propType][listingType];
  let title = pick(templates, rand);
  title = title
    .replace('{city}', loc.city)
    .replace('{adj}', adj)
    .replace('{beds}', String(bedrooms ?? 3))
    .replace('{size}', terrain.toLocaleString())
    .replace('{feature}', FEATURE_NAMES[features[0]] ?? 'Excelente Ubicación');

  // Description
  const adj2 = pick(ADJECTIVES, rand);
  const featureDesc = features.slice(0, 2).map(f => FEATURE_NAMES[f] ?? f).join(' y ');
  let description = pick(DESC_TEMPLATES, rand);
  description = description
    .replace('{city}', loc.city)
    .replace('{department}', loc.department)
    .replace('{adj}', adj.toLowerCase())
    .replace('{adj2}', adj2.toLowerCase())
    .replace('{feature_desc}', featureDesc || 'excelente ubicación');

  if (isRental) {
    description += ' Disponible para alquiler mensual. ' + (rand() > 0.5 ? 'Incluye servicios básicos.' : 'Amueblado disponible bajo consulta.');
  }

  // Images: 2-4 random
  const imageCount = 2 + Math.floor(rand() * 3);
  const images = pickN(IMAGES, imageCount, rand);

  // Promoted: ~15%
  const promoted = rand() < 0.15;

  // Date: random in last 90 days
  const daysAgo = Math.floor(rand() * 90);
  const date = new Date(2026, 2, 24);
  date.setDate(date.getDate() - daysAgo);
  const createdAt = date.toISOString().split('T')[0];

  return {
    id: `prop-${String(index + 11).padStart(3, '0')}`,
    title,
    description,
    type: propType,
    listingType,
    priceUSD,
    images,
    location: {
      city: loc.city,
      department: loc.department,
      country: 'Honduras',
      coordinates: { lat: loc.lat + (rand() - 0.5) * 0.1, lng: loc.lng + (rand() - 0.5) * 0.1 },
    },
    features,
    size: { terrain, construction },
    bedrooms,
    bathrooms,
    buildingMaterial: material,
    houseType,
    legalStatus,
    seller,
    promoted,
    createdAt,
  };
}

// Original 10 hand-crafted properties
const handcrafted: Property[] = [
  {
    id: 'roatan-villa-001',
    title: 'Villa Frente al Mar en West Bay',
    description: 'Espectacular villa de lujo con acceso directo a la playa de West Bay, considerada una de las mejores playas del Caribe. Cuenta con 4 dormitorios amplios, piscina infinita con vista al mar, cocina gourmet completamente equipada y terraza con palapa. La propiedad incluye muelle privado y está dentro de una comunidad cerrada con seguridad 24/7. Ideal para residencia permanente o inversión en alquiler turístico con alto retorno.',
    type: 'casa', listingType: 'venta', priceUSD: 485000,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    ],
    location: { city: 'Roatán', department: 'Islas de la Bahía', country: 'Honduras', coordinates: { lat: 16.3167, lng: -86.5333 } },
    features: ['vista_al_mar', 'playa', 'isla'],
    size: { terrain: 1200, construction: 350 }, bedrooms: 4, bathrooms: 3,
    buildingMaterial: 'concreto', houseType: 'villa',
    legalStatus: { registeredMunicipality: true, inLandRegistry: true, taxesCurrent: true, legallyClear: true },
    seller: { name: 'Caribbean Realty Group', type: 'empresa' }, promoted: true, createdAt: '2026-03-10',
  },
  {
    id: 'tegucigalpa-apt-002',
    title: 'Apartamento Moderno en Lomas del Guijarro',
    description: 'Elegante apartamento en una de las zonas más exclusivas de Tegucigalpa. Edificio con lobby, gimnasio, área social y estacionamiento subterráneo. Acabados de primera, pisos de porcelanato, cocina integral y balcón con vista panorámica.',
    type: 'apartamento', listingType: 'venta', priceUSD: 165000,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    ],
    location: { city: 'Tegucigalpa', department: 'Francisco Morazán', country: 'Honduras', coordinates: { lat: 14.0818, lng: -87.2068 } },
    features: ['ciudad'], size: { terrain: 0, construction: 120 }, bedrooms: 3, bathrooms: 2,
    buildingMaterial: 'concreto', houseType: 'dos_plantas',
    legalStatus: { registeredMunicipality: true, inLandRegistry: true, taxesCurrent: true, legallyClear: true },
    seller: { name: 'Inversiones Morazán S.A.', type: 'empresa' }, promoted: true, createdAt: '2026-03-15',
  },
  {
    id: 'tela-terreno-003',
    title: 'Terreno Frente a Playa en Tela',
    description: 'Hermoso terreno plano con 40 metros lineales de frente de playa en la costa norte de Honduras. Acceso por carretera pavimentada, agua potable y electricidad disponible. Ideal para proyecto hotelero o casa de vacaciones.',
    type: 'terreno', listingType: 'venta', priceUSD: 95000,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    ],
    location: { city: 'Tela', department: 'Atlántida', country: 'Honduras', coordinates: { lat: 15.7833, lng: -87.4667 } },
    features: ['playa', 'vista_al_mar'], size: { terrain: 2000 },
    legalStatus: { registeredMunicipality: true, inLandRegistry: true, taxesCurrent: false, legallyClear: true },
    seller: { name: 'Roberto Mejía', type: 'particular' }, promoted: false, createdAt: '2026-02-28',
  },
  {
    id: 'copan-colonial-004',
    title: 'Casa Colonial Restaurada en Copán Ruinas',
    description: 'Encantadora casa colonial completamente restaurada en el corazón de Copán Ruinas, a pasos de las ruinas mayas. Arquitectura original con vigas de madera, tejas de barro y patio central con jardín tropical.',
    type: 'casa', listingType: 'venta', priceUSD: 210000,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    ],
    location: { city: 'Copán Ruinas', department: 'Copán', country: 'Honduras', coordinates: { lat: 14.8386, lng: -89.1417 } },
    features: ['colonial', 'pueblo', 'montañas'], size: { terrain: 600, construction: 280 }, bedrooms: 5, bathrooms: 3,
    buildingMaterial: 'adobe', houseType: 'colonial',
    legalStatus: { registeredMunicipality: true, inLandRegistry: false, taxesCurrent: true, legallyClear: false },
    seller: { name: 'María Elena Gómez', type: 'particular' }, promoted: true, createdAt: '2026-03-01',
  },
  {
    id: 'sps-casa-005',
    title: 'Residencia Moderna en San Pedro Sula',
    description: 'Imponente residencia moderna en residencial privado con seguridad 24/7. Diseño contemporáneo con amplios espacios, doble altura, ventanales de piso a techo y acabados premium. Garaje para 3 vehículos, piscina.',
    type: 'casa', listingType: 'venta', priceUSD: 320000,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    ],
    location: { city: 'San Pedro Sula', department: 'Cortés', country: 'Honduras', coordinates: { lat: 15.5042, lng: -88.0253 } },
    features: ['ciudad'], size: { terrain: 800, construction: 320 }, bedrooms: 4, bathrooms: 4,
    buildingMaterial: 'concreto', houseType: 'dos_plantas',
    legalStatus: { registeredMunicipality: true, inLandRegistry: true, taxesCurrent: true, legallyClear: true },
    seller: { name: 'Grupo Inmobiliario del Norte', type: 'empresa' }, promoted: false, createdAt: '2026-03-18',
  },
  {
    id: 'utila-cabana-006',
    title: 'Cabaña Tropical en Utila',
    description: 'Acogedora cabaña de madera en la paradisíaca isla de Utila. A 2 minutos de la playa, rodeada de vegetación tropical. Perfecta para Airbnb con ocupación alta todo el año.',
    type: 'casa', listingType: 'venta', priceUSD: 135000,
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=600&fit=crop',
    ],
    location: { city: 'Utila', department: 'Islas de la Bahía', country: 'Honduras', coordinates: { lat: 16.0936, lng: -86.8933 } },
    features: ['isla', 'playa', 'vista_al_mar'], size: { terrain: 400, construction: 85 }, bedrooms: 2, bathrooms: 1,
    buildingMaterial: 'madera', houseType: 'cabaña',
    legalStatus: { registeredMunicipality: true, inLandRegistry: false, taxesCurrent: false, legallyClear: true },
    seller: { name: 'James Mitchell', type: 'particular' }, promoted: false, createdAt: '2026-02-20',
  },
  {
    id: 'laceiba-finca-007',
    title: 'Finca Cafetalera en La Ceiba',
    description: 'Productiva finca cafetalera de 15 manzanas en las montañas cercanas a La Ceiba. Café de altura, producción anual de 200 quintales. Casa principal, bodega y acceso a río cristalino.',
    type: 'finca', listingType: 'venta', priceUSD: 175000,
    images: [
      'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&h=600&fit=crop',
    ],
    location: { city: 'La Ceiba', department: 'Atlántida', country: 'Honduras', coordinates: { lat: 15.7631, lng: -86.7969 } },
    features: ['montañas', 'rio', 'bosque'], size: { terrain: 105000 }, bedrooms: 3, bathrooms: 1,
    buildingMaterial: 'mixto', houseType: 'una_planta',
    legalStatus: { registeredMunicipality: true, inLandRegistry: true, taxesCurrent: true, legallyClear: false },
    seller: { name: 'Familia Reyes', type: 'particular' }, promoted: false, createdAt: '2026-03-05',
  },
  {
    id: 'comayagua-casa-008',
    title: 'Casa en Centro Histórico de Comayagua',
    description: 'Propiedad en el centro histórico de Comayagua, la antigua capital de Honduras. Estructura sólida con paredes de piedra originales del siglo XIX. Gran potencial para hotel boutique o restaurante.',
    type: 'casa', listingType: 'venta', priceUSD: 89000,
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
    ],
    location: { city: 'Comayagua', department: 'Comayagua', country: 'Honduras', coordinates: { lat: 14.4533, lng: -87.6386 } },
    features: ['colonial', 'ciudad'], size: { terrain: 350, construction: 200 }, bedrooms: 3, bathrooms: 2,
    buildingMaterial: 'piedra', houseType: 'colonial',
    legalStatus: { registeredMunicipality: false, inLandRegistry: false, taxesCurrent: false, legallyClear: false },
    seller: { name: 'Carlos Andino', type: 'particular' }, promoted: false, createdAt: '2026-01-15',
  },
  {
    id: 'gracias-terreno-009',
    title: 'Terreno con Vista Panorámica en Gracias',
    description: 'Terreno en las alturas de Gracias, Lempira, con vista panorámica de 360 grados al valle y montañas de Celaque. Clima fresco, ideal para cabaña o eco-lodge.',
    type: 'terreno', listingType: 'venta', priceUSD: 42000,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
    ],
    location: { city: 'Gracias', department: 'Lempira', country: 'Honduras', coordinates: { lat: 14.5886, lng: -88.5833 } },
    features: ['montañas', 'bosque', 'pueblo'], size: { terrain: 5000 },
    legalStatus: { registeredMunicipality: true, inLandRegistry: true, taxesCurrent: true, legallyClear: true },
    seller: { name: 'Ana Lucía Mejía', type: 'particular' }, promoted: false, createdAt: '2026-03-20',
  },
  {
    id: 'trujillo-casa-010',
    title: 'Casa de Playa en Trujillo',
    description: 'Encantadora casa de playa en la bahía de Trujillo. Diseño abierto tropical, terraza con vista directa al mar. A 50 metros de la playa. Perfecta para vacaciones o renta turística.',
    type: 'casa', listingType: 'alquiler', priceUSD: 1200,
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    ],
    location: { city: 'Trujillo', department: 'Colón', country: 'Honduras', coordinates: { lat: 15.9167, lng: -85.9500 } },
    features: ['playa', 'vista_al_mar'], size: { terrain: 500, construction: 140 }, bedrooms: 3, bathrooms: 2,
    buildingMaterial: 'concreto', houseType: 'una_planta',
    legalStatus: { registeredMunicipality: true, inLandRegistry: true, taxesCurrent: false, legallyClear: true },
    seller: { name: 'Bienes Raíces Colón', type: 'empresa' }, promoted: true, createdAt: '2026-03-12',
  },
];

// Generate 100 more properties
const generated = Array.from({ length: 100 }, (_, i) => generateProperty(i));

export const properties: Property[] = [...handcrafted, ...generated];
