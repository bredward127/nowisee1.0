import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, Accessibility, ShoppingCart, Type, Eye, Check, X, BookOpen } from 'lucide-react';
import coverImage from '../assets/images/now_i_see_cover_1784594781418.jpg';

interface StickyCTAProps {
  onBuyBook: () => void;
  largeText: boolean;
  setLargeText: (val: boolean) => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  sansSerif: boolean;
  setSansSerif: (val: boolean) => void;
}

export default function StickyCTA({
  onBuyBook,
  largeText,
  setLargeText,
  highContrast,
  setHighContrast,
  sansSerif,
  setSansSerif
}: StickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show controls after scrolling past 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
        setShowAccessibilityMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Panels and Sticky CTA */}
      <AnimatePresence>
        {visible && (
          <>
            {/* Desktop Side Floating Controls (Compact Deck for screens >= lg) */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              className="hidden lg:flex flex-col gap-3 fixed bottom-8 left-8 z-40 font-sans"
            >
              {/* Accessibility Floating Button */}
              <button
                onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all border ${
                  showAccessibilityMenu 
                    ? 'bg-[#8B0000] border-[#8B0000] text-white' 
                    : 'bg-white hover:bg-[#F5F2ED] text-[#1A1A1A] border-black/10'
                }`}
                title="Accessibility Panel"
              >
                <Accessibility className="w-5 h-5" />
              </button>

              {/* Scroll To Top Button */}
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-white hover:bg-[#F5F2ED] text-[#1A1A1A] rounded-full flex items-center justify-center shadow-lg border border-black/10 transition-all"
                title="Scroll to Top"
              >
                <ChevronUp className="w-5 h-5 animate-pulse" />
              </button>

              {/* Sticky Buy Book Pill */}
              <button
                onClick={onBuyBook}
                className="px-6 py-3.5 bg-gradient-to-r from-[#8B0000] to-[#B8860B] hover:brightness-110 text-white rounded-full flex items-center gap-2 shadow-xl font-bold text-xs tracking-widest uppercase transition-all"
              >
                <ShoppingCart className="w-4 h-4" /> Buy the Book
              </button>
            </motion.div>

            {/* Mobile & Tablet Bottom Sticky Bar (For screens < lg) */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              className="fixed bottom-0 inset-x-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-editorial-gold/20 py-3 px-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] lg:hidden flex items-center justify-between gap-2 font-sans"
            >
              <div className="flex items-center gap-2">
                {/* Book cover icon */}
                <img
                  src={coverImage}
                  alt="Now I See Cover"
                  className="w-7 h-9 object-cover rounded shadow border border-zinc-800 shrink-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Scroll to top */}
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-zinc-800 text-zinc-300 rounded-full hover:bg-zinc-700 hover:text-white transition"
                  title="Scroll back to Top"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>

                {/* Accessibility Toggle */}
                <button
                  onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
                  className={`p-2 rounded-full transition ${
                    showAccessibilityMenu ? 'bg-[#8B0000] text-white' : 'bg-zinc-800 text-zinc-300'
                  }`}
                  title="Accessibility Controls"
                >
                  <Accessibility className="w-4 h-4" />
                </button>
              </div>

              {/* Conversion Optimized "Buy the Book" button */}
              <button
                onClick={onBuyBook}
                className="flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[#8B0000] to-[#B8860B] text-white rounded-md font-sans text-xs font-bold tracking-wider uppercase shadow active:scale-95 transition"
              >
                <ShoppingCart className="w-3.5 h-3.5" /> Buy the Book
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Accessibility Adjustment Dialog Overlay */}
      <AnimatePresence>
        {showAccessibilityMenu && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#F5F2ED] border border-editorial-gold text-[#1A1A1A] w-full max-w-sm rounded-lg shadow-2xl relative p-6 font-sans"
            >
              <button
                onClick={() => setShowAccessibilityMenu(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <Accessibility className="w-6 h-6 text-[#8B0000]" />
                <h3 className="font-serif text-lg font-bold">Accessibility Tools</h3>
              </div>
              <p className="text-xs text-zinc-500 mb-6 font-serif">
                Customize reading preferences to enjoy Toni's testimony comfortably.
              </p>

              <div className="space-y-4">
                {/* 1. Large Text Option */}
                <button
                  onClick={() => setLargeText(!largeText)}
                  className="w-full flex items-center justify-between p-3 bg-white border border-black/5 rounded hover:bg-[#EAE7E0] transition"
                >
                  <div className="flex items-center gap-3">
                    <Type className="w-4 h-4 text-zinc-500" />
                    <span className="text-sm font-semibold text-zinc-700">Large Readable Text</span>
                  </div>
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                    largeText ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-zinc-300 bg-zinc-50'
                  }`}>
                    {largeText && <Check className="w-3 h-3" />}
                  </div>
                </button>

                {/* 2. Dyslexic / Sans Serif Readability Option */}
                <button
                  onClick={() => setSansSerif(!sansSerif)}
                  className="w-full flex items-center justify-between p-3 bg-white border border-black/5 rounded hover:bg-[#EAE7E0] transition"
                >
                  <div className="flex items-center gap-3">
                    <Type className="w-4 h-4 text-zinc-500 italic" />
                    <span className="text-sm font-semibold text-zinc-700">Clean Sans-Serif Font</span>
                  </div>
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                    sansSerif ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-zinc-300 bg-zinc-50'
                  }`}>
                    {sansSerif && <Check className="w-3 h-3" />}
                  </div>
                </button>

                {/* 3. High Contrast Option */}
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className="w-full flex items-center justify-between p-3 bg-white border border-black/5 rounded hover:bg-[#EAE7E0] transition"
                >
                  <div className="flex items-center gap-3">
                    <Eye className="w-4 h-4 text-zinc-500" />
                    <span className="text-sm font-semibold text-zinc-700">High Contrast Mode</span>
                  </div>
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                    highContrast ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-zinc-300 bg-zinc-50'
                  }`}>
                    {highContrast && <Check className="w-3 h-3" />}
                  </div>
                </button>
              </div>

              <button
                onClick={() => setShowAccessibilityMenu(false)}
                className="mt-6 w-full py-2.5 bg-zinc-950 text-white font-semibold text-xs tracking-wider uppercase rounded hover:bg-[#8B0000] transition"
              >
                Apply Reading Preferences
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
