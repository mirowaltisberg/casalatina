import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { I18nProvider } from '@/lib/i18n';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'CasaLatina — Bienes Raíces en Honduras',
  description:
    'Encuentra casas, terrenos y apartamentos en venta en Honduras. Verificación legal, precios en USD y Lempiras. La plataforma inmobiliaria más confiable de Centroamérica.',
  keywords: ['bienes raíces', 'Honduras', 'casas en venta', 'terrenos', 'inmobiliaria', 'Roatán', 'Tegucigalpa'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <I18nProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
