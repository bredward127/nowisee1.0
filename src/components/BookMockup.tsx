import React, { useState } from 'react';
import { motion } from 'motion/react';
import coverImage from '../assets/images/now_i_see_cover_1784594781418.jpg';

export default function BookMockup() {
  const [rotate, setRotate] = useState({ x: 0, y: -15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation angles based on cursor position relative to center
    const xPct = (x / rect.width) - 0.5;
    const yPct = (y / rect.height) - 0.5;

    setRotate({
      x: -yPct * 25, // limit X rotation
      y: (xPct * 35) - 15, // center-offset rotation
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: -15 }); // snap back to starting showcase position
  };

  return (
    <div className="flex justify-center items-center py-8 md:py-12 select-none">
      <div
        className="relative cursor-grab active:cursor-grabbing"
        style={{
          perspective: '1200px',
          width: '240px',
          height: '320px',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={{
            rotateX: rotate.x,
            rotateY: rotate.y,
          }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 18,
            mass: 0.8,
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
          className="relative w-full h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] rounded-r-[4px]"
        >
          {/* Front Cover */}
          <div
            className="absolute inset-0 w-full h-full rounded-r-[4px] overflow-hidden"
            style={{
              transform: 'translateZ(12px)',
              backfaceVisibility: 'hidden',
            }}
          >
            <img
              src={coverImage}
              alt="Now I See - Book Cover"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Glossy Overlay Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none mix-blend-overlay" />
            
            {/* Golden foil spine border */}
            <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-r from-amber-600/50 via-yellow-400/30 to-transparent pointer-events-none" />
          </div>

          {/* Left Spine */}
          <div
            className="absolute top-0 bottom-0 left-0 w-[24px] bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-r border-editorial-gold/20 flex flex-col items-center justify-between py-6 text-[8px] font-sans font-semibold tracking-[0.2em] text-editorial-gold uppercase origin-left"
            style={{
              transform: 'rotateY(-90deg) translateZ(0px)',
              backfaceVisibility: 'hidden',
            }}
          >
            <span className="rotate-180 [writing-mode:vertical-lr] text-editorial-gold/60">TONI ME TAYLOR</span>
            <span className="rotate-180 [writing-mode:vertical-lr] text-[#f6f2e8] font-serif tracking-normal text-[10px] leading-none">NOW I SEE</span>
            <span className="rotate-180 [writing-mode:vertical-lr] text-editorial-gold/40">FAITH & TRUTH</span>
          </div>

          {/* Right Page Edge block (simulated book thickness) */}
          <div
            className="absolute top-0 bottom-0 right-0 w-[24px] bg-stone-100 border-t border-b border-r border-stone-300 rounded-r shadow-inner"
            style={{
              transform: 'rotateY(90deg) translateZ(228px)',
              backgroundImage: 'linear-gradient(to right, #ece9e2 0%, #f6f2e8 40%, #e8e2d4 70%, #d8cfbe 100%)',
              backgroundSize: '4px 100%', // page lines lines
            }}
          >
            {/* Tiny lines to simulate individual page sheets */}
            <div className="w-full h-full opacity-40 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#d2c7b5_2px,#d2c7b5_3px)]" />
          </div>

          {/* Top Page Edge */}
          <div
            className="absolute left-0 right-0 top-0 h-[24px] bg-[#ece9e2]"
            style={{
              transform: 'rotateX(90deg) translateZ(12px)',
              backgroundImage: 'linear-gradient(to bottom, #d2c7b5, #ece9e2)',
            }}
          >
            <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#8c7c65_2px,#8c7c65_3px)]" />
          </div>

          {/* Bottom Page Edge */}
          <div
            className="absolute left-0 right-0 bottom-0 h-[24px] bg-[#ece9e2]"
            style={{
              transform: 'rotateX(-90deg) translateZ(308px)',
              backgroundImage: 'linear-gradient(to top, #d2c7b5, #ece9e2)',
            }}
          >
            <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#8c7c65_2px,#8c7c65_3px)]" />
          </div>

          {/* Back Cover (just dark texture for completeness) */}
          <div
            className="absolute inset-0 w-full h-full bg-zinc-950 border-2 border-editorial-gold/40 rounded shadow-2xl"
            style={{
              transform: 'rotateY(180deg) translateZ(12px)',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="w-full h-full p-4 flex flex-col justify-between items-center text-center border border-editorial-gold/10">
              <div className="h-4 w-4 border-t border-l border-editorial-gold/30 self-start" />
              <div>
                <p className="font-sans text-[9px] text-editorial-gold tracking-[0.15em] mb-1">NOW I SEE</p>
                <div className="h-[1px] w-8 bg-editorial-gold/30 mx-auto" />
              </div>
              <div className="h-4 w-4 border-b border-r border-editorial-gold/30 self-end" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
