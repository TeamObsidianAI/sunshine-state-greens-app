import { useState } from 'react';
import Logo from './Logo';

const LINKS = [
  { href: '#mission', label: 'Mission' },
  { href: '#problem', label: 'The Problem' },
  { href: '#solution', label: 'Our Solution' },
  { href: '#impact', label: 'Impact' },
  { href: '#founder', label: 'Meet the Founder' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-cream/92 backdrop-blur-sm border-b border-green/10">
      <div className="max-w-[1140px] mx-auto px-6 py-3.5 flex items-center justify-between">
        <a href="#top" aria-label="Sunshine State Greens home">
          <Logo />
        </a>

        <nav
          aria-label="Primary"
          className={`
            flex items-center gap-7
            max-md:absolute max-md:top-full max-md:left-0 max-md:right-0
            max-md:flex-col max-md:items-start max-md:gap-0 max-md:bg-cream-soft
            max-md:border-b max-md:border-green/10 max-md:px-6 max-md:pb-5 max-md:pt-2
            max-md:transition-all max-md:duration-200
            ${open ? 'max-md:opacity-100 max-md:translate-y-0 max-md:pointer-events-auto' : 'max-md:opacity-0 max-md:-translate-y-2 max-md:pointer-events-none'}
          `}
        >
          {LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="relative font-medium text-[0.95rem] py-2.5 max-md:w-full hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange after:transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setOpen(false)}
            className="font-heading font-semibold text-sm bg-orange text-white rounded-full px-[22px] py-2.5 shadow-[0_4px_14px_rgba(232,145,45,0.35)] hover:bg-orange-bright transition-colors max-md:mt-2.5"
          >
            Donate
          </a>
        </nav>

        <button
          className="hidden max-md:flex flex-col justify-between w-[26px] h-[18px] bg-transparent border-none cursor-pointer p-0"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen(o => !o)}
        >
          <span className={`block h-0.5 w-full bg-green rounded-full transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-0.5 w-full bg-green rounded-full transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-full bg-green rounded-full transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>
    </header>
  );
}
