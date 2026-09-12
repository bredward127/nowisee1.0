type RedditEventName = 'PageVisit' | 'ViewContent' | 'AddToCart' | 'Purchase' | 'Lead' | 'SignUp' | 'Custom';

type RedditEventPayload = {
  currency?: string;
  value?: number;
  itemCount?: number;
  customEventName?: string;
  products?: { id: string; name: string; category?: string }[];
};

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
