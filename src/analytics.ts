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
