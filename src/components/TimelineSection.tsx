import { useScrollReveal } from '@/hooks/useScrollReveal';

const milestones = [
  { year: 'Commencement', title: 'Initiated operations at World EMS Techpark', desc: '' },
  { year: 'LED TVs', title: 'ODM of LED TVs', desc: 'Own design manufacturing begins with LED TV production' },
  { year: 'Robotics', title: 'JDM with Kody', desc: 'Joint Design Manufacturing partnership in robotics' },
  { year: 'Expansion', title: 'Signed BTA with METEC', desc: 'Digital Signage & IFPD categories added to portfolio' },
  { year: 'Partnerships', title: 'Hyundai + Schneider Consumer', desc: '15+ regional brands onboarded, strategic partnerships' },
  { year: 'Today', title: 'Medical Robotics added', desc: 'Expanding to 365K sq. ft. manufacturing footprint' },
];

export default function TimelineSection() {
  const ref = useScrollReveal();

  return (
    <section id="timeline" className="bg-card py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <span className="reveal eyebrow text-blue-mid mb-3 block">Our Journey</span>
        <h2 className="reveal font-chivo font-black text-3xl md:text-5xl text-blue-deep tracking-tight mb-16">
          The Journey from Product to Platform
        </h2>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-grey-200" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {milestones.map((m, i) => (
              <div key={i} className="reveal relative group">
                {/* Dot */}
                <div className="hidden md:flex items-center justify-center w-3 h-3 rounded-full border-2 border-blue-mid bg-card mx-auto mb-4 transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:scale-[1.4]" />
                {/* Mobile line */}
                <div className="md:hidden w-px h-6 bg-grey-200 mx-auto" />

                <span className="block text-center font-chivo font-bold text-sm text-accent mb-2">{m.year}</span>
                <h4 className="text-center font-chivo font-bold text-sm text-blue-deep mb-1">{m.title}</h4>
                <p className="text-center font-chivo font-light text-xs text-grey-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
