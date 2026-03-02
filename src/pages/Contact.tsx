import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const contactRows = [
    {
        emoji: '📞',
        label: 'Phone',
        value: '+91 92658 88793',
        sub: 'Mon–Sat, 9am–6pm IST',
        href: 'tel:+919265888793',
    },
    {
        emoji: '✉️',
        label: 'Email',
        value: 'info@worldems.in',
        sub: 'We respond within 24 hours',
        href: 'mailto:info@worldems.in',
    },
    {
        emoji: '🌐',
        label: 'Website',
        value: 'worldems.in',
        sub: 'Explore our full portfolio',
        href: 'https://worldems.in',
        external: true,
    },
    {
        emoji: '📍',
        label: 'Registered Address',
        value: 'Ahmedabad, Gujarat',
        sub: 'Survey No. 644, Near Sahajanand Farm, Ghumasan, Taluka Kadi — 384450',
    },
];

const categoryOptions = [
    'Smart Displays (LED TV / Large Format)',
    'AI Robotics',
    'Smart Audio',
    'New Energy Systems',
    'Digital Signage & IFPDs',
    'OEM / ODM Partnership',
    'Investment Enquiry',
    'General Enquiry',
];

const quickStrip = [
    { emoji: '⏱️', title: 'Response Time', value: 'We respond to all enquiries within 24 business hours.' },
    { emoji: '🏭', title: 'Facility Visits', value: 'Schedule a tour of our Ahmedabad or Greater Noida facilities.' },
    { emoji: '📋', title: 'Capabilities Deck', value: 'capabilities' },
    { emoji: '🤝', title: 'Partnerships', value: 'OEM, ODM & JDM partnerships open. Reach out to our CBO directly.' },
];

const subtleLineTexture = 'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,200,24,0.02) 60px, rgba(255,200,24,0.02) 61px)';

function useRevealOnScroll() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const children = el.querySelectorAll('.creveal');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        target.style.opacity = '1';
                        target.style.transform = 'translateY(0)';
                        observer.unobserve(target);
                    }
                });
            },
            { threshold: 0.08 }
        );
        children.forEach((child, i) => {
            const el = child as HTMLElement;
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = `opacity 0.5s ease-out ${i * 0.08}s, transform 0.5s ease-out ${i * 0.08}s`;
            observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);
    return ref;
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '', company: '', email: '', phone: '', category: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    const containerRef = useRevealOnScroll();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputBase = "font-chivo text-sm w-full outline-none transition-all duration-200";
    const inputStyle = `${inputBase} border-[1.5px] rounded-lg py-[13px] px-4`;

    return (
        <>
            <Navbar />
            <div ref={containerRef}>
                {/* Two-column hero split */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-2"
                    style={{ marginTop: 68, minHeight: 'calc(100vh - 68px)' }}
                >
                    {/* LEFT COLUMN */}
                    <div
                        className="flex flex-col justify-between"
                        style={{
                            background: `${subtleLineTexture}, #0D1F3A`,
                            padding: '80px 64px',
                        }}
                    >
                        {/* Top content */}
                        <div className="creveal">
                            {/* Eyebrow */}
                            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
                                style={{ background: 'rgba(255,200,24,0.12)', border: '1px solid rgba(255,200,24,0.2)' }}>
                                <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
                                <span className="font-chivo font-bold text-[10px] uppercase tracking-[1.5px]" style={{ color: '#FFC818' }}>
                                    Get In Touch
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="font-chivo font-black text-white leading-[1.12] mb-6"
                                style={{ fontSize: 56, letterSpacing: -2 }}>
                                Let's build
                                <br />
                                <span className="contact-rule-wrap inline-block relative">
                                    <span className="absolute left-0 h-1 bg-accent origin-left" style={{
                                        width: 64,
                                        animation: 'draw-line 0.7s ease-out 0.4s both',
                                    }} />
                                    something
                                </span>
                                <br />
                                <span className="font-light italic" style={{ color: 'rgba(255,255,255,0.5)' }}>together.</span>
                            </h1>

                            <p className="font-chivo font-light text-base leading-[1.75] mb-14" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 400 }}>
                                Whether you're a brand looking for a manufacturing partner or an investor wanting to learn more — we're ready to talk.
                            </p>
                        </div>
                        <div className="creveal flex flex-col">
                            {contactRows.map((row, i) => {
                                const isHovered = hoveredRow === i;
                                const Wrapper = row.href ? 'a' : 'div';
                                const linkProps = row.href
                                    ? { href: row.href, ...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
                                    : { style: { cursor: 'default' } };

                                return (
                                    <Wrapper
                                        key={i}
                                        {...(linkProps as any)}
                                        className="flex items-start gap-4 no-underline transition-all duration-200"
                                        style={{
                                            padding: '22px 0',
                                            paddingLeft: isHovered ? 8 : 0,
                                            borderTop: '1px solid rgba(255,255,255,0.06)',
                                            ...(i === contactRows.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.06)' } : {}),
                                        }}
                                        onMouseEnter={() => setHoveredRow(i)}
                                        onMouseLeave={() => setHoveredRow(null)}
                                    >
                                        <div
                                            className="flex items-center justify-center flex-shrink-0 transition-all duration-200"
                                            style={{
                                                width: 44, height: 44, borderRadius: 10, fontSize: 18,
                                                background: isHovered ? 'rgba(255,200,24,0.12)' : 'rgba(255,255,255,0.06)',
                                                border: `1px solid ${isHovered ? 'rgba(255,200,24,0.3)' : 'rgba(255,255,255,0.1)'}`,
                                            }}
                                        >
                                            {row.emoji}
                                        </div>
                                        <div>
                                            <div className="font-chivo font-bold uppercase tracking-[1.5px] mb-1"
                                                style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>
                                                {row.label}
                                            </div>
                                            <div className="font-chivo font-bold transition-colors duration-200"
                                                style={{ fontSize: 15, color: isHovered ? '#FFC818' : 'white' }}>
                                                {row.value}
                                            </div>
                                            <div className="font-chivo font-light mt-0.5"
                                                style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
                                                {row.sub}
                                            </div>
                                        </div>
                                    </Wrapper>
                                );
                            })}
                        </div>

                        {/* Social row */}
                        <div className="creveal flex gap-2 pt-7">
                            {[
                                { label: 'in', href: '#' },
                                { label: '𝕏', href: '#' },
                                { label: '▶', href: '#' },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    className="flex items-center justify-center font-chivo font-bold transition-all duration-200 no-underline"
                                    style={{
                                        width: 40, height: 40, borderRadius: 8,
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'rgba(255,255,255,0.4)',
                                        fontSize: 14,
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget;
                                        el.style.background = '#FFC818';
                                        el.style.borderColor = '#FFC818';
                                        el.style.color = '#0D1F3A';
                                        el.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget;
                                        el.style.background = 'rgba(255,255,255,0.05)';
                                        el.style.borderColor = 'rgba(255,255,255,0.1)';
                                        el.style.color = 'rgba(255,255,255,0.4)';
                                        el.style.transform = 'translateY(0)';
                                    }}
                                >
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col justify-center bg-white" style={{ padding: '80px 64px' }}>
                        <div className="creveal max-w-lg w-full mx-auto">
                            <h2 className="font-chivo font-black mb-1.5" style={{ fontSize: 28, color: '#0D1F3A', letterSpacing: -0.5 }}>
                                Send us an enquiry
                            </h2>
                            <p className="font-chivo font-light leading-relaxed mb-9" style={{ fontSize: 13, color: '#9AA3B2' }}>
                                Fill in the form below and our team will get back to you within one business day.
                            </p>

                            <form onSubmit={handleSubmit}>
                                {/* Row 1 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="font-chivo font-bold uppercase tracking-[1px] block mb-[7px]" style={{ fontSize: 10, color: '#9AA3B2' }}>Your Name</label>
                                        <input type="text" placeholder="Rahul Sharma" required value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className={inputStyle}
                                            style={{ background: '#F5F6F8', borderColor: '#E2E6EE', color: '#0D1F3A' }}
                                            onFocus={(e) => { e.target.style.borderColor = '#1B4F8A'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 3px rgba(27,79,138,0.08)'; }}
                                            onBlur={(e) => { e.target.style.borderColor = '#E2E6EE'; e.target.style.background = '#F5F6F8'; e.target.style.boxShadow = 'none'; }}
                                        />
                                    </div>
                                    <div>
                                        <label className="font-chivo font-bold uppercase tracking-[1px] block mb-[7px]" style={{ fontSize: 10, color: '#9AA3B2' }}>Company</label>
                                        <input type="text" placeholder="Brand Co. Ltd." value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className={inputStyle}
                                            style={{ background: '#F5F6F8', borderColor: '#E2E6EE', color: '#0D1F3A' }}
                                            onFocus={(e) => { e.target.style.borderColor = '#1B4F8A'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 3px rgba(27,79,138,0.08)'; }}
                                            onBlur={(e) => { e.target.style.borderColor = '#E2E6EE'; e.target.style.background = '#F5F6F8'; e.target.style.boxShadow = 'none'; }}
                                        />
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="font-chivo font-bold uppercase tracking-[1px] block mb-[7px]" style={{ fontSize: 10, color: '#9AA3B2' }}>Email Address</label>
                                        <input type="email" placeholder="rahul@brandco.com" required value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={inputStyle}
                                            style={{ background: '#F5F6F8', borderColor: '#E2E6EE', color: '#0D1F3A' }}
                                            onFocus={(e) => { e.target.style.borderColor = '#1B4F8A'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 3px rgba(27,79,138,0.08)'; }}
                                            onBlur={(e) => { e.target.style.borderColor = '#E2E6EE'; e.target.style.background = '#F5F6F8'; e.target.style.boxShadow = 'none'; }}
                                        />
                                    </div>
                                    <div>
                                        <label className="font-chivo font-bold uppercase tracking-[1px] block mb-[7px]" style={{ fontSize: 10, color: '#9AA3B2' }}>Phone Number</label>
                                        <input type="tel" placeholder="+91 98765 43210" value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className={inputStyle}
                                            style={{ background: '#F5F6F8', borderColor: '#E2E6EE', color: '#0D1F3A' }}
                                            onFocus={(e) => { e.target.style.borderColor = '#1B4F8A'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 3px rgba(27,79,138,0.08)'; }}
                                            onBlur={(e) => { e.target.style.borderColor = '#E2E6EE'; e.target.style.background = '#F5F6F8'; e.target.style.boxShadow = 'none'; }}
                                        />
                                    </div>
                                </div>

                                {/* Category dropdown */}
                                <div className="mb-4">
                                    <label className="font-chivo font-bold uppercase tracking-[1px] block mb-[7px]" style={{ fontSize: 10, color: '#9AA3B2' }}>I'm interested in</label>
                                    <div className="relative">
                                        <select
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className={`${inputStyle} appearance-none pr-9`}
                                            style={{ background: '#F5F6F8', borderColor: '#E2E6EE', color: formData.category ? '#0D1F3A' : '#9AA3B2' }}
                                            onFocus={(e) => { e.target.style.borderColor = '#1B4F8A'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 3px rgba(27,79,138,0.08)'; }}
                                            onBlur={(e) => { e.target.style.borderColor = '#E2E6EE'; e.target.style.background = '#F5F6F8'; e.target.style.boxShadow = 'none'; }}
                                        >
                                            <option value="" disabled>Select a category</option>
                                            {categoryOptions.map((opt) => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                        <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA3B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Textarea */}
                                <div className="mb-4">
                                    <label className="font-chivo font-bold uppercase tracking-[1px] block mb-[7px]" style={{ fontSize: 10, color: '#9AA3B2' }}>Tell us about your requirement</label>
                                    <textarea
                                        placeholder="E.g. We're looking to manufacture 10,000 units of 43&quot; Smart TVs per month under our brand..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className={`${inputStyle} resize-y`}
                                        style={{ background: '#F5F6F8', borderColor: '#E2E6EE', color: '#0D1F3A', minHeight: 100, lineHeight: 1.6 }}
                                        onFocus={(e) => { e.target.style.borderColor = '#1B4F8A'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 3px rgba(27,79,138,0.08)'; }}
                                        onBlur={(e) => { e.target.style.borderColor = '#E2E6EE'; e.target.style.background = '#F5F6F8'; e.target.style.boxShadow = 'none'; }}
                                    />
                                </div>

                                {/* Submit */}
                                {!submitted ? (
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 font-chivo font-bold text-sm text-white rounded-lg transition-all duration-200 mt-2 group"
                                        style={{ background: '#1B4F8A', padding: 15, borderRadius: 8 }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#0D1F3A';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(13,31,58,0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = '#1B4F8A';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        Send Enquiry
                                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                                    </button>
                                ) : (
                                    <div
                                        className="w-full text-center font-chivo font-bold text-sm rounded-lg mt-2"
                                        style={{ color: '#2D7A4F', background: 'rgba(45,122,79,0.08)', padding: 15, borderRadius: 8 }}
                                    >
                                        ✓ Enquiry sent! We'll be in touch within 24 hours.
                                    </div>
                                )}

                                <p className="font-chivo font-light text-center mt-3.5 leading-relaxed" style={{ fontSize: 11, color: '#9AA3B2' }}>
                                    By submitting this form you agree to our privacy policy. We never share your information with third parties.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* BOTTOM QUICK-INFO STRIP */}
                <div
                    style={{
                        background: `${subtleLineTexture}, #0D1F3A`,
                        padding: '48px 56px',
                    }}
                >
                    <div className="creveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {quickStrip.map((item, i) => (
                            <div
                                key={i}
                                className={`${i < 3 ? 'lg:border-r' : ''} ${i > 0 ? 'lg:pl-8' : ''}`}
                                style={{
                                    borderColor: 'rgba(255,255,255,0.06)',
                                    paddingTop: i > 0 ? undefined : undefined,
                                }}
                            >
                                <div className="text-[22px] mb-3">{item.emoji}</div>
                                <div className="font-chivo font-bold text-white mb-1" style={{ fontSize: 12 }}>{item.title}</div>
                                {item.value === 'capabilities' ? (
                                    <div className="font-chivo font-light leading-relaxed" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                                        Request our full capabilities brochure by emailing{' '}
                                        <a href="mailto:info@worldems.in" className="no-underline" style={{ color: '#FFC818' }}>info@worldems.in</a>
                                    </div>
                                ) : (
                                    <div className="font-chivo font-light leading-relaxed" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                                        {item.value}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <FooterSection />
            </div>
        </>
    );
}