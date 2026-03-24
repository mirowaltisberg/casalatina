'use client';

import { formatPrice, convertToHNL } from '@/lib/utils';
import { useExchangeRate } from '@/hooks/useExchangeRate';

interface PriceDisplayProps {
  priceUSD: number;
  size?: 'sm' | 'md' | 'lg';
}

export function PriceDisplay({ priceUSD, size = 'md' }: PriceDisplayProps) {
  const { rate } = useExchangeRate();
  const priceHNL = convertToHNL(priceUSD, rate.usdToHnl);

  const sizeClasses = {
    sm: { usd: 'text-base font-semibold', hnl: 'text-xs' },
    md: { usd: 'text-xl font-bold', hnl: 'text-sm' },
    lg: { usd: 'text-3xl font-bold', hnl: 'text-base' },
  };

  return (
    <div>
      <p className={`${sizeClasses[size].usd} text-warm-900`}>
        {formatPrice(priceUSD, 'USD')}
      </p>
      <p className={`${sizeClasses[size].hnl} text-warm-500 mt-0.5`}>
        {formatPrice(priceHNL, 'HNL')}
      </p>
    </div>
  );
}
