import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { CONFIG, DONATION_TIERS } from '../config';
import { donateHref, mailto } from '../lib/mailto';

export default function Donate() {
  const externalProps = CONFIG.DONATION_URL
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <section id="donate" className="py-[88px] px-6">
      <FadeIn className="max-w-[1140px] mx-auto">
        <div className="max-w-[780px] mx-auto text-center rounded-3xl border border-orange/25 bg-gradient-to-b from-orange/8 to-orange/3 px-10 py-14 max-[480px]:px-[22px] max-[480px]:py-10">
          <SectionHeading center>Sponsor a Box. Feed a Neighbor.</SectionHeading>

          <p className="max-w-[560px] mx-auto mb-8 text-copy">
            Your donation directly subsidizes fresh harvest boxes routed to Sarasota food banks and pantries. Just $6 puts a complete box of nutrient-rich greens into the hands of a family in need — and every dollar stays in the local ecosystem.
          </p>

          <div className="flex flex-wrap justify-center gap-3.5 mb-7">
            {DONATION_TIERS.map(tier => (
              <a
                key={tier.label}
                href={donateHref(tier.label)}
                {...externalProps}
                className="font-heading font-semibold px-7 py-3.5 rounded-[10px] bg-orange text-white shadow-[0_4px_14px_rgba(232,145,45,0.35)] hover:bg-orange-bright hover:-translate-y-0.5 transition-all"
              >
                {tier.label}
              </a>
            ))}
            <a
              href={donateHref('Custom amount')}
              {...externalProps}
              className="font-heading font-semibold px-7 py-3.5 rounded-[10px] border-2 border-green text-green hover:bg-green/8 hover:-translate-y-0.5 transition-all"
            >
              Custom Amount
            </a>
          </div>

          <p className="text-copy text-[0.95rem]">
            Are you a food bank, pantry, or restaurant interested in partnering?{' '}
            <a
              href={mailto('Partnership Inquiry — Sunshine State Greens')}
              className="text-green font-bold hover:underline"
            >
              Reach out directly →
            </a>
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
