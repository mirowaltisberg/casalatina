'use client';

import { useState, useEffect } from 'react';
import type { ExchangeRate } from '@/lib/types';

const DEFAULT_RATE: ExchangeRate = {
  usdToHnl: 24.72,
  source: 'Banco Central de Honduras (referencial)',
  updatedAt: new Date().toISOString(),
};

export function useExchangeRate() {
  const [rate, setRate] = useState<ExchangeRate>(DEFAULT_RATE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/exchange-rate')
      .then((res) => res.json())
      .then((data) => setRate(data))
      .catch(() => setRate(DEFAULT_RATE))
      .finally(() => setLoading(false));
  }, []);

  return { rate, loading };
}
