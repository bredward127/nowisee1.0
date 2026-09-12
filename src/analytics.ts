type RedditEventName = 'PageVisit' | 'ViewContent' | 'AddToCart' | 'Purchase' | 'Lead' | 'SignUp' | 'Custom';

type RedditEventPayload = {
  currency?: string;
  value?: number;
  itemCount?: number;
  customEventName?: string;
  conversionId?: string;
  products?: { id: string; name: string; category?: string }[];
};

const PIXEL_ID = 'a2_jfpt0cc0tbxd';

/**
 * Reddit's advanced matching: re-running init with a match key attaches it to
 * events fired afterwards, which improves attribution on the Purchase event.
 */
export function identifyReddit(matchKeys: { email?: string; phoneNumber?: string; externalId?: string }) {
  if (typeof window === 'undefined' || typeof window.rdt !== 'function') return;
  const keys = Object.fromEntries(Object.entries(matchKeys).filter(([, value]) => Boolean(value)));
  if (Object.keys(keys).length === 0) return;
  try {
    window.rdt('init', PIXEL_ID, keys);
  } catch (err) {
    console.warn('Reddit pixel identify failed:', err);
  }
}

/**
 * Reddit de-duplicates events that share a conversionId, so every event needs
 * a unique one. Purchases pass the PayPal order id; browser-side events that
 * have no natural id get a random one.
 */
export function newConversionId(prefix: string) {
  const uuid = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  return `${prefix}-${uuid}`;
}

export function trackReddit(event: RedditEventName, payload?: RedditEventPayload) {
  // The pixel loads asynchronously from index.html; rdt() queues calls until
  // it is ready, so a missing rdt only means the script was blocked.
  if (typeof window === 'undefined' || typeof window.rdt !== 'function') return;
  try {
    if (payload) window.rdt('track', event, payload);
    else window.rdt('track', event);
  } catch (err) {
    console.warn('Reddit pixel event failed:', err);
  }
}

function readCookie(name: string) {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

type ServerConversion = {
  trackingType: 'AddToCart' | 'Purchase' | 'Lead' | 'SignUp' | 'ViewContent' | 'CUSTOM';
  customEventName?: string;
  conversionId: string;
  value?: number;
  itemCount?: number;
  email?: string;
  phoneNumber?: string;
  externalId?: string;
  products?: { id: string; name: string; category?: string }[];
};

/**
 * Mirrors a pixel event through the Conversions API so it still lands when the
 * browser pixel is blocked. Reddit merges the two using conversion_id, so the
 * caller must pass the same id it gave the pixel.
 */
export function sendRedditConversion(event: ServerConversion) {
  if (typeof window === 'undefined') return;
  const clickId = new URLSearchParams(window.location.search).get('rdt_cid') || undefined;
  const body = JSON.stringify({
    ...event,
    currency: 'USD',
    eventAt: Date.now(),
    // Ties the server event to the same browser the pixel saw.
    rdtUuid: readCookie('_rdt_uuid'),
    clickId,
    screenWidth: window.screen?.width,
    screenHeight: window.screen?.height,
  });

  // keepalive so the request survives the page navigating away after checkout.
  fetch('/api/reddit/conversion', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch((err) => console.warn('Reddit conversion event failed:', err));
}
