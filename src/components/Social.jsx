import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { CONFIG } from '../config';
import { mailto } from '../lib/mailto';

export default function Social() {
  return (
    <section id="social" className="py-[88px] px-6">
      <FadeIn className="max-w-[1140px] mx-auto text-center">
        <SectionHeading center>Follow the Mission</SectionHeading>

        <p className="max-w-[560px] mx-auto mb-9 text-copy">
          Watch our vertical farming systems come to life. We share build videos, harvest cycles, and behind-the-scenes looks at how urban ag-tech gets grown.
        </p>

        <div className="flex justify-center gap-10 flex-wrap">
          <a
            href={CONFIG.TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sunshine State Greens on TikTok"
            className="flex flex-col items-center gap-2.5 text-green font-semibold text-sm hover:text-orange hover:-translate-y-0.5 transition-all"
          >
            <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
              <path
                fill="currentColor"
                d="M33.5 6h-6.2v25.4c0 3.2-2.6 5.9-5.9 5.9-3.2 0-5.9-2.6-5.9-5.9 0-3.2 2.6-5.9 5.9-5.9.6 0 1.2.1 1.8.3v-6.4a12.2 12.2 0 0 0-1.8-.1C13.9 19.3 9 24.2 9 30.1s4.9 10.8 10.8 10.8 10.8-4.9 10.8-10.8V17.8a15 15 0 0 0 8.7 2.8v-6.2a8.8 8.8 0 0 1-5.8-8.4z"
              />
            </svg>
            <span>TikTok</span>
          </a>
          <a
            href={CONFIG.INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sunshine State Greens on Instagram"
            className="flex flex-col items-center gap-2.5 text-green font-semibold text-sm hover:text-orange hover:-translate-y-0.5 transition-all"
          >
            <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
              <rect x="6" y="6" width="36" height="36" rx="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="24" cy="24" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="33.5" cy="14.5" r="2.2" fill="currentColor" />
            </svg>
            <span>Instagram</span>
          </a>
          <a
            href={mailto('Hello — Sunshine State Greens')}
            aria-label="Email Sunshine State Greens"
            className="flex flex-col items-center gap-2.5 text-green font-semibold text-sm hover:text-orange hover:-translate-y-0.5 transition-all"
          >
            <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
              <rect x="6" y="10" width="36" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path d="M8 12l16 14 16-14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
