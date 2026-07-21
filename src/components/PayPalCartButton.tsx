import { useEffect, useRef, useState } from 'react';
import { CartItem } from '../types';

interface PayPalCartButtonProps {
  totalPrice: number;
  cartItems: CartItem[];
  onSuccess: (payerName: string) => void;
}

export default function PayPalCartButton({ totalPrice, cartItems, onSuccess }: PayPalCartButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if PayPal SDK is already loaded
    if (window.paypal) {
      setSdkReady(true);
      return;
    }

    // Create script element with sandbox client-id
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=BAAqvvMK6Qbu1RmFBF2-iiKTyfphwRTcUwqQSKKEXgJ2yunZx7cWzxOBZxMQj3IcDYfkY_ZfeXu5urGLVY&currency=USD';
    script.async = true;
    script.onload = () => setSdkReady(true);
    script.onerror = () => setError('Failed to load secure payment gateway. Please retry.');
    
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!sdkReady || !containerRef.current || !window.paypal || cartItems.length === 0) return;

    // Clear previous button elements to avoid duplicates
    containerRef.current.innerHTML = '';

    const itemsSummary = cartItems
      .map(item => `${item.product.title} (x${item.quantity})`)
      .join(', ');

    try {
      window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'gold',
          shape: 'rect',
          label: 'checkout',
          height: 45
        },
        createOrder: (_data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              description: `Store Order: ${itemsSummary.substring(0, 120)}`,
              amount: {
                value: totalPrice.toFixed(2)
              }
            }]
          });
        },
        onApprove: async (_data: any, actions: any) => {
          const details = await actions.order.capture();
          const name = details.payer.name.given_name || 'Valued Reader';
          onSuccess(name);
        },
        onError: (err: any) => {
          console.error('PayPal Cart Error:', err);
          setError('An issue occurred during checkout payment. Please try again.');
        }
      }).render(containerRef.current);
    } catch (err) {
      console.error('PayPal Button Rendering Error:', err);
    }
  }, [sdkReady, totalPrice, cartItems, onSuccess]);

  if (cartItems.length === 0) {
    return null;
  }

  if (error) {
    return (
      <div className="p-3 text-xs bg-red-950/40 border border-red-800/30 rounded text-red-300 text-center font-sans">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full min-h-[45px] relative" id="paypal-cart-checkout-button">
      {!sdkReady && (
        <div className="w-full h-11 bg-zinc-800/10 animate-pulse rounded border border-zinc-200 flex items-center justify-center">
          <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase">Securing Connection...</span>
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}
