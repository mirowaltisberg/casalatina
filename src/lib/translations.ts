export type Locale = 'es' | 'en' | 'de';

export const LOCALE_LABELS: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  de: 'DE',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  de: 'Deutsch',
};

const translations = {
  // Header
  'nav.home': { es: 'Inicio', en: 'Home', de: 'Startseite' },
  'nav.properties': { es: 'Propiedades', en: 'Properties', de: 'Immobilien' },
  'nav.publish': { es: 'Publicar', en: 'Publish', de: 'Inserieren' },
  'nav.publishProperty': { es: 'Publicar Propiedad', en: 'List Property', de: 'Immobilie inserieren' },
  'nav.menu': { es: 'Menú', en: 'Menu', de: 'Menü' },

  // Hero
  'hero.badge': { es: 'Ahora en Honduras', en: 'Now in Honduras', de: 'Jetzt in Honduras' },
  'hero.title': { es: 'Encuentra tu propiedad', en: 'Find your ideal', de: 'Finden Sie Ihre ideale' },
  'hero.titleHighlight': { es: 'ideal', en: 'property', de: 'Immobilie' },
  'hero.titleSuffix': { es: ' en Honduras', en: ' in Honduras', de: ' in Honduras' },
  'hero.subtitle': {
    es: 'Casas, terrenos y apartamentos con verificación legal. Precios transparentes en dólares y lempiras.',
    en: 'Houses, land and apartments with legal verification. Transparent prices in dollars and lempiras.',
    de: 'Häuser, Grundstücke und Wohnungen mit rechtlicher Verifizierung. Transparente Preise in Dollar und Lempiras.',
  },
  'hero.stat.properties': { es: 'Propiedades', en: 'Properties', de: 'Immobilien' },
  'hero.stat.departments': { es: 'Departamentos', en: 'Departments', de: 'Departemente' },
  'hero.stat.verified': { es: 'Verificadas', en: 'Verified', de: 'Verifiziert' },

  // Search
  'search.placeholder': {
    es: 'Buscar por ciudad, zona o palabra clave...',
    en: 'Search by city, area or keyword...',
    de: 'Suche nach Stadt, Gebiet oder Stichwort...',
  },
  'search.type': { es: 'Tipo', en: 'Type', de: 'Typ' },
  'search.department': { es: 'Departamento', en: 'Department', de: 'Departement' },
  'search.button': { es: 'Buscar', en: 'Search', de: 'Suchen' },

  // Property types
  'type.casa': { es: 'Casa', en: 'House', de: 'Haus' },
  'type.terreno': { es: 'Terreno', en: 'Land', de: 'Grundstück' },
  'type.apartamento': { es: 'Apartamento', en: 'Apartment', de: 'Wohnung' },
  'type.finca': { es: 'Finca', en: 'Farm/Estate', de: 'Landgut' },

  // Features
  'feature.vista_al_mar': { es: 'Vista al Mar', en: 'Ocean View', de: 'Meerblick' },
  'feature.playa': { es: 'Playa', en: 'Beach', de: 'Strand' },
  'feature.montañas': { es: 'Montañas', en: 'Mountains', de: 'Berge' },
  'feature.ciudad': { es: 'Ciudad', en: 'City', de: 'Stadt' },
  'feature.pueblo': { es: 'Pueblo', en: 'Village', de: 'Dorf' },
  'feature.colonial': { es: 'Colonial', en: 'Colonial', de: 'Kolonial' },
  'feature.isla': { es: 'Isla', en: 'Island', de: 'Insel' },
  'feature.rio': { es: 'Río', en: 'River', de: 'Fluss' },
  'feature.bosque': { es: 'Bosque', en: 'Forest', de: 'Wald' },

  // Listing type (rent/buy)
  'listingType.all': { es: 'Todos', en: 'All', de: 'Alle' },
  'listingType.venta': { es: 'Comprar', en: 'Buy', de: 'Kaufen' },
  'listingType.alquiler': { es: 'Alquilar', en: 'Rent', de: 'Mieten' },
  'listingType.label': { es: 'Comprar / Alquilar', en: 'Buy / Rent', de: 'Kaufen / Mieten' },
  'listingType.badge.venta': { es: 'Venta', en: 'For Sale', de: 'Zu verkaufen' },
  'listingType.badge.alquiler': { es: 'Alquiler', en: 'For Rent', de: 'Zu vermieten' },
  'listingType.perMonth': { es: '/mes', en: '/mo', de: '/Mt.' },

  // Featured section
  'featured.title': { es: 'Propiedades Destacadas', en: 'Featured Properties', de: 'Ausgewählte Immobilien' },
  'featured.subtitle': {
    es: 'Selección de las mejores oportunidades verificadas',
    en: 'Selection of the best verified opportunities',
    de: 'Auswahl der besten verifizierten Angebote',
  },
  'featured.viewAll': { es: 'Ver todas', en: 'View all', de: 'Alle anzeigen' },
  'featured.viewAllMobile': { es: 'Ver todas las propiedades', en: 'View all properties', de: 'Alle Immobilien anzeigen' },
  'featured.promoted': { es: 'Destacado', en: 'Featured', de: 'Hervorgehoben' },

  // Trust section
  'trust.title': { es: 'Confianza en cada transacción', en: 'Trust in every transaction', de: 'Vertrauen bei jeder Transaktion' },
  'trust.subtitle': {
    es: 'Sabemos que comprar propiedad en Honduras requiere confianza. Por eso construimos herramientas de verificación y transparencia únicas en la región.',
    en: 'We know that buying property in Honduras requires trust. That\'s why we built unique verification and transparency tools for the region.',
    de: 'Wir wissen, dass der Immobilienkauf in Honduras Vertrauen erfordert. Deshalb haben wir einzigartige Verifizierungs- und Transparenztools für die Region entwickelt.',
  },
  'trust.legal.title': { es: 'Verificación Legal', en: 'Legal Verification', de: 'Rechtliche Verifizierung' },
  'trust.legal.desc': {
    es: 'Cada propiedad muestra su estado legal: registro municipal, propiedad, impuestos y gravámenes.',
    en: 'Each property shows its legal status: municipal registration, ownership, taxes and liens.',
    de: 'Jede Immobilie zeigt ihren Rechtsstatus: Gemeinderegistrierung, Eigentum, Steuern und Pfandrechte.',
  },
  'trust.transparency.title': { es: 'Transparencia Total', en: 'Full Transparency', de: 'Volle Transparenz' },
  'trust.transparency.desc': {
    es: 'Precios en dólares y lempiras con tipo de cambio oficial. Sin costos ocultos ni sorpresas.',
    en: 'Prices in dollars and lempiras with official exchange rate. No hidden costs or surprises.',
    de: 'Preise in Dollar und Lempiras mit offiziellem Wechselkurs. Keine versteckten Kosten oder Überraschungen.',
  },
  'trust.mediated.title': { es: 'Contacto Mediado', en: 'Mediated Contact', de: 'Vermittelter Kontakt' },
  'trust.mediated.desc': {
    es: 'CasaLatina media el primer contacto entre comprador y vendedor para mayor seguridad.',
    en: 'CasaLatina mediates first contact between buyer and seller for greater security.',
    de: 'CasaLatina vermittelt den Erstkontakt zwischen Käufer und Verkäufer für mehr Sicherheit.',
  },
  'trust.currency.title': { es: 'Doble Moneda', en: 'Dual Currency', de: 'Doppelwährung' },
  'trust.currency.desc': {
    es: 'Todos los precios en USD y HNL con tipo de cambio del Banco Central de Honduras.',
    en: 'All prices in USD and HNL with Central Bank of Honduras exchange rate.',
    de: 'Alle Preise in USD und HNL mit dem Wechselkurs der Zentralbank von Honduras.',
  },

  // Revenue / Pricing
  'pricing.title': { es: 'Planes para Vendedores', en: 'Plans for Sellers', de: 'Pläne für Verkäufer' },
  'pricing.subtitle': {
    es: 'Elige el plan que mejor se adapte a tus necesidades. Cancela cuando quieras.',
    en: 'Choose the plan that best fits your needs. Cancel anytime.',
    de: 'Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt. Jederzeit kündbar.',
  },
  'pricing.popular': { es: 'Más Popular', en: 'Most Popular', de: 'Am beliebtesten' },
  'pricing.basic.name': { es: 'Básico', en: 'Basic', de: 'Basis' },
  'pricing.basic.desc': { es: 'Para vendedores ocasionales', en: 'For occasional sellers', de: 'Für gelegentliche Verkäufer' },
  'pricing.basic.price': { es: 'Gratis', en: 'Free', de: 'Gratis' },
  'pricing.basic.cta': { es: 'Comenzar Gratis', en: 'Start Free', de: 'Gratis starten' },
  'pricing.basic.f1': { es: 'Publicar hasta 2 propiedades', en: 'List up to 2 properties', de: 'Bis zu 2 Immobilien inserieren' },
  'pricing.basic.f2': { es: 'Fotos estándar (3 máx.)', en: 'Standard photos (3 max.)', de: 'Standardfotos (max. 3)' },
  'pricing.basic.f3': { es: 'Visibilidad normal', en: 'Normal visibility', de: 'Normale Sichtbarkeit' },
  'pricing.basic.f4': { es: 'Contacto mediado', en: 'Mediated contact', de: 'Vermittelter Kontakt' },
  'pricing.featured.name': { es: 'Destacado', en: 'Featured', de: 'Premium' },
  'pricing.featured.desc': { es: 'Para vendedores activos', en: 'For active sellers', de: 'Für aktive Verkäufer' },
  'pricing.featured.cta': { es: 'Elegir Plan', en: 'Choose Plan', de: 'Plan wählen' },
  'pricing.featured.f1': { es: 'Publicar hasta 10 propiedades', en: 'List up to 10 properties', de: 'Bis zu 10 Immobilien inserieren' },
  'pricing.featured.f2': { es: 'Fotos HD ilimitadas', en: 'Unlimited HD photos', de: 'Unbegrenzt HD-Fotos' },
  'pricing.featured.f3': { es: 'Listado destacado con prioridad', en: 'Featured listing with priority', de: 'Hervorgehobenes Inserat mit Priorität' },
  'pricing.featured.f4': { es: 'Insignia de vendedor verificado', en: 'Verified seller badge', de: 'Verifizierter Verkäufer-Abzeichen' },
  'pricing.featured.f5': { es: 'Estadísticas de visitas', en: 'Visit statistics', de: 'Besucherstatistiken' },
  'pricing.premium.name': { es: 'Premium', en: 'Premium', de: 'Premium' },
  'pricing.premium.desc': { es: 'Para empresas inmobiliarias', en: 'For real estate companies', de: 'Für Immobilienunternehmen' },
  'pricing.premium.cta': { es: 'Contactar Ventas', en: 'Contact Sales', de: 'Vertrieb kontaktieren' },
  'pricing.premium.f1': { es: 'Propiedades ilimitadas', en: 'Unlimited properties', de: 'Unbegrenzt Immobilien' },
  'pricing.premium.f2': { es: 'Verificación legal incluida', en: 'Legal verification included', de: 'Rechtliche Verifizierung inklusive' },
  'pricing.premium.f3': { es: 'Posicionamiento prioritario', en: 'Priority positioning', de: 'Prioritätspositionierung' },
  'pricing.premium.f4': { es: 'Página de empresa personalizada', en: 'Custom company page', de: 'Personalisierte Firmenseite' },
  'pricing.premium.f5': { es: 'Soporte dedicado', en: 'Dedicated support', de: 'Dedizierter Support' },
  'pricing.premium.f6': { es: 'API de integración', en: 'Integration API', de: 'Integrations-API' },

  // Listings page
  'listings.title': { es: 'Propiedades', en: 'Properties', de: 'Immobilien' },
  'listings.searching': { es: 'Buscando...', en: 'Searching...', de: 'Suche läuft...' },
  'listings.found': { es: 'propiedades encontradas', en: 'properties found', de: 'Immobilien gefunden' },
  'listings.filters': { es: 'Filtros', en: 'Filters', de: 'Filter' },
  'listings.noResults': { es: 'No se encontraron propiedades', en: 'No properties found', de: 'Keine Immobilien gefunden' },
  'listings.noResultsHint': { es: 'Intenta ajustar los filtros de búsqueda', en: 'Try adjusting the search filters', de: 'Versuchen Sie, die Suchfilter anzupassen' },

  // Filters
  'filter.clearAll': { es: 'Limpiar todo', en: 'Clear all', de: 'Alles löschen' },
  'filter.propertyType': { es: 'Tipo de propiedad', en: 'Property type', de: 'Immobilientyp' },
  'filter.department': { es: 'Departamento', en: 'Department', de: 'Departement' },
  'filter.all': { es: 'Todos', en: 'All', de: 'Alle' },
  'filter.priceRange': { es: 'Rango de precio (USD)', en: 'Price range (USD)', de: 'Preisbereich (USD)' },
  'filter.min': { es: 'Mín', en: 'Min', de: 'Min' },
  'filter.max': { es: 'Máx', en: 'Max', de: 'Max' },
  'filter.minBedrooms': { es: 'Habitaciones mínimas', en: 'Min. bedrooms', de: 'Min. Schlafzimmer' },
  'filter.features': { es: 'Características', en: 'Features', de: 'Merkmale' },
  'filter.buildingMaterial': { es: 'Material de construcción', en: 'Building material', de: 'Baumaterial' },
  'filter.material.concreto': { es: 'Concreto', en: 'Concrete', de: 'Beton' },
  'filter.material.madera': { es: 'Madera', en: 'Wood', de: 'Holz' },
  'filter.material.adobe': { es: 'Adobe', en: 'Adobe', de: 'Lehm' },
  'filter.material.mixto': { es: 'Mixto', en: 'Mixed', de: 'Gemischt' },
  'filter.material.piedra': { es: 'Piedra', en: 'Stone', de: 'Stein' },

  // Property card
  'card.rooms': { es: 'hab.', en: 'beds', de: 'Zi.' },
  'card.baths': { es: 'baños', en: 'baths', de: 'Bäder' },
  'card.company': { es: 'Empresa', en: 'Company', de: 'Unternehmen' },
  'card.individual': { es: 'Particular', en: 'Individual', de: 'Privat' },

  // Legal status
  'legal.title': { es: 'Estado Legal', en: 'Legal Status', de: 'Rechtsstatus' },
  'legal.verified': { es: 'verificados', en: 'verified', de: 'verifiziert' },
  'legal.badge.verified': { es: 'Verificado', en: 'Verified', de: 'Verifiziert' },
  'legal.badge.partial': { es: 'Parcial', en: 'Partial', de: 'Teilweise' },
  'legal.badge.none': { es: 'Sin verificar', en: 'Unverified', de: 'Nicht verifiziert' },
  'legal.registeredMunicipality': { es: 'Registro Municipal', en: 'Municipal Registration', de: 'Gemeinderegistrierung' },
  'legal.registeredMunicipality.desc': {
    es: 'Registrado en la municipalidad correspondiente',
    en: 'Registered in the corresponding municipality',
    de: 'Registriert bei der zuständigen Gemeinde',
  },
  'legal.inLandRegistry': { es: 'Registro de Propiedad', en: 'Land Registry', de: 'Grundbuch' },
  'legal.inLandRegistry.desc': {
    es: 'Inscrito en el Instituto de la Propiedad',
    en: 'Registered in the Property Institute',
    de: 'Im Grundbuchamt eingetragen',
  },
  'legal.taxesCurrent': { es: 'Impuestos al Día', en: 'Taxes Current', de: 'Steuern aktuell' },
  'legal.taxesCurrent.desc': {
    es: 'Todos los impuestos municipales están al día',
    en: 'All municipal taxes are up to date',
    de: 'Alle Gemeindesteuern sind auf dem neuesten Stand',
  },
  'legal.legallyClear': { es: 'Sin Gravámenes', en: 'No Encumbrances', de: 'Lastenfrei' },
  'legal.legallyClear.desc': {
    es: 'Libre de hipotecas, embargos y gravámenes',
    en: 'Free of mortgages, seizures and encumbrances',
    de: 'Frei von Hypotheken, Pfändungen und Belastungen',
  },

  // Property detail
  'detail.backToProperties': { es: 'Volver a propiedades', en: 'Back to properties', de: 'Zurück zu Immobilien' },
  'detail.home': { es: 'Inicio', en: 'Home', de: 'Startseite' },
  'detail.description': { es: 'Descripción', en: 'Description', de: 'Beschreibung' },
  'detail.characteristics': { es: 'Características', en: 'Features', de: 'Merkmale' },
  'detail.terrain': { es: 'Terreno', en: 'Terrain', de: 'Grundstück' },
  'detail.construction': { es: 'Construcción', en: 'Construction', de: 'Baufläche' },
  'detail.bedrooms': { es: 'Habitaciones', en: 'Bedrooms', de: 'Schlafzimmer' },
  'detail.bathrooms': { es: 'Baños', en: 'Bathrooms', de: 'Badezimmer' },
  'detail.realEstate': { es: 'Empresa inmobiliaria', en: 'Real estate company', de: 'Immobilienunternehmen' },
  'detail.privateSeller': { es: 'Vendedor particular', en: 'Private seller', de: 'Privatverkäufer' },
  'detail.exchangeRate': { es: 'Tipo de cambio referencial:', en: 'Reference exchange rate:', de: 'Referenzwechselkurs:' },
  'detail.exchangeDisclaimer': {
    es: 'Fuente: Banco Central de Honduras. El tipo de cambio puede variar al momento de la transacción.',
    en: 'Source: Central Bank of Honduras. Exchange rate may vary at the time of transaction.',
    de: 'Quelle: Zentralbank von Honduras. Der Wechselkurs kann zum Zeitpunkt der Transaktion variieren.',
  },
  'detail.notFound': { es: 'Propiedad no encontrada', en: 'Property not found', de: 'Immobilie nicht gefunden' },

  // Contact form
  'contact.title': { es: 'Contactar al vendedor', en: 'Contact the seller', de: 'Verkäufer kontaktieren' },
  'contact.sendTo': { es: 'Envía un mensaje a', en: 'Send a message to', de: 'Nachricht senden an' },
  'contact.name': { es: 'Nombre completo', en: 'Full name', de: 'Vollständiger Name' },
  'contact.namePlaceholder': { es: 'Su nombre', en: 'Your name', de: 'Ihr Name' },
  'contact.email': { es: 'Correo electrónico', en: 'Email', de: 'E-Mail' },
  'contact.phone': { es: 'Teléfono', en: 'Phone', de: 'Telefon' },
  'contact.message': { es: 'Mensaje', en: 'Message', de: 'Nachricht' },
  'contact.messagePlaceholder': {
    es: 'Estoy interesado en esta propiedad...',
    en: 'I am interested in this property...',
    de: 'Ich bin an dieser Immobilie interessiert...',
  },
  'contact.send': { es: 'Enviar Mensaje', en: 'Send Message', de: 'Nachricht senden' },
  'contact.sending': { es: 'Enviando...', en: 'Sending...', de: 'Wird gesendet...' },
  'contact.sent': { es: 'Mensaje enviado', en: 'Message sent', de: 'Nachricht gesendet' },
  'contact.sentDesc': {
    es: 'El vendedor se pondrá en contacto pronto.',
    en: 'The seller will contact you soon.',
    de: 'Der Verkäufer wird sich bald bei Ihnen melden.',
  },
  'contact.sendAnother': { es: 'Enviar otro mensaje', en: 'Send another message', de: 'Weitere Nachricht senden' },
  'contact.error': { es: 'Hubo un error. Por favor intente de nuevo.', en: 'An error occurred. Please try again.', de: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' },
  'contact.disclaimer': {
    es: 'CasaLatina actúa como intermediario. Sus datos solo se comparten con el vendedor.',
    en: 'CasaLatina acts as an intermediary. Your data is only shared with the seller.',
    de: 'CasaLatina agiert als Vermittler. Ihre Daten werden nur mit dem Verkäufer geteilt.',
  },

  // Publish page
  'publish.title': { es: 'Publicar Propiedad', en: 'List Property', de: 'Immobilie inserieren' },
  'publish.subtitle': {
    es: 'Complete los datos de su propiedad. Es gratis con el plan básico.',
    en: 'Complete your property details. Free with the basic plan.',
    de: 'Vervollständigen Sie die Angaben zu Ihrer Immobilie. Gratis mit dem Basisplan.',
  },
  'publish.step1': { es: 'Información', en: 'Information', de: 'Informationen' },
  'publish.step2': { es: 'Detalles', en: 'Details', de: 'Details' },
  'publish.step3': { es: 'Contacto', en: 'Contact', de: 'Kontakt' },
  'publish.propertyTitle': { es: 'Título de la propiedad', en: 'Property title', de: 'Titel der Immobilie' },
  'publish.titlePlaceholder': { es: 'Ej: Casa Frente al Mar en Roatán', en: 'E.g. Beachfront House in Roatán', de: 'Z.B. Strandhaus in Roatán' },
  'publish.price': { es: 'Precio (USD)', en: 'Price (USD)', de: 'Preis (USD)' },
  'publish.description': { es: 'Descripción', en: 'Description', de: 'Beschreibung' },
  'publish.descPlaceholder': {
    es: 'Describa la propiedad, sus características y puntos fuertes...',
    en: 'Describe the property, its features and highlights...',
    de: 'Beschreiben Sie die Immobilie, ihre Merkmale und Highlights...',
  },
  'publish.nextDetails': { es: 'Siguiente: Detalles', en: 'Next: Details', de: 'Weiter: Details' },
  'publish.city': { es: 'Ciudad', en: 'City', de: 'Stadt' },
  'publish.select': { es: 'Seleccionar...', en: 'Select...', de: 'Auswählen...' },
  'publish.terrainSize': { es: 'Terreno (m²)', en: 'Land (m²)', de: 'Grundstück (m²)' },
  'publish.constructionSize': { es: 'Construcción (m²)', en: 'Construction (m²)', de: 'Baufläche (m²)' },
  'publish.bedrooms': { es: 'Habitaciones', en: 'Bedrooms', de: 'Schlafzimmer' },
  'publish.bathrooms': { es: 'Baños', en: 'Badezimmer', de: 'Badezimmer' },
  'publish.previous': { es: 'Anterior', en: 'Previous', de: 'Zurück' },
  'publish.nextContact': { es: 'Siguiente: Contacto', en: 'Next: Contact', de: 'Weiter: Kontakt' },
  'publish.sellerType': { es: 'Tipo de vendedor', en: 'Seller type', de: 'Verkäufertyp' },
  'publish.particular': { es: 'Particular', en: 'Individual', de: 'Privat' },
  'publish.empresa': { es: 'Empresa', en: 'Company', de: 'Unternehmen' },
  'publish.sellerNameParticular': { es: 'Nombre completo', en: 'Full name', de: 'Vollständiger Name' },
  'publish.sellerNameEmpresa': { es: 'Nombre de la empresa', en: 'Company name', de: 'Firmenname' },
  'publish.sellerNamePlaceholderParticular': { es: 'Ej: Juan Pérez', en: 'E.g. Juan Pérez', de: 'Z.B. Juan Pérez' },
  'publish.sellerNamePlaceholderEmpresa': { es: 'Ej: Inversiones ABC S.A.', en: 'E.g. Investments ABC Inc.', de: 'Z.B. Immobilien ABC AG' },
  'publish.phone': { es: 'Teléfono', en: 'Phone', de: 'Telefon' },
  'publish.disclaimer': {
    es: 'Al publicar su propiedad, acepta que CasaLatina mediará el primer contacto con posibles compradores. Sus datos de contacto no se mostrarán públicamente. Podrá gestionar las consultas desde su panel.',
    en: 'By publishing your property, you agree that CasaLatina will mediate first contact with potential buyers. Your contact details will not be shown publicly. You can manage inquiries from your dashboard.',
    de: 'Mit der Veröffentlichung Ihrer Immobilie stimmen Sie zu, dass CasaLatina den Erstkontakt mit potenziellen Käufern vermittelt. Ihre Kontaktdaten werden nicht öffentlich angezeigt. Sie können Anfragen über Ihr Dashboard verwalten.',
  },
  'publish.submit': { es: 'Publicar Propiedad', en: 'Publish Property', de: 'Immobilie veröffentlichen' },
  'publish.success': { es: 'Propiedad Publicada', en: 'Property Published', de: 'Immobilie veröffentlicht' },
  'publish.successDesc': {
    es: 'Su propiedad ha sido recibida y será revisada por nuestro equipo. Le notificaremos cuando esté publicada.',
    en: 'Your property has been received and will be reviewed by our team. We will notify you when it is published.',
    de: 'Ihre Immobilie wurde empfangen und wird von unserem Team geprüft. Wir benachrichtigen Sie, wenn sie veröffentlicht wird.',
  },
  'publish.another': { es: 'Publicar otra propiedad', en: 'Publish another property', de: 'Weitere Immobilie inserieren' },

  // Footer
  'footer.tagline': {
    es: 'La plataforma inmobiliaria más confiable de Honduras. Compra y vende propiedades con verificación legal.',
    en: 'The most trusted real estate platform in Honduras. Buy and sell properties with legal verification.',
    de: 'Die vertrauenswürdigste Immobilienplattform in Honduras. Kaufen und verkaufen Sie Immobilien mit rechtlicher Verifizierung.',
  },
  'footer.explore': { es: 'Explorar', en: 'Explore', de: 'Entdecken' },
  'footer.services': { es: 'Servicios', en: 'Services', de: 'Dienstleistungen' },
  'footer.regions': { es: 'Regiones', en: 'Regions', de: 'Regionen' },
  'footer.legalVerification': { es: 'Verificación Legal', en: 'Legal Verification', de: 'Rechtliche Verifizierung' },
  'footer.featuredListings': { es: 'Listados Destacados', en: 'Featured Listings', de: 'Hervorgehobene Inserate' },
  'footer.premiumSubscription': { es: 'Suscripción Premium', en: 'Premium Subscription', de: 'Premium-Abonnement' },
  'footer.advisory': { es: 'Asesoría', en: 'Advisory', de: 'Beratung' },
  'footer.copyright': { es: '© 2026 CasaLatina. Todos los derechos reservados.', en: '© 2026 CasaLatina. All rights reserved.', de: '© 2026 CasaLatina. Alle Rechte vorbehalten.' },
  'footer.exchangeRate': { es: 'Tipo de cambio referencial:', en: 'Reference exchange rate:', de: 'Referenzwechselkurs:' },

  // Image gallery
  'gallery.photo': { es: 'Foto', en: 'Photo', de: 'Foto' },
  'gallery.thumbnail': { es: 'Miniatura', en: 'Thumbnail', de: 'Vorschau' },
} as const;

export type TranslationKey = keyof typeof translations;

export function getTranslation(key: TranslationKey, locale: Locale): string {
  const entry = translations[key];
  return entry?.[locale] ?? entry?.['es'] ?? key;
}
