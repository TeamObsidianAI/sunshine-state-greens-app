import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 py-16 md:py-24">
      <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <FadeIn className="text-center md:text-left">
          <h1 className="font-heading font-extrabold text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.15] mb-[22px] text-green">
            From Harvest to Kitchen in 24 Hours.
          </h1>
          <p className="text-copy text-lg max-w-[520px] mx-auto md:mx-0 mb-9">
            Sunshine State Greens is a Sarasota-grown nonprofit using vertical hydroponic technology to deliver ultra-fresh, pesticide-free greens — and route them directly to the neighbors who need them most.
          </p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="#donate"
              className="font-heading font-semibold px-7 py-3.5 rounded-[10px] bg-orange text-white shadow-[0_4px_14px_rgba(232,145,45,0.35)] hover:bg-orange-bright hover:-translate-y-0.5 transition-all"
            >
              Sponsor a Box
            </a>
            <a
              href="#solution"
              className="font-heading font-semibold px-7 py-3.5 rounded-[10px] border-2 border-green text-green hover:bg-green/8 hover:-translate-y-0.5 transition-all"
            >
              See How It Works
            </a>
          </div>
        </FadeIn>

        <FadeIn className="relative">
          <div className="absolute -inset-6 -z-10" aria-hidden="true">
            <svg viewBox="0 0 200 200" width="100%" height="100%">
              <circle cx="100" cy="100" r="90" fill="#F0A500" opacity="0.12" />
            </svg>
          </div>
          <img
            src="images/hero-prototype.png"
            alt="The Sunshine State Greens hydroponic prototype growing basil and peppers under LED grow lights"
            className="w-full aspect-[4/3] object-cover rounded-3xl shadow-[0_4px_20px_rgba(30,91,46,0.08)]"
            loading="eager"
          />
        </FadeIn>
      </div>
    </section>
  );
}
