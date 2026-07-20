import { useState } from 'react';

// Drop /public/images/logo.png in and this fallback badge is replaced
// automatically — no code change needed.
export default function Logo() {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <span className="relative flex items-center">
      {!loaded && (
        <span className="flex items-center gap-2.5">
          <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#1E5B2E" />
            <path d="M20 32c0-6 0-11 0-16" stroke="#FAF8EC" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M20 22c-5 1-10-2-10-9 6 0 10 4 10 9z" fill="#E8912D" />
            <path d="M20 19c5 1 10-2 10-9-6 0-10 4-10 9z" fill="#F0A500" />
          </svg>
          <span className="font-heading font-bold text-green text-[1.05rem] tracking-tight">
            Sunshine State Greens
          </span>
        </span>
      )}
      {/* Rendered with opacity (never display:none) so the load event fires
          reliably in Safari, which won't fire onLoad for display:none images. */}
      {!errored && (
        <img
          src="images/logo.jpg"
          alt="Sunshine State Greens — Sustainable Farming Systems"
          className={loaded ? 'max-h-10 rounded-full' : 'absolute inset-0 opacity-0 pointer-events-none max-h-10'}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      )}
    </span>
  );
}
