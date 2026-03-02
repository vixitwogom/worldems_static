import { useScrollReveal } from '@/hooks/useScrollReveal';
import certQuality from '@/assets/cert-quality.jpg';
import certSolar from '@/assets/cert-solar.jpg';
import certSafety from '@/assets/cert-safety.jpg';
import certEnergy from '@/assets/cert-energy.jpg';

const certs = [
  {
    image: certQuality,
    code: 'ISO 9001',
    name: 'Quality Management',
    desc: 'Rigorous quality management systems ensuring consistent product excellence across all manufacturing lines.',
  },
  {
    image: certSolar,
    code: 'ISO 14001',
    name: 'Environmental Management',
    desc: '100% captive solar power at Ahmedabad. Sustainable operations minimizing environmental impact.',
  },
  {
    image: certSafety,
    code: 'ISO 45001',
    name: 'Occupational Health & Safety',
    desc: 'Comprehensive workplace safety protocols protecting our 350+ professionals across all facilities.',
  },
  {
    image: certEnergy,
    code: 'ISO 50001',
    name: 'Energy Management',
    desc: 'Optimized energy usage across manufacturing operations with smart monitoring and renewable sources.',
  },
];

export default function CertificationsSection() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" className="bg-grey-100 py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <span className="reveal eyebrow text-blue-mid mb-3 block">Accreditations</span>
        <h2 className="reveal font-chivo font-black text-3xl md:text-5xl text-blue-deep tracking-tight mb-12">
          Compliance Without Compromise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c) => (
            <div
              key={c.code}
              className="reveal bg-card rounded-xl border border-grey-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="font-chivo font-bold text-xs text-blue-mid">{c.code}</span>
                <h4 className="font-chivo font-bold text-base text-blue-deep mt-1">{c.name}</h4>
                <p className="font-chivo font-light text-sm text-grey-400 leading-relaxed mt-2">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
