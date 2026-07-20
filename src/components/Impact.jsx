import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';

const STATS = [
  { number: '$6', unit: '', label: 'Market value of one donated box of greens' },
  { number: '18', unit: '/mo', label: 'Boxes covering all fixed operating costs — everything beyond that scales our impact' },
  { number: '50+', unit: '/mo', label: 'Our 90-day scaling target' },
];

export default function Impact() {
  return (
    <section id="impact" className="py-[88px] px-6 bg-cream-soft">
      <FadeIn className="max-w-[1140px] mx-auto">
        <SectionHeading>Every Box Grown Is a Box Donated</SectionHeading>

        <p className="max-w-[760px] text-copy mb-10 text-[1.05rem]">
          During our nonprofit launch phase, every harvest is dedicated to fighting food insecurity in Sarasota. Fresh boxes of nutrient-rich mixed greens are routed directly to local food banks and pantries, including{' '}
          <strong>All Faiths Food Bank, Church of the Palms Food Pantry, and Margie's Market by All Faiths Food Bank</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-7">
          {STATS.map(s => (
            <div key={s.label} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(30,91,46,0.08)] p-[30px] text-center">
              <span className="block font-heading font-extrabold text-[clamp(2.2rem,5vw,2.8rem)] text-orange">
                {s.number}
                {s.unit && <span className="text-base font-semibold text-green">{s.unit}</span>}
              </span>
              <span className="block mt-2.5 text-[0.92rem] text-copy">{s.label}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-[#5a6754] italic">
          Sunshine State Greens is pursuing 501(c)(3) status, ensuring 100% of contributions are reinvested into the local ecosystem.
        </p>
      </FadeIn>
    </section>
  );
}
