import { CONFIG } from '../config';

const LINKS = [
  { href: '#mission', label: 'Mission' },
  { href: '#problem', label: 'The Problem' },
  { href: '#solution', label: 'Our Solution' },
  { href: '#impact', label: 'Impact' },
  { href: '#founder', label: 'Meet the Founder' },
  { href: '#donate', label: 'Donate' },
];

export default function Footer() {
  return (
    <footer className="bg-green text-cream pt-12 pb-5 px-6">
      <div className="max-w-[1140px] mx-auto flex flex-wrap gap-8 justify-between items-start mb-6">
        <div className="flex gap-3 items-center">
          <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#FAF8EC" />
            <path d="M20 32c0-6 0-11 0-16" stroke="#1E5B2E" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M20 22c-5 1-10-2-10-9 6 0 10 4 10 9z" fill="#E8912D" />
            <path d="M20 19c5 1 10-2 10-9-6 0-10 4-10 9z" fill="#F0A500" />
          </svg>
          <div>
            <p className="m-0 font-semibold">Sunshine State Greens — Sustainable Farming Systems</p>
            <p className="mt-1 mb-0 text-sm opacity-80">Sarasota, FL</p>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-[18px] text-sm">
          {LINKS.map(link => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-[18px] text-sm font-semibold">
          <a href={CONFIG.TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
            TikTok
          </a>
          <a href={CONFIG.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>

      <p className="max-w-[1140px] mx-auto text-center text-[0.82rem] opacity-75 m-0 pt-4 border-t border-cream/15">
        © 2026 Sunshine State Greens. A 501(c)(3) nonprofit initiative (status pending).
      </p>
    </footer>
  );
}
