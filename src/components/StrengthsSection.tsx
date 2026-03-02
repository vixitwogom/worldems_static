import { useScrollReveal } from '@/hooks/useScrollReveal';

const strengths = [
  {
    num: '01',
    title: 'Scalable Manufacturing Platform',
    body: 'Our manufacturing platform integrates disciplined workflows, scalable capacity, and embedded quality checkpoints to deliver consistent output.',
  },
  {
    num: '02',
    title: 'Design Led Model',
    body: 'From concept validation to full- scale manufacturing, we support OEM, ODM, and JDM partnerships with global technology collaborators.',
  },
  {
    num: '03',
    title: 'Complete lifecycle execution',
    body: 'Concept → Design → Engineering → Production → Testing → Packaging → Reverse Logistics + Repair/ Refurbishment → After Sales Support',
  },
  {
    num: '04',
    title: 'Order-Backed Operating Model',
    body: 'Production on confirmed POs only. Advance payment model focused on profitable, sustainable volume growth.',
  },
  {
    num: '05',
    title: 'Multi-Vertical Capability',
    body: 'A diversified manufacturing platform supporting multiple technology verticals; enabling scalable expansion, engineering depth, and operational efficiency under one ecosystem.',
  },
  {
    num: '06',
    title: 'Strong Execution Engine',
    body: 'Built on structured systems and strong team accountability, our execution engine delivers steady, reliable performance, even under scale.',
  },
];

export default function StrengthsSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="bg-grey-100 py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <span className="reveal eyebrow text-blue-mid mb-3 block">Why World EMS</span>
        <h2 className="reveal font-chivo font-black text-3xl md:text-5xl text-blue-deep tracking-tight mb-12">
          Six reasons brands choose us to build.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strengths.map((s) => (
            <div
              key={s.num}
              className="reveal strength-card bg-card rounded-xl border border-grey-200 p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-accent-foreground font-chivo font-black text-sm mb-5">
                {s.num}
              </span>
              <h3 className="font-chivo font-bold text-lg text-blue-deep mb-3">{s.title}</h3>
              <p className="font-chivo font-light text-sm text-grey-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
