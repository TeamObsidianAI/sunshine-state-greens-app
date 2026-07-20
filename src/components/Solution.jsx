import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';

const FEATURES = [
  {
    title: 'Vertical Architecture',
    body: "Automated, soilless vertical farming maximizes space efficiency in dense urban centers. A small footprint delivers high-density yields year-round, unaffected by Florida's seasonal heat.",
  },
  {
    title: 'Sustainability First',
    body: 'Our systems reduce water consumption by up to 90% compared to traditional soil farming. Every crop is 100% pesticide-free and grown for the local 5–10 mile radius.',
  },
  {
    title: '3D-Printed Customization',
    body: 'Open-source 3D printing lets us fabricate custom hydroponic components entirely in-house — cutting infrastructure costs and adapting to any urban space.',
    image: {
      src: 'images/build-3d-print.png',
      alt: 'A 3D-printed hydroponic fitting alongside the nutrient solutions used in the SSG system',
    },
  },
  {
    title: 'Hyper-Local Velocity',
    body: 'We cut out the middleman. Crops are harvested, packaged, and delivered within hours — preserving peak freshness, shelf life, and nutrition.',
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-[88px] px-6">
      <FadeIn className="max-w-[1140px] mx-auto">
        <SectionHeading>The SSG Solution: Controlled Environment Agriculture (CEA)</SectionHeading>

        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(30,91,46,0.08)] p-[30px]">
              {f.image && (
                <img
                  src={f.image.src}
                  alt={f.image.alt}
                  loading="lazy"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
              )}
              <h3 className="font-heading text-[1.1rem] text-green mb-3">{f.title}</h3>
              <p className="text-copy text-[0.97rem] m-0">{f.body}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
