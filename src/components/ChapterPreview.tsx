import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ChapterPreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const PREVIEW_PAGES = [
  {
    title: "Letter to the Reader",
    subtitle: "A Dream and A Revelation",
    content: (
      <>
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-editorial-gold first-letter:leading-none">
          F
        </p>
        <p className="mb-4">
          irst, I want to thank you for making time to read my testimony. Second, it’s imperative you know this is a republication; first published in 2021 and originally titled: America, Donald Trump, God and Me Through My Great-Grandma Eyes.
        </p>
        <p className="mb-4">
          On Tuesday, November 5, 2024, Donald Trump was elected president of the United States of America for a second term; that night, I had a dream wherein I was instructed to republish under a different title. The title given to me was, <strong className="font-semibold text-editorial-crimson">NOW I SEE America My Testimony God and Me</strong>.
        </p>
        <p className="mb-4">
          I remember being trapped inside a black-crimson-red void of nothingness... I was blind, I could not see... Then suddenly, there was light! A brilliant white glow rose in the distance, beckoning me through the darkness.
        </p>
        <p className="mb-4">
          And just like that, the darkness was gone. I woke up, got out of bed... What you hold in your hands is a &ldquo;Universal Unveiling of Truth, Love, Forgiveness, Unity, Empathy, Compassion, and Hope.&rdquo; In Jesus’ Name, I pray you, too, shall see.
        </p>
      </>
    )
  },
  {
    title: "Chapter Selection",
    subtitle: "Gracefully Broken",
    content: (
      <>
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-editorial-gold first-letter:leading-none">
          T
        </p>
        <p className="mb-4">
          he world broke me from the inside out. Having no further need of me, it gathered up my broken pieces, took me to an abandoned landfill, and threw me atop a garbage heap.
        </p>
        <p className="mb-4">
          One day God was passing overhead, looked down and took notice of me. I was disfigured by sin and covered in filth, yet He recognized me, and my stench did not offend Him. My brokenness was massive; countless shards of shame, loathing, fear, and desperation.
        </p>
        <p className="mb-4">
          God tilted His head to the side, smiled, and said, <span className="italic font-semibold">&ldquo;I’m right here; I have not forsaken you.&rdquo;</span> Having found every piece of me, He called down the cleansing rains and gentle breeze of heaven.
        </p>
        <p className="mb-4">
          Yes, I still crack from time to time; occasionally, I even break! But I never shatter! God’s love restored me. God’s forgiveness renewed me.
        </p>
      </>
    )
  },
  {
    title: "Chapter Selection",
    subtitle: "Wisdom in a Can",
    content: (
      <>
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-editorial-gold first-letter:leading-none">
          O
        </p>
        <p className="mb-4">
          ne day, when I was feeling particularly sorry for myself, God directed me to the kitchen. Once there, He asked me to take a can of canned vegetables from the cabinet and turn it bottom-side up. He did most of the talking.
        </p>
        <p className="mb-4">
          &ldquo;What do you see Toni?&rdquo; &ldquo;The expiration date.&rdquo; &ldquo;What happens if you eat these vegetables after the expiration date?&rdquo; &ldquo;I get sick.&rdquo;
        </p>
        <p className="mb-4">
          &ldquo;The same holds true when you consume and meditate on negative things; you get sick. Expired food poisons and depletes the body. Negative words and deeds produce negative emotions... Forgiveness is the &ldquo;only&rdquo; answer to negative things. Even when it doesn’t feel fair—forgive.&rdquo;
        </p>
        <p className="mb-4">
          Little by little, forgiving becomes as breathing; in and out. Less and less of your life/time is spent on negative things. You’re happy. You’re at peace. You breathe easy.
        </p>
        <div className="mt-6 pt-4 border-t border-amber-900/10 text-center">
          <p className="font-serif italic text-xs text-zinc-500">
            This is only a brief excerpt. Complete your order to read the full spiritual memoir of faith.
          </p>
        </div>
      </>
    )
  }
];

export default function ChapterPreview({ isOpen, onClose }: ChapterPreviewProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < PREVIEW_PAGES.length - 1) {
      setCurrentPage(c => c + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(c => c - 1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-editorial-ink/90 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#fcf8f0] text-zinc-900 rounded-lg shadow-2xl border border-amber-900/10 overflow-hidden flex flex-col h-[85vh] max-h-[650px]"
          >
            {/* Header decor */}
            <div className="h-2 bg-gradient-to-r from-amber-800/20 via-editorial-gold to-amber-800/20 w-full" />
            
            {/* Top Controls */}
            <div className="p-4 flex justify-between items-center border-b border-amber-800/10">
              <div className="flex items-center gap-2 text-editorial-gold">
                <BookOpen className="w-5 h-5" />
                <span className="font-sans text-xs tracking-widest uppercase">FREE EXCERPT PREVIEW</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-zinc-500 hover:bg-amber-900/5 hover:text-zinc-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Book Page Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 font-serif text-base leading-relaxed text-zinc-800 select-text">
              <div className="max-w-md mx-auto h-full flex flex-col justify-between">
                <div>
                  <div className="text-center mb-8">
                    <span className="text-xs font-sans tracking-[0.2em] text-editorial-gold/70 block uppercase">
                      {PREVIEW_PAGES[currentPage].title}
                    </span>
                    <h2 className="text-2xl font-serif font-semibold text-zinc-950 mt-1">
                      {PREVIEW_PAGES[currentPage].subtitle}
                    </h2>
                    <div className="h-[1px] w-12 bg-editorial-gold/40 mx-auto mt-3" />
                  </div>

                  <div className="space-y-4 text-[15px] md:text-[16px]">
                    {PREVIEW_PAGES[currentPage].content}
                  </div>
                </div>

                {/* Footer page marker */}
                <div className="text-center text-xs font-mono text-zinc-500 mt-8 pt-4 border-t border-amber-800/5">
                  Page {currentPage + 1} of {PREVIEW_PAGES.length}
                </div>
              </div>
            </div>

            {/* Navigation footer */}
            <div className="p-4 bg-amber-900/5 border-t border-amber-800/10 flex justify-between items-center">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="flex items-center gap-1 px-3 py-1.5 rounded text-sm font-sans font-medium text-zinc-700 hover:bg-amber-950/5 disabled:opacity-30 disabled:hover:bg-transparent transition"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              
              <div className="flex gap-1">
                {PREVIEW_PAGES.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentPage ? 'w-4 bg-editorial-gold' : 'w-1.5 bg-zinc-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === PREVIEW_PAGES.length - 1}
                className="flex items-center gap-1 px-3 py-1.5 rounded text-sm font-sans font-medium text-zinc-700 hover:bg-amber-950/5 disabled:opacity-30 disabled:hover:bg-transparent transition"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
