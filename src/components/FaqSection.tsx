import { HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const FAQS: FaqItem[] = [
  {
    question: "Is this website secure for ordering?",
    answer: "Absolutely. All direct orders are processed securely through PayPal. We never see, store, or have access to your credit card details or financial information."
  },
  {
    question: "How long does direct shipping take?",
    answer: "Direct orders are packed and shipped by Toni’s family from their personal supply. It typically takes about 10 days to reach your door. If you prefer express 2-day delivery, you can choose the Amazon Prime option."
  },
  {
    question: "Can I buy the book on Amazon?",
    answer: "Yes! Both the Hardcover and Paperback editions are fully available on Amazon. We have provided a direct checkout link on this page so you can order using your existing Amazon account."
  },
  {
    question: "Is there a Kindle or digital e-book version?",
    answer: "Yes, the digital e-book edition is available on Amazon. You can read it instantly on any Kindle device or the free Kindle app on your phone, tablet, or computer."
  }
];

export default function FaqSection() {
  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <HelpCircle className="w-8 h-8 text-editorial-gold mx-auto mb-3" />
        <h2 className="text-3xl sm:text-4xl font-serif text-editorial-ink">Frequently Asked Questions</h2>
        <p className="text-sm text-zinc-600 font-sans mt-2 max-w-md mx-auto leading-relaxed">
          Everything you need to know about ordering Toni's book directly or via Amazon.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-white border border-editorial-stone hover:border-editorial-gold/30 shadow-sm hover:shadow transition duration-300 flex flex-col gap-3"
          >
            <h4 className="font-serif text-[17px] text-[#1A1A1A] font-bold leading-snug">
              {faq.question}
            </h4>
            <p className="font-sans text-[14px] leading-relaxed text-zinc-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
