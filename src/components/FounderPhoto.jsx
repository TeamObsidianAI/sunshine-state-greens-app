import { useState } from 'react';

// Drop /public/images/founder.jpg in and this fallback silhouette is
// replaced automatically — no code change needed.
export default function FounderPhoto() {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className="w-[220px] h-[220px] rounded-full overflow-hidden bg-cream-soft border-4 border-white shadow-[0_4px_20px_rgba(30,91,46,0.08)] mx-auto md:mx-0 shrink-0">
      {!loaded && (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#f2f0dd] to-cream-soft">
          <svg viewBox="0 0 100 100" width="64" height="64" aria-hidden="true">
            <circle cx="50" cy="35" r="18" fill="#2D6A35" />
            <path d="M15 90c0-22 16-35 35-35s35 13 35 35" fill="#1E5B2E" />
          </svg>
        </div>
      )}
      {!errored && (
        <img
          src="images/founder.jpg"
          alt="Lucian Muzie, founder of Sunshine State Greens"
          loading="lazy"
          className={`w-full h-full object-cover ${loaded ? '' : 'hidden'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}
