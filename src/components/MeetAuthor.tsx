import authorImage from '../assets/images/author_toni_taylor_1784594793249.jpg';

export default function MeetAuthor() {
  return (
    <div className="grid md:grid-cols-12 gap-8 items-center bg-[#12131C] p-6 md:p-10 rounded-lg border border-editorial-gold/25 shadow-xl">
      <div className="md:col-span-4 flex justify-center">
        <div className="relative group max-w-[240px]">
          {/* Decorative gold frames around the author picture */}
          <div className="absolute -inset-1.5 border border-editorial-gold/30 rounded scale-98 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
          <div className="absolute -inset-3 border border-editorial-gold/15 rounded scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
          <img
            src={authorImage}
            alt="Toni ME Taylor — Author of Now I See"
            className="rounded relative z-10 w-full shadow-2xl filter brightness-95 group-hover:brightness-100 transition duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      <div className="md:col-span-8 space-y-4">
        <span className="text-xs font-sans font-semibold tracking-[0.25em] text-editorial-gold uppercase block">
          MEET THE AUTHOR
        </span>
        <h2 className="text-3xl font-serif text-editorial-paper">Toni ME Taylor</h2>
        <div className="h-[1px] w-16 bg-editorial-gold/40" />
        
        <div className="space-y-3 font-serif text-[15px] leading-relaxed text-editorial-paper/85">
          <p>
            Toni ME Taylor is an American of deep, unshakeable faith, devoted wife, and a passionate advocate for America’s foundational core values. Having lived through hours of personal trials, she discovered that the ultimate anchor in any storm is the light of God's Word.
          </p>
          <p>
            Toni's life changed when she began to truly see—to understand that liberty and freedom are not merely political constructs, but divine birthrights given to all mankind. Her testimony is a sincere expression of love for her family, her country, and her Savior.
          </p>
          <p className="italic text-editorial-gold/90">
            &ldquo;My hope is that through these pages, you will find your own eyes opened to the beauty of His truth, and that together we can keep the flame of liberty burning bright for our children.&rdquo;
          </p>
        </div>

        <div className="pt-4 flex flex-col items-start">
          <span className="font-serif italic text-xl text-editorial-gold tracking-wider">
            Toni ME Taylor
          </span>
          <span className="text-[10px] font-sans text-zinc-400 tracking-widest uppercase mt-1">
            Author & Witness of Faith
          </span>
        </div>
      </div>
    </div>
  );
}
