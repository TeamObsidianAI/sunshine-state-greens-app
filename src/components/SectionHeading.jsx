export default function SectionHeading({ children, center = false, className = '' }) {
  const base = 'font-heading font-bold text-[clamp(1.6rem,3vw,2.1rem)] leading-tight text-green';
  const layout = center
    ? 'border-t-[6px] border-green pt-4 text-center'
    : 'border-l-[6px] border-green pl-[18px]';

  return <h2 className={`${base} ${layout} mb-10 ${className}`}>{children}</h2>;
}
