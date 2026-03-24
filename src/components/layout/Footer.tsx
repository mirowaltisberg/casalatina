import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-warm-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M3 21V9l9-7 9 7v12a1 1 0 01-1 1H4a1 1 0 01-1-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-semibold text-warm-900">
                Casa<span className="text-accent-600">Latina</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-warm-500 leading-relaxed max-w-xs">
              La plataforma inmobiliaria más confiable de Honduras. Compra y vende propiedades con verificación legal.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-warm-400 mb-3">Explorar</h3>
            <ul className="space-y-2.5">
              {['Casas', 'Terrenos', 'Apartamentos', 'Fincas'].map((item) => (
                <li key={item}>
                  <Link href="/propiedades" className="text-sm text-warm-600 hover:text-warm-900 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-warm-400 mb-3">Servicios</h3>
            <ul className="space-y-2.5">
              {['Verificación Legal', 'Listados Destacados', 'Suscripción Premium', 'Asesoría'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-warm-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-warm-400 mb-3">Regiones</h3>
            <ul className="space-y-2.5">
              {['Roatán', 'Tegucigalpa', 'San Pedro Sula', 'La Ceiba', 'Copán'].map((item) => (
                <li key={item}>
                  <Link href="/propiedades" className="text-sm text-warm-600 hover:text-warm-900 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-warm-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-400">
            © 2026 CasaLatina. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-warm-400">
            <span>Tipo de cambio referencial:</span>
            <span className="font-medium text-warm-600">1 USD = 24.72 HNL</span>
            <span className="text-warm-300">|</span>
            <span>Banco Central de Honduras</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
