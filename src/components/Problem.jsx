import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';

export default function Problem() {
  return (
    <section id="problem" className="py-[88px] px-6 bg-cream-soft">
      <FadeIn className="max-w-[1140px] mx-auto">
        <SectionHeading>The Urban Food Crisis</SectionHeading>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <div className="flex flex-col gap-8">
            <div>
              <span className="block font-heading font-extrabold text-[clamp(3.2rem,8vw,5rem)] leading-none text-green">
                80%
              </span>
              <span className="block font-semibold mt-2 max-w-[320px]">Agricultural Water Waste</span>
            </div>
            <div>
              <span className="block font-heading font-extrabold text-[clamp(2.4rem,6vw,3.4rem)] leading-none text-orange">
                30%
              </span>
              <span className="block font-semibold mt-2 max-w-[320px]">
                Kitchen spoilage rate reported by local restaurants relying on long-haul produce
              </span>
            </div>
          </div>

          <div className="text-copy space-y-5">
            <p>
              Traditional agriculture relies on a slow, drawn-out supply chain. Delicate greens spend days or weeks in refrigerated shipping containers, degrading in quality and nutritional value before they ever reach the plate.
            </p>
            <p>
              Meanwhile, urban food deserts lack consistent access to ultra-fresh, pesticide-free greens — forcing families to rely on weeks-old produce, and leaving Sarasota food pantries with a persistent shortage of fresh, nutrient-dense crops.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
