import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const topRow = [
    { img: './WEMS_Site_Images/Team_Images/ravipatel.png', name: 'Ravi Patel', role: 'Board Member & Director' },
    { img: './WEMS_Site_Images/Team_Images/niravpatel.png', name: 'Nirav Patel', role: 'Board Member' },
    { img: './WEMS_Site_Images/Team_Images/ketanpatel.png', name: 'Ketan Patel', role: 'Board Member' },
];

const bottomRow = [
    { img: './WEMS_Site_Images/Team_Images/sandeepkalyankar.png', name: 'Sandeep Kalyankar', role: 'CBO & Executive Director' },
    { img: './WEMS_Site_Images/Team_Images/divyeshshah.png', name: 'Divyesh Shah', role: 'COO & Executive Director' },
    { img: './WEMS_Site_Images/Team_Images/anilgundecha.png', name: 'Anil Gundecha', role: 'Head, Robot Department' },
    { img: './WEMS_Site_Images/Team_Images/abhaykurwalker.png', name: 'Abhay Kurwalkar', role: 'Head R&D Department' },
    { img: './WEMS_Site_Images/Team_Images/mujaldesai.png', name: 'Munjal Desai', role: 'Sales & Marketing Head' },
];

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

// ─── RevealGroup ───
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

// ─── DATA ───
const boardMembers = [
    { img: './WEMS_Site_Images/Team_Images/ravisir2.png', name: 'Ravi Patel', role: 'Board Member & Director', bio: 'Strategic leadership and corporate governance driving WorldEMS\'s growth trajectory. Provides overarching direction across all business verticals and investor relations.' },
    { img: './WEMS_Site_Images/Team_Images/niravsir2.png', name: 'Nirav Patel', role: 'Board Member & Director', bio: 'Operational oversight and business development across all manufacturing verticals. Drives expansion strategy and multi-location facility governance.' },
    { img: './WEMS_Site_Images/Team_Images/ketansir2.png', name: 'Ketan Patel', role: 'Board Member & Director', bio: 'Financial strategy and investor relations ensuring sustainable business growth. Oversees capital allocation, financial planning, and stakeholder communications.' },
];

const executives = [
    {
        img: './WEMS_Site_Images/Team_Images/Divyesh Shah.png', name: 'Divyesh Shah', role: 'COO & Executive Director', initials: 'DS',
        years: '25+ Years Experience',
        bio: 'Electronics Engineer with 25+ years of experience. Core competency in R&D, Manufacturing & Customer Support. Previously at senior positions in Videocon Group and Abaj Technology.',
        tags: ['R&D', 'Manufacturing', 'Customer Support'],
        previous: ['Videocon', 'Abaj', 'JCT', 'SAMTEL'],
    },
    {
        img: './WEMS_Site_Images/Team_Images/Sandeep Kalyankar.png', name: 'Sandeep Kalyankar', role: 'CBO & Executive Director', initials: 'SK',
        years: '25 Years Experience',
        bio: 'Electronics Engineer, MBA (Marketing), Materials Management from IIMM Bangalore. 25 years of experience in Consumer Durables & Hospitality. Expertise in EMS, Global SCM, Logistics & Business Development.',
        tags: ['EMS', 'Global SCM', 'Logistics', 'Business Dev'],
        previous: ['LG', 'Reliance', 'Sharp', 'Videocon', 'Onida', 'JCT', 'SAMTEL', 'Abaj'],
    },
    {
        img: './WEMS_Site_Images/Team_Images/Munjal Desai.png', name: 'Munjal Desai', role: 'Sales & Marketing Head', initials: 'MD',
        years: '25+ Years Experience',
        bio: '25+ years experience in Consumer Durables & Mobile Industry. Expert in Electronics Display field, customer support, and production.',
        tags: ['Sales', 'Marketing', 'Electronics Display'],
        previous: ['Onida', 'LG', 'Birla', 'AT&T'],
    },
    {
        img: './WEMS_Site_Images/Team_Images/Anil Gundecha ​.png', name: 'Anil Gundecha', role: 'Head — Robot Department', initials: 'AG',
        years: '25+ Years Experience',
        bio: 'B.E. Mechanical with 36 years experience across Consumer Electronics, Li-ion Battery, Automobile, and Mobile industries. Project Head, R&D Head, Factory Operations.',
        tags: ['Robotics', 'Li-ion Battery', 'R&D', 'Factory Ops'],
        previous: ['JCT', 'SAMTEL', 'Videocon', 'Abaj'],
    },
    {
        img: './WEMS_Site_Images/Team_Images/Abhay Kurwalkar.png', name: 'Abhay Kurwalkar', role: 'Head — R&D Department', initials: 'AK',
        years: '25+ Years Experience',
        bio: '28+ years in Consumer Electronics specializing in R&D Testing, QC Improvement, and TV Platform & Vendor Development.',
        tags: ['R&D Testing', 'QC', 'TV Platforms', 'Vendor Dev'],
        previous: ['Videocon', 'Toshiba', 'Philips'],
    },
    // {
    //     img: '', name: 'Himanshu Solanki', role: 'AGM — Production & Planning', initials: 'HS',
    //     years: '27 Years Experience',
    //     bio: 'Electronics Engineer with 27 years in Consumer Electronics. Expert in Electronics Display, customer support, and production planning.',
    //     tags: ['Production', 'Planning', 'Electronics Display'],
    //     previous: ['JCT', 'SAMTEL', 'Videocon', 'Abaj'],
    // },
];

const experienceBars = [
    { name: 'Anil Gundecha', role: 'Head Robot Dept', years: 36, pct: 100 },
    { name: 'Sandeep Kalyankar', role: 'CBO', years: 35, pct: 97 },
    { name: 'Divyesh Shah', role: 'COO', years: 30, pct: 83 },
    { name: 'Munjal Desai', role: 'Sales Head', years: 30, pct: 83 },
    { name: 'Abhay Kurwalkar', role: 'R&D Head', years: 28, pct: 78 },
    { name: 'Himanshu Solanki', role: 'AGM Production', years: 27, pct: 75 },
];

const principles = [
    { icon: '🎯', title: 'Accountability', desc: 'Corporate structure designed for clear ownership and rapid decision-making at every level of the organisation.' },
    { icon: '🔬', title: 'Engineering-First', desc: 'Every leader brings deep technical expertise — from electronics engineering to R&D and mechanical systems.' },
    { icon: '🌐', title: 'Global Perspective', desc: "Team trained at India's largest consumer electronics brands and global leaders like LG, Sharp, Toshiba, and Philips." },
    { icon: '🚀', title: 'Growth Mindset', desc: '41.7× revenue growth in one year is a reflection of a team that executes with urgency, precision, and purpose.' },
];

// ─── HERO ───
function HeroSection() {
    const { ref, visible } = useReveal();
    const miniStats = [
        { num: '7', label: 'Senior Leaders / in the executive team' },
        { num: '3', label: 'Board Members / & Directors' },
        { num: '5+', label: 'Global brands / in collective careers' },
        { num: 'R&D', label: 'In-house centres / led by veterans' },
    ];

    return (
        <section
            className="relative overflow-hidden"
            style={{
                background: '#0D1F3A',
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,200,24,0.02) 60px, rgba(255,200,24,0.02) 61px)',
            }}
        >
            <div ref={ref} className="max-w-7xl mx-auto " style={{ padding: '100px 56px 90px', gap: 80 }}>
                {/* Left */}
                <div>
                    <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-chivo font-bold text-xs uppercase tracking-[2px]"
                            style={{ background: 'rgba(255,200,24,0.12)', color: '#FFC818' }}>
                            <span className="w-2 h-2 rounded-full bg-[#FFC818] pulse-dot" />
                            Our Team
                        </span>
                    </div>

                    <h1 className="font-chivo mt-8 transition-all duration-700 delay-100" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>
                        <span className="block font-black text-white" style={{ fontSize: 54, letterSpacing: -2, lineHeight: 1.1 }}>
                            Visionaries Driving the Future
                        </span>
                        {/* <span className="block h-1 bg-[#FFC818] mt-2 mb-2 origin-left yellow-rule" style={{ width: 64 }} />
                        <span className="block font-light italic" style={{ fontSize: 54, letterSpacing: -2, lineHeight: 1.1, color: 'rgba(255,255,255,0.5)' }}>
                            
                        </span> */}
                    </h1>

                    <p className="font-chivo font-light mt-6 transition-all duration-700 delay-200"
                        style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 480, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>
                        A seasoned team bringing over 150 years of combined experience in consumer electronics, manufacturing, and global supply chain management.
                    </p>
                </div>

                {/* Right */}
                {/* <div className="transition-all duration-700 delay-200" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>
                  
                    <div className="rounded-2xl p-10 mb-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="font-chivo font-black text-[#FFC818]" style={{ fontSize: 80, letterSpacing: -4, lineHeight: 1 }}>150+</div>
                        <div className="font-chivo font-bold text-white text-lg mt-3">Combined Years of Experience</div>
                        <p className="font-chivo font-light text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            Across consumer electronics, manufacturing, R&D, global supply chain, and business development.
                        </p>
                    </div>

                   
                    <div className="grid grid-cols-2 gap-[3px]">
                        {miniStats.map((s) => (
                            <div
                                key={s.label}
                                className="rounded-lg transition-colors duration-300 cursor-default"
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '20px 22px' }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
                            >
                                <div className="font-chivo font-black text-white" style={{ fontSize: 26 }}>{s.num}</div>
                                <div className="font-chivo font-light mt-1" style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
}

// ─── BOARD OF DIRECTORS ───
function BoardSection() {
    return (
        <section style={{ background: '#F5F6F8' }} className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <RevealGroup className="mb-12">
                    <span className="eyebrow text-blue-mid mb-3 block">Board of Directors</span>
                    <h2 className="font-chivo font-black text-3xl md:text-5xl text-blue-deep tracking-tight mb-4">Strategic Leadership.</h2>
                    <p className="font-chivo font-light text-[15px] text-grey-400 leading-[1.75] max-w-[560px]">
                        The founding board driving World EMS's corporate governance, growth strategy, and long-term vision.
                    </p>
                </RevealGroup>

                <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {boardMembers.map((m) => (
                        <div
                            key={m.name}
                            className="group bg-white border border-grey-200 rounded-2xl overflow-hidden 
             transition-all duration-500 hover:-translate-y-1 hover:shadow-xl 
             relative flex flex-col h-full"
                        >
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FFC818] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

                            <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={m.img}
                                    alt={m.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500"
                                />
                            </div>

                            <div className="p-7 flex flex-col flex-1">
                                <h3 className="font-chivo font-black text-xl text-blue-deep">
                                    {m.name}
                                </h3>

                                <div className="flex items-center gap-2 mt-2 mb-3">
                                    <span className="w-4 h-[2px] bg-[#FFC818]" />
                                    <span className="font-chivo font-bold text-[11px] uppercase tracking-[1px] text-blue-mid">
                                        {m.role}
                                    </span>
                                </div>

                                <p className="font-chivo font-light text-[13px] text-grey-400 leading-[1.7] mt-auto">
                                    {m.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}

// ─── EXECUTIVE TEAM ───
function ExecutiveSection() {
    return (
        <section className="bg-white py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <RevealGroup className="mb-12">
                    <span className="eyebrow text-blue-mid mb-3 block">Executive Team</span>
                    <h2 className="font-chivo font-black text-3xl md:text-5xl text-blue-deep tracking-tight mb-4">Operational Excellence.</h2>
                    <p className="font-chivo font-light text-[15px] text-grey-400 leading-[1.75] max-w-[560px]">
                        Seasoned industry veterans leading every function — from manufacturing and R&D to sales, robotics, and supply chain.
                    </p>
                </RevealGroup>

                <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px]">
                    {executives.map((ex) => (
                        <div key={ex.name} className="group relative overflow-hidden border border-grey-200">
                            {/* Photo */}
                            <div className="relative" style={{ aspectRatio: '3/4' }}>
                                <img src={ex.img} alt={ex.name} loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover object-top grayscale-[20%] brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.04] transition-all duration-500" />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,31,58,1) 0%, rgba(13,31,58,0.6) 35%, transparent 65%)' }} />
                                {/* Bottom info */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                    <div className="w-12 h-12 rounded-[10px] bg-[#FFC818] flex items-center justify-center font-chivo font-black text-sm text-blue-deep mb-3">
                                        {ex.initials}
                                    </div>
                                    <h3 className="font-chivo font-black text-lg text-white" style={{ letterSpacing: -0.5 }}>{ex.name}</h3>
                                    <span className="font-chivo font-bold text-[10px] uppercase tracking-[1px] text-[#FFC818]">{ex.role}</span>
                                </div>
                            </div>

                            {/* Details panel — slides up on hover */}
                            <div
                                className="absolute bottom-0 left-0 right-0 z-20 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms]"
                                style={{ background: '#0D1F3A', transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
                            >
                                <span className="inline-flex items-center px-3 py-1 rounded-full font-chivo font-bold text-[10px] mb-3"
                                    style={{ color: '#FFC818', background: 'rgba(255,200,24,0.12)', border: '1px solid rgba(255,200,24,0.25)' }}>
                                    {ex.years}
                                </span>
                                <p className="font-chivo font-light text-xs leading-[1.65] mb-3.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{ex.bio}</p>
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {ex.tags.map((t) => (
                                        <span key={t} className="font-chivo font-bold text-[10px] px-2 py-1 rounded"
                                            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="font-chivo font-bold text-[9px] uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Previously at</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {ex.previous.map((p) => (
                                        <span key={p} className="font-chivo font-bold text-[10px] px-2 py-1 rounded"
                                            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.55)', borderRadius: 4 }}>
                                            {p}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </RevealGroup>

                <p className="font-chivo font-light text-xs text-grey-400 mt-5">
                    Hover over each card to view full bio, expertise, and career history.
                </p>
            </div>
        </section>
    );
}

// ─── EXPERIENCE BAR CHART ───
// function ExperienceSection() {
//     const { ref, visible } = useReveal(0.3);

//     return (
//         <section ref={ref} style={{ background: '#0D1F3A' }} className="py-20 md:py-28">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>
//                     <span className="eyebrow text-[#FFC818] mb-3 block">Combined Expertise</span>
//                     <h2 className="font-chivo font-black text-white tracking-tight" style={{ fontSize: 36 }}>
//                         Industry experience across the team.
//                     </h2>
//                 </div>

//                 <div className="mt-10 space-y-5">
//                     {experienceBars.map((bar, i) => (
//                         <div key={bar.name} className="grid items-center gap-5" style={{ gridTemplateColumns: '200px 1fr 60px' }}>
//                             <div>
//                                 <div className="font-chivo font-bold text-[13px] text-white">{bar.name}</div>
//                                 <div className="font-chivo font-light text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{bar.role}</div>
//                             </div>
//                             <div className="h-2 rounded" style={{ background: 'rgba(255,255,255,0.06)' }}>
//                                 <div
//                                     className="h-full rounded transition-all"
//                                     style={{
//                                         background: 'linear-gradient(90deg, #1B4F8A, #FFC818)',
//                                         width: visible ? `${bar.pct}%` : '0%',
//                                         transitionDuration: '1.2s',
//                                         transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
//                                         transitionDelay: `${200 + i * 100}ms`,
//                                     }}
//                                 />
//                             </div>
//                             <div className="font-chivo font-black text-[13px] text-[#FFC818] text-right">{bar.years} yrs</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// ─── PRINCIPLES ───
function PrinciplesSection() {
    return (
        <section style={{ background: '#F5F6F8' }} className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <RevealGroup className="mb-12">
                    <span className="eyebrow text-blue-mid mb-3 block">How We Work</span>
                    <h2 className="font-chivo font-black text-3xl md:text-5xl text-blue-deep tracking-tight">Built on these principles.</h2>
                </RevealGroup>

                <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                    {principles.map((p) => (
                        <div key={p.title} className="group bg-white border border-grey-200 rounded-xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFC818] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            <div className="text-[28px] mb-4">{p.icon}</div>
                            <h3 className="font-chivo font-bold text-[15px] text-blue-deep">{p.title}</h3>
                            <p className="font-chivo font-light text-xs text-grey-400 leading-[1.65] mt-2">{p.desc}</p>
                        </div>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}

// ─── CTA ───
function CTASection() {
    return (
        <section style={{ background: '#FFC818', padding: '80px 56px' }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
                <div>
                    <h2 className="font-chivo text-blue-deep" style={{ fontSize: 40, letterSpacing: -1, lineHeight: 1.1 }}>
                        <span className="font-black">Want to work with this </span>
                        <span className="font-light italic">team?</span>
                    </h2>
                    <p className="font-chivo font-light text-[15px] mt-4 leading-[1.7]" style={{ color: 'rgba(13,31,58,0.6)' }}>
                        Whether you're a brand looking for a manufacturing partner or a professional wanting to join the team — we'd love to hear from you.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <a href="#contact" className="font-chivo font-bold text-sm px-8 py-3.5 rounded-lg text-white text-center transition-transform duration-300 hover:-translate-y-0.5"
                        style={{ background: '#0D1F3A' }}>
                        Partner With Us →
                    </a>
                    <a href="#" className="font-chivo font-bold text-sm px-8 py-3.5 rounded-lg text-center transition-all duration-300 hover:border-blue-deep"
                        style={{ background: 'transparent', border: '1px solid rgba(13,31,58,0.3)', color: '#0D1F3A' }}>
                        View Open Roles
                    </a>
                </div>
            </div>
        </section>
    );
}

// ─── PAGE ───
export default function Leadership() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-[68px]">
                <HeroSection />
                <BoardSection />
                <ExecutiveSection />
                {/* <ExperienceSection /> */}
                <PrinciplesSection />
                <CTASection />
            </main>
            <FooterSection />
        </div>
    );
}