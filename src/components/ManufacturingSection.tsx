import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

const facilities = [
  {
    image: './WEMS_Site_Images/Factory_Images/wems.png',
    tag: 'Smart Display Hub',
    area: '45K sq. ft.',
    city: 'Ahmedabad',
    desc: 'Climate-controlled, 15K TV units/month peak capacity',
  },
  {
    image: './WEMS_Site_Images/Factory_Images/factory_noida.png',
    tag: 'Smart Audio Centre',
    area: '120K sq. ft.',
    city: 'Greater Noida',
    desc: 'ESD-protected environment for precision manufacturing',
  },
  {
    image: './WEMS_Site_Images/Factory_Images/expansion.png',
    tag: 'Under Construction',
    area: '200K sq. ft.',
    city: 'Expansion Site',
    desc: 'Robotics & new business hub — coming soon',
    isExpanding: true,
  },
];

function StatItem({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const counter = useCountUp(end, 1800, '', suffix);
  return (
    <div ref={counter.ref} className="text-center">
      <span className="font-chivo font-black text-3xl md:text-4xl text-accent">{counter.display}</span>
      <p className="font-chivo font-light text-xs text-primary-foreground/45 mt-2">{label}</p>
    </div>
  );
}

export default function ManufacturingSection() {
  const ref = useScrollReveal();

  return (
    <section id="infrastructure" className="bg-blue-deep" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <span className="reveal eyebrow text-accent mb-3 block">Our Facilities</span>
        <h2 className="reveal font-chivo font-black text-3xl md:text-5xl text-primary-foreground tracking-tight mb-12">
          Manufacturing at India's finest scale.
        </h2>

        {/* Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {facilities.map((f) => (
            <div
              key={f.city}
              className="reveal relative overflow-hidden rounded-xl group aspect-[3/4]"
            >
              <img
                src={f.image}
                alt={`${f.city} facility`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--blue-deep)/0.9)] via-transparent to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <span
                  className={`font-chivo font-bold text-[10px] uppercase tracking-[2px] px-3 py-1 rounded-full w-fit mb-3 ${f.isExpanding
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-primary-foreground/10 text-primary-foreground/60'
                    }`}
                >
                  {f.tag}
                </span>
                <span className="font-chivo font-black text-2xl text-accent">{f.area}</span>
                <h3 className="font-chivo font-black text-lg text-primary-foreground mt-1">{f.city}</h3>
                <p className="font-chivo font-light text-xs text-primary-foreground/45 mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-primary-foreground/10 pt-10">
          <StatItem end={15} suffix="K" label="TV units per month peak capacity" />
          <StatItem end={350} suffix="+" label="Professionals across all locations" />
          <StatItem end={100} suffix="%" label="Solar power generation at Ahmedabad" />
          <StatItem end={66} suffix="Cr" label="Revenue in FY25 — 41.7× growth YoY" />
        </div> */}
      </div>
    </section>
  );
}
