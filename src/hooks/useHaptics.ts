'use client';

import { useCallback, useRef, useEffect } from 'react';

type HapticPreset = 'light' | 'medium' | 'heavy' | 'soft' | 'rigid' | 'success' | 'warning' | 'error' | 'nudge' | 'selection';

interface WebHapticsInstance {
  trigger: (input?: HapticPreset | number | number[], options?: { intensity?: number }) => Promise<void>;
  cancel: () => void;
  destroy: () => void;
}

interface WebHapticsConstructor {
  new (options?: { debug?: boolean; showSwitch?: boolean }): WebHapticsInstance;
  isSupported: boolean;
}

export function useHaptics() {
  const instanceRef = useRef<WebHapticsInstance | null>(null);

  useEffect(() => {
    let haptics: WebHapticsInstance | null = null;

    import('web-haptics').then((mod) => {
      const WebHaptics = (mod.WebHaptics ?? mod.default) as WebHapticsConstructor;
      haptics = new WebHaptics();
      instanceRef.current = haptics;
    }).catch(() => {
      // Silently fail — haptics are a progressive enhancement
    });

    return () => {
      haptics?.destroy();
      instanceRef.current = null;
    };
  }, []);

  const trigger = useCallback((preset: HapticPreset | number | number[] = 'light', options?: { intensity?: number }) => {
    instanceRef.current?.trigger(preset, options);
  }, []);

  return { trigger };
}
