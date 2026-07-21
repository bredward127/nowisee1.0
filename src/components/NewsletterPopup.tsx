import { useEffect, useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Check, Shield } from 'lucide-react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user already subscribed or dismissed
    const hasSubscribed = localStorage.getItem('toni-newsletter-subscribed') === 'true';
    const hasDismissed = localStorage.getItem('toni-newsletter-dismissed') === 'true';

    if (hasSubscribed || hasDismissed) {
      return;
    }

    let scrollStarted = false;
    let timer: NodeJS.Timeout;

    const handleScroll = () => {
      if (!scrollStarted && window.scrollY > 100) {
        scrollStarted = true;
        // Start 5 second timer after scrolling starts
        timer = setTimeout(() => {
          setIsOpen(true);
        }, 5000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Don't show again in this session
    localStorage.setItem('toni-newsletter-dismissed', 'true');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    // Save to localStorage
    localStorage.setItem('toni-newsletter-subscribed', 'true');
    setIsSubmitted(true);
    setError('');
    
    // Auto close after 3 seconds on success
    setTimeout(() => {
      setIsOpen(false);
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="bg-[#F5F2ED] border-2 border-editorial-gold text-[#1A1A1A] w-full max-w-md rounded-lg shadow-2xl relative overflow-hidden font-serif p-6 md:p-8"
          >
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#8B0000]" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800 transition p-1"
              aria-label="Close newsletter popup"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center">
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#8B0000] font-bold block mb-1">
                    Join Toni's Circle of Faith
                  </span>
                  <h3 className="text-2xl font-serif font-black text-[#1A1A1A]">
                    Receive Divine Hope
                  </h3>
                  <div className="h-[1px] w-16 bg-editorial-gold mx-auto my-3" />
                  <p className="text-sm text-zinc-600 leading-relaxed max-w-sm mx-auto font-sans">
                    Subscribe to receive inspirational passages, personal prayer circles, and updates on new book releases directly from Toni ME Taylor.
                  </p>
                </div>

                <div className="relative font-sans">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className="w-full bg-white border border-black/15 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-editorial-gold rounded-md"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-600 font-sans font-medium text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#8B0000] text-white rounded-md text-xs font-sans font-bold uppercase tracking-widest hover:bg-[#1A1A1A] transition duration-300 shadow"
                >
                  Join Prayer List & Newsletter
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-400 font-sans">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Your faith is private. We never share or sell your email.</span>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-100">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">
                  You are Subscribed!
                </h3>
                <p className="text-sm text-zinc-600 font-sans leading-relaxed max-w-xs mx-auto">
                  Thank you for joining. Toni sends her blessings. An introductory devotional guide will arrive in your inbox shortly.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
