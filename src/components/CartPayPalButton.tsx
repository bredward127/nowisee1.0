import { useEffect, useRef, useState } from 'react';

export type CartEdition = 'hardcover' | 'paperback';

export interface CartCheckoutItem {
  edition: CartEdition;
  name: string;
  price: number;
  quantity: number;
}

interface CartPayPalButtonProps {
  items: CartCheckoutItem[];
  subtotal: number;
  shipping: number;
  total: number;
  onSuccess: (payerName: string) => void;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'BAAqvvMK6Qbu1RmFBF2-iiKTyfphwRTcUwqQSKKEXgJ2yunZx7cWzxOBZxMQj3IcDYfkY_ZfeXu5urGLVY';
let paypalSdkPromise: Promise<void> | null = null;

function loadPayPalSdk() {
  if (window.paypal) return Promise.resolve();
  if (paypalSdkPromise) return paypalSdkPromise;

  paypalSdkPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-now-i-see-paypal-sdk]') as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('PayPal SDK failed to load.')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=USD&intent=capture&commit=true`;
    script.async = true;
    script.dataset.nowISeePaypalSdk = 'true';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('PayPal SDK failed to load.'));
    document.head.appendChild(script);
  });

  return paypalSdkPromise;
}

export default function CartPayPalButton({ items, subtotal, shipping, total, onSuccess }: CartPayPalButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const itemSignature = items.map((item) => `${item.edition}:${item.quantity}:${item.price}`).join('|');

  useEffect(() => {
    let active = true;
    loadPayPalSdk()
      .then(() => { if (active) setSdkReady(true); })
      .catch(() => { if (active) setError('PayPal could not load. Please refresh, or use the Amazon option.'); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!sdkReady || !containerRef.current || !window.paypal || items.length === 0) return;

    containerRef.current.innerHTML = '';
    const orderItems = items.map((item) => ({
      name: `Now I See — ${item.name} preorder`,
      unit_amount: { currency_code: 'USD', value: item.price.toFixed(2) },
      quantity: String(item.quantity),
      category: 'PHYSICAL_GOODS'
    }));

    const description = items.map((item) => `${item.quantity}× ${item.name}`).join(', ');

    window.paypal.Buttons({
      style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal', height: 45 },
      createOrder: (_data: any, actions: any) => actions.order.create({
        application_context: { shipping_preference: 'GET_FROM_FILE', user_action: 'PAY_NOW' },
        purchase_units: [{
          description: `Now I See preorder — ${description} (standard U.S. shipping included; ships in approximately 4 weeks)`,
          items: orderItems,
          amount: {
            currency_code: 'USD',
            value: total.toFixed(2),
            breakdown: {
              item_total: { currency_code: 'USD', value: subtotal.toFixed(2) },
              shipping: { currency_code: 'USD', value: shipping.toFixed(2) }
            }
          }
        }]
      }),
      onShippingAddressChange: (data: any, actions: any) => {
        if (data.shipping_address?.country_code !== 'US') return actions.reject();
        return actions.resolve();
      },
      onApprove: async (_data: any, actions: any) => {
        const details = await actions.order.capture();
        onSuccess(details.payer?.name?.given_name || 'Reader');
      },
      onError: (err: any) => {
        console.error('PayPal cart checkout error:', err);
        setError('An error occurred during payment processing. Please refresh and try again.');
      }
    }).render(containerRef.current);
  }, [sdkReady, itemSignature, subtotal, shipping, total, onSuccess, items]);

  if (error) return <p className="checkout-error" role="alert">{error}</p>;

  return (
    <div className="cart-paypal" aria-label="PayPal checkout">
      {!sdkReady && <div className="paypal-loading">Loading secure checkout…</div>}
      <div ref={containerRef} />
    </div>
  );
}
