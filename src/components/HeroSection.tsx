import { useState } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

const categories = [
  { icon: '📺', name: 'Smart Displays', subtitle: 'TV · IFPD · Digital Signage', tag: 'Core Business' },
  { icon: '🤖', name: 'AI Robotics', subtitle: 'Industrial · Medical · Cleaning', tag: 'Future Tech' },
  { icon: '🔊', name: 'Smart Audio', subtitle: 'Consumer & Commercial Systems', tag: 'Consumer' },
  { icon: '⚡', name: 'Next Gen Electronics Systems', subtitle: 'EV · Charging Infra · Battery', tag: 'Upcoming' },
];

const certs = ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 50001', 'BIS', 'BEE'];

export default function HeroSection() {
  const revenue = useCountUp(66.73, 1800, '₹', 'Cr');
  const growth = useCountUp(41.7, 1800, '', '×');
  const footprint = useCountUp(365, 1800, '', 'K');
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section className="bg-card pt-[65px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT COLUMN — White */}
        <div className="container mx-auto px-4 flex flex-col justify-between py-8 overflow-y-auto">
          <div>
            {/* Eyebrow */}
            {/* <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              <span className="eyebrow text-blue-deep text-[11px]">🇮🇳 India's Next-Gen EMS Partner</span>
            </div> */}

            {/* Headline */}
            <h1 className="font-chivo font-black text-[36px] md:text-[48px] lg:text-[52px] leading-[1.1] tracking-[-1.5px] text-blue-deep mb-6">
              Driving the Next Wave of 
              <span className="block font-light italic text-blue-mid mt-1">
                Innovation.
              </span>
            </h1>

            {/* Body */}
            <p className="font-chivo font-light text-[15px] leading-[1.75] text-grey-400 max-w-md mb-8">
              With a focus on progress and adaptability, WEMS empowers partners through insight-led decisions, scalable solutions, and a commitment to excellence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#about"
                className="bg-accent text-blue-deep font-chivo font-bold text-sm px-6 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_4px_24px_hsl(var(--yellow)/0.4)] transition-all"
              >
                Explore Capabilities
              </a>
              <a
                href="/products"
                className="border border-grey-200 text-blue-deep font-chivo font-bold text-sm px-6 py-3 rounded-lg hover:border-blue-mid hover:text-blue-mid transition-all"
              >
                View Product Portfolio
              </a>
            </div>
          </div>

          {/* Product categories */}
          <div className="border-t border-grey-200 pt-6 space-y-1">
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className="flex items-center gap-4 py-3 px-2 rounded-lg cursor-pointer transition-all duration-300 group"
                // style={{ transform: hoveredRow === i ? 'translateX(3px)' : 'translateX(0)' }}
                // onMouseEnter={() => setHoveredRow(i)}
                // onMouseLeave={() => setHoveredRow(null)}
              >
                <div className="w-9 h-9 rounded-lg bg-blue-pale flex items-center justify-center text-base flex-shrink-0">
                  {cat.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-chivo font-bold text-sm text-blue-deep block">{cat.name}</span>
                  <span className="font-chivo font-light text-xs text-grey-400">{cat.subtitle}</span>
                </div>
                <span className="font-chivo font-bold text-[10px] px-3 py-1 rounded-full bg-blue-tint text-blue-mid flex-shrink-0">
                  {cat.tag}
                </span>
                <span
                  className="text-accent font-bold text-sm transition-all duration-300 flex-shrink-0"
                  style={{
                    opacity: hoveredRow === i ? 1 : 0,
                    transform: hoveredRow === i ? 'translateX(0)' : 'translateX(-8px)',
                  }}
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — Dark mosaic */}
        <div className="relative bg-blue-deep hidden lg:block">
          {/* 2×2 mosaic */}
          <div className="h-full grid grid-rows-[60%_40%] grid-cols-2 gap-[3px] p-[3px]">
            {/* Top — spans both cols */}
            <div className="col-span-2 overflow-hidden group">
              <img
                src={'./Home_Page_Images/manufacture.png'}
                alt="World EMS manufacturing facility"
                className="w-full h-full object-cover brightness-[0.82] group-hover:brightness-100 group-hover:scale-[1.07] transition-all duration-[600ms]"
                loading="eager"
              />
            </div>
            {/* Bottom-left */}
            <div className="overflow-hidden group">
              <img
                src={'./Product_page/AI_Robotics/odigorobot.png'}
                alt="Industrial robot arm"
                className="w-full h-full object-cover brightness-[0.82] group-hover:brightness-100 group-hover:scale-[1.07] transition-all duration-[600ms]"
                loading="eager"
              />
            </div>
            {/* Bottom-right */}
            <div className="overflow-hidden group">
              <img
                src={'./Home_Page_Images/tv.png'}
                alt="Smart TV display product"
                className="w-full h-full object-cover brightness-[0.82] group-hover:brightness-100 group-hover:scale-[1.07] transition-all duration-[600ms]"
                loading="eager"
              />
            </div>
          </div>

          {/* Floating stat pills — bottom-left */}
          {/* <div className="absolute bottom-7 left-7 flex gap-1.5 z-20">
            <div ref={revenue.ref} className="bg-accent rounded-xl px-4 py-3 min-w-[140px]">
              <span className="font-chivo font-black text-[22px] md:text-[26px] text-blue-deep block leading-tight">
                {revenue.display}
              </span>
              <span className="font-chivo font-light text-[11px] text-blue-deep/60">Revenue FY 2024–25</span>
            </div>
            <div ref={growth.ref} className="bg-[rgba(13,31,58,0.82)] backdrop-blur-[12px] border border-white/10 rounded-xl px-4 py-3 min-w-[120px]">
              <span className="font-chivo font-black text-[22px] md:text-[26px] text-white block leading-tight">
                {growth.display}
              </span>
              <span className="font-chivo font-light text-[11px] text-white/60">Revenue growth YoY</span>
            </div>
            <div ref={footprint.ref} className="bg-[rgba(13,31,58,0.82)] backdrop-blur-[12px] border border-white/10 rounded-xl px-4 py-3 min-w-[120px]">
              <span className="font-chivo font-black text-[22px] md:text-[26px] text-white block leading-tight">
                {footprint.display}
              </span>
              <span className="font-chivo font-light text-[11px] text-white/60">Sq. ft. footprint</span>
            </div>
          </div> */}

          {/* <div className="absolute bottom-7 right-7 flex flex-wrap gap-1.5 justify-end max-w-[240px] z-20">
            {certs.map((c) => (
              <span
                key={c}
                className="font-chivo font-bold text-[10px] text-white px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-[8px]"
              >
                {c}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
