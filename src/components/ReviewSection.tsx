import { Star, ShieldCheck } from 'lucide-react';
import { Review } from '../types';

const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    location: 'Fort Worth, TX',
    rating: 5,
    text: 'A stirring call to reclaim our values. Toni’s words cut through the noise of modern life to offer a beacon of hope and faith. I bought the hardcover, and it sits proudly on my nightstand.',
    role: 'Verified Purchaser'
  },
  {
    id: '2',
    author: 'Pastor Michael Lewis',
    location: 'Nashville, TN',
    rating: 5,
    text: 'A timely, deeply moving testimony. It reminded me that our liberties are God-given and worth cherishing. Toni writes with direct, passionate clarity. Perfect for study groups.',
    role: 'Ministry Leader'
  },
  {
    id: '3',
    author: 'Deborah Myers',
    location: 'Orlando, FL',
    rating: 5,
    text: 'The absolute truth. I ordered directly from this site, and it arrived beautifully wrapped with a sweet note from the family. It is rare to see such love and dedication.',
    role: 'Verified Purchaser'
  },
  {
    id: '4',
    author: 'David Kowalski',
    location: 'Columbus, OH',
    rating: 5,
    text: 'Insightful, patriotic, and filled with deep spiritual wisdom. A highly recommended memoir for anyone seeking authentic hope for America’s future.',
    role: 'Verified Purchaser'
  }
];

export default function ReviewSection() {
  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-1 text-gold-bright mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <h2 className="text-3xl font-serif text-paper">What Readers Are Saying</h2>
        <p className="text-sm text-zinc-400 font-sans mt-2 max-w-md mx-auto">
          Honest thoughts and reviews from brothers and sisters who have found inspiration in Toni’s story.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {REVIEWS.map((review) => (
          <div
            key={review.id}
            className="p-6 rounded bg-gradient-to-br from-zinc-900/40 to-zinc-950/20 border border-zinc-800/40 hover:border-gold/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-serif text-[16px] text-paper">{review.author}</h4>
                  <p className="text-[12px] text-zinc-500 font-sans">{review.location}</p>
                </div>
                <div className="flex items-center gap-0.5 text-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[14px] leading-relaxed text-zinc-300 font-serif italic">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-zinc-800/40 flex items-center gap-1.5 text-emerald-500/80">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] font-sans font-semibold tracking-wider uppercase">
                {review.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
