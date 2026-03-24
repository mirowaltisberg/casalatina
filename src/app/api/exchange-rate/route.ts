import { NextResponse } from 'next/server';
import type { ExchangeRate } from '@/lib/types';

export async function GET() {
  // Mock exchange rate — in production, fetch from Banco Central de Honduras API
  const rate: ExchangeRate = {
    usdToHnl: 24.72,
    source: 'Banco Central de Honduras (referencial)',
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json(rate);
}
