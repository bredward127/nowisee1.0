import { useEffect, useRef, useState } from 'react';
import { getPayPalConfigError, loadPayPalSdk } from '../paypal';

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

function checkoutErrorMessage(configError: ReturnType<typeof getPayPalConfigError>) {
  if (configError) {
    // A build-time misconfiguration: no client id, or a hosted-button id that
    // paypal.Buttons() cannot use. Nothing the buyer can do by retrying.
    return 'PayPal checkout is not configured on this site yet. Please use the Amazon option, or contact us to order directly.';
  }
  return 'PayPal could not load. Please refresh, or use the Amazon option.';
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
      .catch((sdkError) => {
        console.error('PayPal SDK load failed:', sdkError);
        if (active) setError(checkoutErrorMessage(getPayPalConfigError()));
      });
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
          description: `Now I See preorder — ${description} (ships in approximately 4 weeks)`,
          items: orderItems,
          // A named shipping option makes the cost appear as its own line in the
          // PayPal window. Its amount MUST equal breakdown.shipping exactly.
          shipping: {
            options: [{
              id: 'STANDARD_US',
              label: shipping > 0 ? 'Standard U.S. Shipping' : 'Free Standard U.S. Shipping',
              type: 'SHIPPING',
              selected: true,
              amount: { currency_code: 'USD', value: shipping.toFixed(2) }
            }]
          },
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
      // NOTE: this callback is `onShippingAddressChange`, which supplies
      // `data.shippingAddress` with camelCase fields (countryCode, state,
      // city, postalCode). The older `onShippingChange` used
      // `data.shipping_address.country_code`. Mixing them makes the country
      // check fail for EVERY address and PayPal shows the buyer
      // "Your order can't be shipped to this address".
      onShippingAddressChange: (data: any, actions: any) => {
        const countryCode = data?.shippingAddress?.countryCode;
        if (countryCode !== 'US') {
          return actions.reject(data.errors.COUNTRY_ERROR);
        }
        // No actions.resolve() here — this callback's actions object only
        // exposes reject(). Returning nothing accepts the address.
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
