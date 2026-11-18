const productionOrigin = 'https://docketeer.io';

// This site has one public page. Do not send queries, fragments, unknown paths,
// or custom event names/properties through either monitoring integration.
export function filterTelemetry<T extends { type: string; url: string; route?: string }>(event: T): T | null {
  try {
    const url = new URL(event.url);
    if (url.origin !== productionOrigin || url.pathname !== '/' || url.username || url.password || event.type === 'event') return null;
    return { ...event, url: `${productionOrigin}/`, ...('route' in event ? { route: '/' } : {}) };
  } catch {
    return null;
  }
}

let started = false;
export async function startMonitoring(): Promise<void> {
  if (started || !import.meta.env.PROD || typeof window === 'undefined' || window.location.origin !== productionOrigin) return;
  const privacy = navigator as Navigator & { globalPrivacyControl?: boolean };
  if (privacy.globalPrivacyControl || navigator.doNotTrack === '1') return;
  started = true;
  const tasks: Promise<void>[] = [];
  if (import.meta.env.VITE_ENABLE_WEB_ANALYTICS === 'true') {
    tasks.push(import('@vercel/analytics').then(({ inject }) => {
      inject({ mode: 'production', debug: false, beforeSend: filterTelemetry });
    }));
  }
  if (import.meta.env.VITE_ENABLE_SPEED_INSIGHTS === 'true') {
    tasks.push(import('@vercel/speed-insights').then(({ injectSpeedInsights }) => {
      injectSpeedInsights({ debug: false, sampleRate: 0.1, softNavs: false, route: '/', beforeSend: filterTelemetry });
    }));
  }
  // Optional telemetry must never prevent the website from rendering.
  const results = await Promise.allSettled(tasks);
  if (results.some(result => result.status === 'rejected')) {
    console.warn('[Docketeer] Optional monitoring could not initialize.');
  }
}
