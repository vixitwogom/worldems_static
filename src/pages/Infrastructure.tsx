import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

// Images
import infraCleanroom from '@/assets/infra-cleanroom.jpg';
import infraPcbAssembly from '@/assets/infra-pcb-assembly.jpg';
import infraProductionLine from '@/assets/infra-production-line.jpg';
import infraSolarPanels from '@/assets/infra-solar-panels.jpg';
import infraGreenGarden from '@/assets/infra-green-garden.jpg';
import infraFactoryExterior from '@/assets/infra-factory-exterior.jpg';
import infraSafetyWorkers from '@/assets/infra-safety-workers.jpg';
import infraEnergyMeters from '@/assets/infra-energy-meters.jpg';
import infraQualityControl from '@/assets/infra-quality-control.jpg';
import infraAhmedabadSkyline from '@/assets/infra-ahmedabad-skyline.jpg';
import infraNoidaSkyline from '@/assets/infra-noida-skyline.jpg';
import infraExpansion from '@/assets/infra-expansion.jpg';
import infraShenzhenSkyline from '@/assets/infra-shenzhen-skyline.jpg';
import infraProductionTeam from '@/assets/infra-production-team.jpg';
import infraEngineeringTeam from '@/assets/infra-engineering-team.jpg';
import certQuality from '@/assets/cert-quality.jpg';
import certSolar from '@/assets/cert-solar.jpg';
import certSafety from '@/assets/cert-safety.jpg';
import certEnergy from '@/assets/cert-energy.jpg';

// ─── Scroll reveal hook ───
function useReveal(threshold = 0.08) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}

// ─── Staggered children reveal ───
function RevealGroup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const { ref, visible } = useReveal();
    return (
        <div ref={ref} className={className}>
            {Array.isArray(children)
                ? children.map((child, i) => (
                    <div
                        key={i}
                        className="transition-all duration-700 ease-out"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(24px)',
                            transitionDelay: `${i * 80}ms`,
                        }}
                    >
                        {child}
                    </div>
                ))
                : <div className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{children}</div>
            }
        </div>
    );
}

// ─── HERO ───
function HeroSection() {
    const { ref, visible } = useReveal();
    return (
        <section
            className="relative overflow-hidden"
            style={{
                background: '#0D1F3A',
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,200,24,0.02) 60px, rgba(255,200,24,0.02) 61px)',
            }}
        >
            <div ref={ref} className="max-w-7xl mx-auto" style={{ padding: '100px 56px 90px' }}>
                {/* Eyebrow */}
                <div
                    className="transition-all duration-700"
                    style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-chivo font-bold text-xs uppercase tracking-[2px]"
                        style={{ background: 'rgba(255,200,24,0.12)', color: '#FFC818' }}>
                        <span className="w-2 h-2 rounded-full bg-[#FFC818] pulse-dot" />
                        Infrastructure &amp; Quality
                    </span>
                </div>

                {/* Headline */}
                <h1
                    className="font-chivo mt-8 transition-all duration-700 delay-100"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    <span className="block font-black text-white" style={{ fontSize: 56, letterSpacing: -2, lineHeight: 1.1 }}>
                         World-Class Manufacturing Infrastructure
                    </span>
                    {/* <span className="block h-1 bg-[#FFC818] mt-2 mb-2 origin-left yellow-rule" style={{ width: 64 }} /> */}
                    {/* <span className="block font-black text-white" style={{ fontSize: 56, letterSpacing: -2, lineHeight: 1.1 }}>
                        Manufacturing
                    </span> */}
                    {/* <span className="block font-light italic" style={{ fontSize: 56, letterSpacing: -2, lineHeight: 1.1, color: 'rgba(255,255,255,0.5)' }}>
                        
                    </span> */}
                </h1>

                {/* Subtext */}
                <p
                    className="font-chivo font-light mt-6 transition-all duration-700 delay-200"
                    style={{
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: 'rgba(255,255,255,0.5)',
                        maxWidth: 560,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    Efficient, scalable, and quality-focused, our solar-powered facility drives responsible manufacturing.
                </p>

                {/* Stats strip */}
                
            </div>
            <div
                    className="grid grid-cols-2 lg:grid-cols-4 mt-14 overflow-hidden transition-all duration-700 delay-300"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    {[
                        { num: '45,000', unit: 'sq ft', label: 'Total Campus' },
                        { num: '30,000', unit: 'sq ft', label: 'Production Floor' },
                        { num: '15,000', unit: 'Units/Mo', label: 'Peak Capacity' },
                        { num: '10,000', unit: 'sq ft', label: 'Green Area' },
                    ].map((s) => (
                        <div
                            key={s.label}
                            className=" duration-300 cursor-default flex flex-col justify-center items-center gap-2"
                            style={{padding: '28px 24px', background: '#f8f8f8', border: '1px solid rgba(255,255,255,0.08)'}}
                        >
                            <div className="font-chivo font-black text-[#296BB2]" style={{ fontSize: 36, letterSpacing: -1 }}>
                                {s.num} <span className="text-base font-bold">{s.unit}</span>
                            </div>
                            <div className="font-chivo font-light mt-1 text-blue-mid" style={{ fontSize: 12,lineHeight: 1.5 }}>
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    );
}

// ─── SECTION 1: Precision Manufacturing ───
function PrecisionSection() {
    const { ref, visible } = useReveal();
    const features = [
        { icon: '🧪', title: 'ISO-Certified Clean Rooms', desc: 'Maintained under strict temperature and humidity control to support reliable and precise electronics production.' },
        { icon: '⚡', title: 'Electrostatic Safety Zones', desc: 'Our production areas are equipped with ESD protection to prevent damage to electronic parts during assembly.' },
        { icon: '⚙️', title: 'Efficient Automated Operations', desc: 'We use a mix of semi- and fully automated lines to maintain steady production and reliable quality.' },
        { icon: '🔧', title: 'End-to-End Service & Testing Center', desc: 'Built to manage product returns, repairs, refurbishment, and ELT testing under one controlled environment.' },
    ];

    return (
        <section className="bg-white py-20 md:py-28" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className="transition-all duration-700"
                    style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
                >
                    <span className="eyebrow text-blue-mid mb-3 block">Manufacturing Excellence</span>
                    <h2 className="font-chivo font-black text-3xl md:text-5xl text-blue-deep tracking-tight mb-12">
                        Where Precision Meets Production
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image mosaic */}
                    <div
                        className="grid grid-cols-2 grid-rows-2 gap-[3px] transition-all duration-700 delay-100"
                        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
                    >
                        <div className="row-span-2 overflow-hidden rounded-lg">
                            <img src={infraCleanroom} alt="Clean room production floor" loading="lazy"
                                className="w-full h-full object-cover brightness-[0.88] hover:brightness-100 hover:scale-[1.06] transition-all duration-500 rounded-lg" />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                            <img src={infraProductionLine} alt="Production line" loading="lazy"
                                className="w-full h-full object-cover brightness-[0.88] hover:brightness-100 hover:scale-[1.06] transition-all duration-500 rounded-lg" />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                            <img src={infraPcbAssembly} alt="PCB assembly closeup" loading="lazy"
                                className="w-full h-full object-cover brightness-[0.88] hover:brightness-100 hover:scale-[1.06] transition-all duration-500 rounded-lg" />
                        </div>
                    </div>

                    {/* Feature list */}
                    <div>
                        {features.map((f, i) => (
                            <div
                                key={f.title}
                                className={`flex items-start gap-[18px] py-6 group hover:pl-[6px] transition-all duration-300 ${i < features.length - 1 ? 'border-b border-grey-200' : ''}`}
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? 'translateY(0)' : 'translateY(24px)',
                                    transitionDelay: `${(i + 2) * 80}ms`,
                                    transitionDuration: '700ms',
                                }}
                            >
                                <div className="w-11 h-11 min-w-[44px] rounded-[10px] bg-blue-tint flex items-center justify-center text-xl group-hover:bg-[rgba(255,200,24,0.12)] transition-colors duration-300">
                                    {f.icon}
                                </div>
                                <div>
                                    <h4 className="font-chivo font-bold text-[15px] text-blue-deep">{f.title}</h4>
                                    <p className="font-chivo font-light text-[13px] text-grey-400 leading-[1.65] mt-1">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── SECTION 2: Multi-Location Footprint ───
function LocationsSection() {
    const { ref, visible } = useReveal();
    const locations = [
        { image: './WEMS_Site_Images/Factory_Images/wems.png', area: '45K sq ft', city: 'Ahmedabad', state: 'Gujarat', role: 'Smart Display Manufacturing HQ', desc: 'Climate-controlled · 15K TV units/month · 100% Solar', status: 'active' as const },
        { image: './WEMS_Site_Images/Factory_Images/factory_noida.png', area: '120K sq ft', city: 'Greater Noida', state: 'Uttar Pradesh', role: 'Smart Audio Production Facility', desc: 'ESD-protected · Full production capability', status: 'active' as const },
        { image:  './WEMS_Site_Images/Factory_Images/expansion.png', area: '200K sq ft', city: 'Phase 2 Expansion', state: 'Next-Gen Manufacturing Hub', role: '', desc: 'Robotics · New Energy · Under Construction', status: 'upcoming' as const },
        { image: infraShenzhenSkyline, area: '🌐', city: 'Shenzhen', state: 'China', role: 'Global Sourcing & Supply Chain Office', desc: 'Component sourcing · Vendor relations · QC oversight', status: 'active' as const },
    ];

    return (
        <section ref={ref} style={{ background: '#0D1F3A' }} className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className="mb-12 transition-all duration-700"
                    style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
                >
                    <span className="eyebrow text-[#FFC818] mb-3 block">Global Presence</span>
                    <h2 className="font-chivo font-black text-3xl md:text-5xl text-white tracking-tight mb-4">
                        Multi-Location Footprint.
                    </h2>
                    <p className="font-chivo font-light text-[15px] leading-[1.75] max-w-[600px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        From our flagship Ahmedabad campus to our Smart Audio centre in Greater Noida — and a global sourcing office in Shenzhen — World EMS operates where it matters.
                    </p>
                </div>

                <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3px]">
                    {locations.map((loc) => (
                        <div key={loc.city} className="relative overflow-hidden group" style={{ aspectRatio: '2/3' }}>
                            <img src={loc.image} alt={loc.city} loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover brightness-[0.7] group-hover:brightness-[0.9] group-hover:scale-[1.06] transition-all duration-[600ms]" />
                            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,31,58,0.97) 0%, rgba(13,31,58,0.2) 60%, transparent 100%)' }} />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                <span
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-chivo font-bold text-[10px] uppercase tracking-wider mb-3"
                                    style={loc.status === 'active'
                                        ? { background: 'rgba(45,122,79,0.25)', color: '#5DD992', border: '1px solid rgba(93,217,146,0.3)' }
                                        : { background: 'rgba(255,200,24,0.2)', color: '#FFC818', border: '1px solid rgba(255,200,24,0.3)' }
                                    }
                                >
                                    {loc.status === 'active' ? '● Active' : '◎ Upcoming'}
                                </span>
                                <div className="font-chivo font-black text-[28px] text-[#FFC818]" style={{ letterSpacing: -1 }}>{loc.area}</div>
                                <div className="font-chivo font-bold text-base text-white">{loc.city}</div>
                                <div className="font-chivo font-light text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{loc.state}{loc.role ? ` · ${loc.role}` : ''}</div>
                                <div className="font-chivo font-bold text-[11px] mt-2" style={{ color: 'rgba(255,255,255,0.55)' }}>{loc.desc}</div>
                            </div>
                        </div>
                    ))}
                </RevealGroup>

                {/* Strip */}
                <div
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-[3px] px-8 py-5 rounded-b-xl transition-all duration-700 delay-300"
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    <span className="font-chivo font-light text-sm text-white/50">
                        <span className="text-white font-bold">365,000 sq. ft.</span> total footprint across all locations <span className="text-white/30">(165K existing · 200K underway)</span>
                    </span>
                    <a href="#" className="font-chivo font-bold text-sm text-[#FFC818] mt-2 sm:mt-0 group/link flex items-center gap-1">
                        View on Map <span className="inline-block group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

// ─── SECTION 3: Sustainability ───
function SustainabilitySection() {
    const { ref, visible } = useReveal();
    const pillars = [
        { icon: '☀️', title: 'Solar-Powered Facility', desc: 'With 100% in-house solar generation, our operations run without dependence on the grid.' },
        { icon: '🌳', title: 'Sustainable by Design/Work Surrounded by Nature', desc: 'Our 10,000 sq. ft. green campus, featuring more than 200 native trees, is designed to reduce carbon emissions and support a healthy workplace for everyone.' },
        { icon: '♻️', title: 'Green Production', desc: 'Our trusted vendors help us provide cost-effective and reliable manufacturing without compromising on environmental responsibility.' },
    ];

    return (
        <section ref={ref} style={{ background: '#F2FAF6' }} className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className="mb-12 transition-all duration-700"
                    style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
                >
                    <span className="eyebrow text-blue-mid mb-3 block">Sustainability</span>
                    <h2 className="font-chivo font-black text-3xl md:text-5xl text-blue-deep tracking-tight mb-4">
                        Driving Sustainable Manufacturing
                    </h2>
                    <p className="font-chivo font-light text-[15px] text-grey-400 leading-[1.75] max-w-[560px]">
                        Our solar-powered infrastructure reflects our commitment to reducing environmental impact and improving energy efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    {/* Left */}
                    <div>
                        {/* Solar badge */}
                        <div
                            className="rounded-xl p-7 grid grid-cols-[auto_1fr] gap-5 items-center mb-9 transition-all duration-700 delay-100"
                            style={{
                                background: '#0D1F3A',
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                            }}
                        >
                            <span className="text-[40px]">☀️</span>
                            <div>
                                <div className="font-chivo font-black text-[40px] text-[#FFC818]" style={{ letterSpacing: -1.5 }}>100%</div>
                                <div className="font-chivo font-light text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                                    Captive solar power — zero grid dependency at our Ahmedabad facility
                                </div>
                            </div>
                        </div>

                        {/* Pillars */}
                        {pillars.map((p, i) => (
                            <div
                                key={p.title}
                                className={`flex items-start gap-4 py-[22px] group hover:pl-[6px] transition-all duration-300 ${i < pillars.length - 1 ? 'border-b' : ''}`}
                                style={{
                                    borderColor: 'rgba(45,122,79,0.12)',
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? 'translateY(0)' : 'translateY(24px)',
                                    transitionDelay: `${(i + 2) * 80}ms`,
                                    transitionDuration: '700ms',
                                }}
                            >
                                <div className="w-10 h-10 min-w-[40px] rounded-lg flex items-center justify-center text-lg group-hover:bg-[rgba(45,122,79,0.2)] transition-colors duration-300"
                                    style={{ background: 'rgba(45,122,79,0.1)' }}>
                                    {p.icon}
                                </div>
                                <div>
                                    <h4 className="font-chivo font-bold text-[15px] text-blue-deep">{p.title}</h4>
                                    <p className="font-chivo font-light text-[13px] text-grey-400 leading-[1.65] mt-1">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right — image stack */}
                    <div
                        className="grid grid-cols-2 grid-rows-[300px_160px] gap-[3px] transition-all duration-700 delay-200"
                        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
                    >
                        <div className="col-span-2 overflow-hidden rounded-t-xl">
                            <img src={infraSolarPanels} alt="Solar panels on rooftop" loading="lazy"
                                className="w-full h-full object-cover brightness-[0.9] saturate-110 hover:brightness-100 hover:saturate-[1.2] hover:scale-[1.05] transition-all duration-500" />
                        </div>
                        <div className="overflow-hidden rounded-bl-xl">
                            <img src={infraGreenGarden} alt="Green campus garden" loading="lazy"
                                className="w-full h-full object-cover brightness-[0.9] saturate-110 hover:brightness-100 hover:saturate-[1.2] hover:scale-[1.05] transition-all duration-500" />
                        </div>
                        <div className="overflow-hidden rounded-br-xl">
                            <img src={infraFactoryExterior} alt="Sustainable factory exterior" loading="lazy"
                                className="w-full h-full object-cover brightness-[0.9] saturate-110 hover:brightness-100 hover:saturate-[1.2] hover:scale-[1.05] transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── SECTION 4: Certifications ───
function CertificationsSection() {
    const { ref, visible } = useReveal();
    const certs = [
        { image: certQuality, code: 'ISO 9001', name: 'Quality Management', desc: 'Analytical and process-driven validation frameworks ensuring consistent product quality at every stage of the manufacturing lifecycle.' },
        { image: certSolar, code: 'ISO 14001', name: 'Environmental Management', desc: '100% captive solar power. Sustainable manufacturing operations with measurable environmental impact reduction across all facilities.' },
        { image: certSafety, code: 'ISO 45001', name: 'Occupational Health & Safety', desc: 'Safe and healthy working environments for 350+ professionals. Rigorous hazard identification, risk assessment, and incident prevention protocols.' },
        { image: certEnergy, code: 'ISO 50001', name: 'Energy Management', desc: 'Optimised energy use across all facilities through systematic energy performance improvement, monitoring, and renewable energy integration.' },
    ];

    const certImages = [
        { src: './Home_Page_Images/qc_1.png', label: 'Quality Control' },
        { src: infraSolarPanels, label: 'Solar Energy' },
        { src: './Home_Page_Images/safety_1.png', label: 'Safety' },
        { src: infraEnergyMeters, label: 'Energy Management' },
    ];

    return (
        <section ref={ref} className="py-20 md:py-28" style={{ background: '#F5F6F8' }}>
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className="mb-12 transition-all duration-700"
                    style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
                >
                    <span className="eyebrow text-blue-mid mb-3 block">Accreditations</span>
                    <h2 className="font-chivo font-black text-3xl md:text-5xl text-blue-deep tracking-tight mb-4">
                        Compliance Without Compromise
                    </h2>
                    <p className="font-chivo font-light text-[15px] text-grey-400 leading-[1.75] max-w-[560px]">
                        Every process, every product, every facility — validated against the world's most rigorous quality, safety, and environmental standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    {/* Left — cert cards */}
                    <div className="space-y-3">
                        {certs.map((c, i) => (
                            <div
                                key={c.code}
                                className="flex items-start gap-4 bg-white border border-grey-200 rounded-xl p-5 hover:-translate-y-[3px] hover:shadow-lg hover:border-blue-mid transition-all duration-300 group"
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? 'translateY(0)' : 'translateY(24px)',
                                    transitionDelay: `${i * 80}ms`,
                                    transitionDuration: '700ms',
                                }}
                            >
                                <img src={c.image} alt={c.name} className="w-14 h-14 rounded-lg object-cover flex-shrink-0" loading="lazy" />
                                <div>
                                    <span className="font-chivo font-bold text-[10px] text-blue-mid uppercase tracking-[1px]">{c.code}</span>
                                    <h4 className="font-chivo font-bold text-[15px] text-blue-deep">{c.name}</h4>
                                    <p className="font-chivo font-light text-[12px] text-grey-400 leading-[1.65] mt-1">{c.desc}</p>
                                </div>
                            </div>
                        ))}
                        <p
                            className="font-chivo font-light text-[12px] text-grey-400 mt-4 pl-1 transition-all duration-700"
                            style={{
                                opacity: visible ? 1 : 0,
                                transitionDelay: '400ms',
                            }}
                        >
                            Products are additionally <strong className="font-bold">BIS</strong> and <strong className="font-bold">BEE</strong> certified.
                        </p>
                    </div>

                    {/* Right — 2x2 image grid */}
                    <div
                        className="grid grid-cols-2 gap-[3px] transition-all duration-700 delay-200"
                        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
                    >
                        {certImages.map((img) => (
                            <div key={img.label} className="relative overflow-hidden group" style={{ aspectRatio: '1' }}>
                                <img src={img.src} alt={img.label} loading="lazy"
                                    className="w-full h-full object-cover brightness-[0.85] group-hover:brightness-100 group-hover:scale-[1.05] transition-all duration-500" />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <span className="font-chivo font-bold text-[11px] uppercase text-white tracking-wider">{img.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── SECTION 5: Our People ───
// function PeopleSection() {
//     const { ref, visible } = useReveal();
//     const stats = [
//         { num: '100+', label: 'Total Workforce / across all locations', highlight: false },
//         { num: '75+', label: 'Skilled Operators / on production floors', highlight: false },
//         { num: '30+', label: 'Management & / Engineering professionals', highlight: false },
//         { num: 'ERP', label: 'Integrated System / rollout upcoming', highlight: true },
//     ];

//     return (
//         <section ref={ref} style={{ background: '#0D1F3A' }} className="py-20 md:py-28">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div
//                     className="mb-12 transition-all duration-700"
//                     style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
//                 >
//                     <span className="eyebrow text-[#FFC818] mb-3 block">Our People</span>
//                     <h2 className="font-chivo font-black text-3xl md:text-5xl text-white tracking-tight">
//                         Strong Execution Engine.
//                     </h2>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
//                     {/* Left — stat grid */}
//                     <div className="grid grid-cols-2 gap-[3px]">
//                         {stats.map((s, i) => (
//                             <div
//                                 key={s.label}
//                                 className="p-7 transition-all duration-300 cursor-default"
//                                 style={{
//                                     background: s.highlight ? 'rgba(255,200,24,0.08)' : 'rgba(255,255,255,0.04)',
//                                     border: `1px solid ${s.highlight ? 'rgba(255,200,24,0.2)' : 'rgba(255,255,255,0.06)'}`,
//                                     opacity: visible ? 1 : 0,
//                                     transform: visible ? 'translateY(0)' : 'translateY(24px)',
//                                     transitionDelay: `${i * 80}ms`,
//                                     transitionDuration: '700ms',
//                                 }}
//                                 onMouseEnter={(e) => (e.currentTarget.style.background = s.highlight ? 'rgba(255,200,24,0.12)' : 'rgba(255,255,255,0.08)')}
//                                 onMouseLeave={(e) => (e.currentTarget.style.background = s.highlight ? 'rgba(255,200,24,0.08)' : 'rgba(255,255,255,0.04)')}
//                             >
//                                 <div className="font-chivo font-black text-[#FFC818]" style={{ fontSize: s.highlight ? 28 : 48, letterSpacing: -2 }}>
//                                     {s.num}
//                                 </div>
//                                 <div className="font-chivo font-light text-[13px] mt-2" style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
//                                     {s.label}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Right — text + images */}
//                     <div>
//                         <p
//                             className="font-chivo font-light text-[15px] leading-[1.8] mb-10 transition-all duration-700 delay-200"
//                             style={{
//                                 color: 'rgba(255,255,255,0.5)',
//                                 opacity: visible ? 1 : 0,
//                                 transform: visible ? 'translateY(0)' : 'translateY(24px)',
//                             }}
//                         >
//                             Our corporate structure is designed for accountability and rapid decision-making. We're integrating robotic automation to improve efficiency and transitioning to an integrated ERP system for real-time transparency across all operations.
//                         </p>

//                         <div
//                             className="grid grid-cols-2 gap-[3px] transition-all duration-700 delay-300"
//                             style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
//                         >
//                             {[
//                                 { src: infraProductionTeam, label: 'Production Team' },
//                                 { src: infraEngineeringTeam, label: 'Engineering & R&D' },
//                             ].map((img) => (
//                                 <div key={img.label} className="relative overflow-hidden group" style={{ aspectRatio: '4/3' }}>
//                                     <img src={img.src} alt={img.label} loading="lazy"
//                                         className="w-full h-full object-cover brightness-75 group-hover:brightness-[0.95] group-hover:scale-[1.06] transition-all duration-500" />
//                                     <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                                         <span className="font-chivo font-bold text-[11px] uppercase text-white tracking-wider">{img.label}</span>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// ─── YELLOW CTA ───
function InfraCTA() {
    const { ref, visible } = useReveal();
    return (
        <section ref={ref} style={{ background: '#FFC818', padding: '80px 56px' }}>
            <div
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center transition-all duration-700"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
            >
                <div>
                    <h2 className="font-chivo text-blue-deep" style={{ fontSize: 40, letterSpacing: -1, lineHeight: 1.1 }}>
                        <span className="font-black">Ready to see our facilities </span>
                        <span className="font-light italic">in action?</span>
                    </h2>
                    <p className="font-chivo font-light text-[15px] leading-[1.7] mt-4" style={{ color: 'rgba(13,31,58,0.6)' }}>
                        Schedule a facility tour or speak with our manufacturing team about your production requirements.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <a href="#contact"
                        className="font-chivo font-bold text-sm text-white px-8 py-3.5 rounded-lg text-center hover:-translate-y-[2px] transition-transform duration-300"
                        style={{ background: '#0D1F3A' }}>
                        Schedule a Facility Tour →
                    </a>
                    <a href="#"
                        className="font-chivo font-bold text-sm text-blue-deep px-8 py-3.5 rounded-lg text-center border hover:border-blue-deep transition-colors duration-300"
                        style={{ borderColor: 'rgba(13,31,58,0.3)', background: 'transparent' }}>
                        Download Capabilities Deck
                    </a>
                </div>
            </div>
        </section>
    );
}

// ─── PAGE ───
export default function Infrastructure() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <main className="pt-[68px]">
                <HeroSection />
                <PrecisionSection />
                <LocationsSection />
                <SustainabilitySection />
                <CertificationsSection />
                {/* <PeopleSection /> */}
                <InfraCTA />
            </main>
            <FooterSection />
        </>
    );
}