import { useEffect, useRef, useState } from 'react';

interface PayPalButtonProps {
  editionId: 'hardcover' | 'paperback';
  price: number;
  onSuccess: (payerName: string) => void;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function PayPalButton({ editionId, price, onSuccess }: PayPalButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if PayPal SDK is already loaded
    if (window.paypal) {
      setSdkReady(true);
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=BAAqvvMK6Qbu1RmFBF2-iiKTyfphwRTcUwqQSKKEXgJ2yunZx7cWzxOBZxMQj3IcDYfkY_ZfeXu5urGLVY&currency=USD';
    script.async = true;
    script.onload = () => setSdkReady(true);
    script.onerror = () => setError('Failed to load payment system. Please refresh or buy on Amazon.');
    
    document.head.appendChild(script);

    return () => {
      // We don't remove the script to avoid multiple loads if switching tabs
    };
  }, []);

  useEffect(() => {
    if (!sdkReady || !containerRef.current || !window.paypal) return;

    // Clear previous button elements to avoid duplicates
    containerRef.current.innerHTML = '';

    try {
      window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'gold',
          shape: 'rect',
          label: 'paypal',
          height: 45
        },
        createOrder: (_data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              description: `Now I See — ${editionId === 'hardcover' ? 'Hardcover Edition' : 'Paperback Edition'}`,
              amount: {
                value: price.toFixed(2)
              }
            }]
          });
        },
        onApprove: async (_data: any, actions: any) => {
          const details = await actions.order.capture();
          const name = details.payer.name.given_name || 'Reader';
          onSuccess(name);
        },
        onError: (err: any) => {
          console.error('PayPal Error:', err);
          setError('An error occurred during payment processing.');
        }
      }).render(containerRef.current);
    } catch (err) {
      console.error('PayPal Button Rendering Error:', err);
    }
  }, [sdkReady, editionId, price, onSuccess]);

  if (error) {
    return (
      <div className="p-3 text-xs bg-red-950/40 border border-red-800/30 rounded text-red-300 text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full min-h-[45px] relative" id={`paypal-btn-${editionId}`}>
      {!sdkReady && (
        <div className="w-full h-11 bg-zinc-800/25 animate-pulse rounded border border-zinc-700/20 flex items-center justify-center">
          <span className="text-xs text-zinc-400 font-mono tracking-widest uppercase">Initializing Secure Express Checkout...</span>
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}
