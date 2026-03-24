'use client';

import { motion } from 'framer-motion';
import type { LegalStatus } from '@/lib/types';
import { LEGAL_STATUS_LABELS } from '@/lib/utils';

interface LegalBadgeProps {
  legalStatus: LegalStatus;
  compact?: boolean;
}

export function LegalBadge({ legalStatus, compact = false }: LegalBadgeProps) {
  const entries = Object.entries(legalStatus) as [keyof LegalStatus, boolean][];
  const verifiedCount = entries.filter(([, v]) => v).length;
  const allVerified = verifiedCount === entries.length;

  if (compact) {
    return (
      <div className="flex items-center gap-1.5">
        {allVerified ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-success-50 px-2.5 py-1 text-xs font-medium text-success-700">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4" />
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Verificado
          </span>
        ) : verifiedCount > 0 ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-warning-50 px-2.5 py-1 text-xs font-medium text-warning-600">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 9v4M12 17h.01" />
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Parcial
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-warm-100 px-2.5 py-1 text-xs font-medium text-warm-500">
            Sin verificar
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-warm-900">Estado Legal</h3>
        <span className="text-xs text-warm-500">{verifiedCount}/{entries.length} verificados</span>
      </div>
      <div className="space-y-2">
        {entries.map(([key, verified], i) => {
          const info = LEGAL_STATUS_LABELS[key];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.2 }}
              className={`flex items-start gap-3 rounded-lg p-3 ${
                verified ? 'bg-success-50' : 'bg-warm-100'
              }`}
            >
              {verified ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-success-600 mt-0.5 shrink-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-warm-400 mt-0.5 shrink-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 9l-6 6M9 9l6 6" />
                </svg>
              )}
              <div>
                <p className={`text-sm font-medium ${verified ? 'text-success-700' : 'text-warm-600'}`}>
                  {info.label}
                </p>
                <p className="text-xs text-warm-500 mt-0.5">{info.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
