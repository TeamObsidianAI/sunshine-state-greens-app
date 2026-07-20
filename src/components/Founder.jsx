import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import FounderPhoto from './FounderPhoto';

export default function Founder() {
  return (
    <section id="founder" className="py-[88px] px-6">
      <FadeIn className="max-w-[1140px] mx-auto">
        <SectionHeading>Meet the Founder</SectionHeading>

        <div className="grid md:grid-cols-[220px_1fr] gap-11 items-start text-center md:text-left">
          <FounderPhoto />

          <div className="text-copy space-y-[18px]">
            <p>
              <strong className="text-ink">Lucian Muzie</strong> is a Riverview IB student, hydroponic specialist, and farmers' market veteran. After managing sales for Myakka soil-grown produce and building soilless growing systems by hand, he founded Sunshine State Greens to bridge the gap between ag-tech innovation and community distribution.
            </p>
            <p className="italic text-green font-medium border-l-2 border-orange pl-4">
              "Making this my project isn't just about school — it's about building a humanitarian engine that makes our community healthy, happy, and safe."
            </p>
            <p className="text-sm text-[#5a6754]">
              Proudly connected with the Boys &amp; Girls Club and Riverview IB networks.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
