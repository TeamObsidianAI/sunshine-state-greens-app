import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';

export default function Solution() {
  return (
    <section id="solution" className="py-[88px] px-6">
      <FadeIn className="max-w-[1140px] mx-auto">
        <SectionHeading>The SSG Solution: Controlled Environment Agriculture (CEA)</SectionHeading>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(30,91,46,0.08)] p-[30px]">
            <h3 className="font-heading text-[1.1rem] text-green mb-3">Vertical Architecture</h3>
            <p className="text-copy text-[0.97rem] m-0">
              Automated, soilless vertical farming maximizes space efficiency in dense urban centers. A small footprint delivers high-density yields year-round, unaffected by Florida's seasonal heat.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(30,91,46,0.08)] p-[30px]">
            <h3 className="font-heading text-[1.1rem] text-green mb-3">Sustainability First</h3>
            <p className="text-copy text-[0.97rem] m-0">
              Our systems reduce water consumption by up to 90% compared to traditional soil farming. Every crop is 100% pesticide-free and grown for the local 5–10 mile radius.
            </p>
          </div>

          <div className="md:col-span-2 bg-white rounded-2xl shadow-[0_4px_20px_rgba(30,91,46,0.08)] p-[30px] flex flex-wrap items-center gap-7">
            <div className="flex-1 min-w-[240px]">
              <h3 className="font-heading text-[1.1rem] text-green mb-3">3D-Printed Customization</h3>
              <p className="text-copy text-[0.97rem] m-0">
                Open-source 3D printing lets us fabricate custom hydroponic components entirely in-house — cutting infrastructure costs and adapting to any urban space.
              </p>
            </div>
            <img
              src="images/build-3d-print.png"
              alt="A 3D-printed hydroponic fitting used in the SSG system"
              loading="lazy"
              className="w-44 h-44 object-contain rounded-xl mx-auto shrink-0"
            />
          </div>

          <div className="md:col-span-2 bg-white rounded-2xl shadow-[0_4px_20px_rgba(30,91,46,0.08)] p-[30px]">
            <h3 className="font-heading text-[1.1rem] text-green mb-3">Hyper-Local Velocity</h3>
            <p className="text-copy text-[0.97rem] m-0">
              We cut out the middleman. Crops are harvested, packaged, and delivered within hours — preserving peak freshness, shelf life, and nutrition.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
