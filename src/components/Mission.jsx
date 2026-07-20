import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';

const CHIPS = [
  '90% less water than soil farming',
  '100% pesticide-free',
  '21–28 day harvest cycles',
];

export default function Mission() {
  return (
    <section id="mission" className="py-[88px] px-6">
      <FadeIn className="max-w-[1140px] mx-auto">
        <SectionHeading>Our Mission</SectionHeading>

        <blockquote className="text-xl italic text-ink max-w-[780px] leading-[1.7] mb-9 border-none p-0">
          Sunshine State Greens exists to build a scalable, zero-waste humanitarian ag-tech engine — one that guarantees local food security, elevates community wellness, and works to eradicate nutritional disparities by bridging scientific agricultural innovation with compassionate urban distribution.
        </blockquote>

        <div className="flex flex-wrap gap-3.5">
          {CHIPS.map(chip => (
            <span
              key={chip}
              className="bg-white border border-green/15 text-green font-semibold text-sm px-[18px] py-2.5 rounded-full shadow-[0_4px_20px_rgba(30,91,46,0.08)]"
            >
              {chip}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
