import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

// Gallery images
import heroFactory from '@/assets/hero-factory.jpg';
import heroFloor from '@/assets/hero-manufacturing-floor.jpg';
import productSmartDisplay from '@/assets/product-smart-display.jpg';
import productRobotics from '@/assets/product-robotics.jpg';
import productAudio from '@/assets/product-audio.jpg';
import productEnergy from '@/assets/product-energy.jpg';
import productSignage from '@/assets/product-signage.jpg';
import galleryDisplayQc from '@/assets/gallery-display-qc.jpg';
import galleryDisplayFinished from '@/assets/gallery-display-finished.jpg';
import galleryDisplayTesting from '@/assets/gallery-display-testing.jpg';
import galleryRobotArm from '@/assets/gallery-robot-arm.jpg';
import galleryRobotHumanoid from '@/assets/gallery-robot-humanoid.jpg';
import galleryRobotPcb from '@/assets/gallery-robot-pcb.jpg';
import galleryRobotMedical from '@/assets/gallery-robot-medical.jpg';
import galleryAudioSpeaker from '@/assets/gallery-audio-speaker.jpg';
import galleryAudioSoundbar from '@/assets/gallery-audio-soundbar.jpg';
import galleryAudioTesting from '@/assets/gallery-audio-testing.jpg';
import galleryAudioComponents from '@/assets/gallery-audio-components.jpg';
import galleryEnergyCharging from '@/assets/gallery-energy-charging.jpg';
import galleryEnergyBattery from '@/assets/gallery-energy-battery.jpg';
import galleryEnergyLab from '@/assets/gallery-energy-lab.jpg';
import galleryEnergyConstruction from '@/assets/gallery-energy-construction.jpg';
import gallerySignageRetail from '@/assets/gallery-signage-retail.jpg';
import gallerySignageClassroom from '@/assets/gallery-signage-classroom.jpg';
import gallerySignageVideowall from '@/assets/gallery-signage-videowall.jpg';
import gallerySignageAirport from '@/assets/gallery-signage-airport.jpg';
import facilityAhmedabad from '@/assets/facility-ahmedabad.jpg';
import facilityNoida from '@/assets/facility-noida.jpg';
import certSolar from '@/assets/cert-solar.jpg';

interface CategoryData {
  id: string;
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  dark: boolean;
  capacityNumber: string;
  capacityUnit: string;
  capacityLabel: string;
  gallery: { src: string; label: string }[];
  products: { name: string; spec: string; badge: string; image: string }[];
  useCases: { icon: string; label: string }[];
  cta: { title: string; subtitle: string; ghostLabel: string; primaryLabel: string };
  sidebarLabel: string;
  sidebarSub: string;
}

const categories: CategoryData[] = [
  {
    id: 'smart-displays',
    icon: '📺',
    eyebrow: 'Core Business',
    title: 'Smart Displays',
    description: "Our Smart Display platform supports a wide spectrum of screen sizes and formats, from 24” to 115” and from LED TVs to IFPDs and Digital Signages, engineered for both consumer and commercial applications.",
    dark: false,
    capacityNumber: '600K',
    capacityUnit: 'units per year',
    capacityLabel: 'Peak production capacity',
    gallery: [
      { src: './Product_page/Smart_Displays/manufacturingfloor.png', label: 'Manufacturing Floor' },
      { src: galleryDisplayFinished, label: 'Finished LED TVs' },
      { src: './Product_page/Smart_Displays/Quality.png', label: 'Quality Control' },
      { src: './Product_page/Smart_Displays/Display_Testing.png', label: 'Display Testing Lab' },
      // { src: productSmartDisplay, label: 'Production Line' },
    ],
    products: [
      { name: 'Smart LED TVs', spec: 'Our smart LED TVs run on Android or Linux and come in sizes from 24” to 115”. We offer OEM and ODM options to make them fit different needs, with full quality checks and compliance with regulations.', badge: '600K units/yr', image: './Home_Page_Images/tv.png' },
      { name: 'Digital Signage & IFPDs', spec: 'We manufacture digital signage from 32" to 75" and Interactive Flat Panel Displays from 55" to 75", built for enterprise, education, retail, and government use, with ODM support and BIS certification.', badge: 'On order', image: './Product_page/Smart_Displays/ifpd.png' },
      { name: 'Smart TV Platform', spec: 'Our smart TV platform is easy to use and full of features like app integration, voice control, and automatic updates. It can be scaled for OEM and ODM production and provides a modern and smooth user experience.', badge: '150K target FY27', image: './Product_page/Smart_Displays/smarttv.png' },
    ],
    useCases: [
      { icon: '🏪', label: 'Regional Electronics Brands' },
      { icon: '🌍', label: 'Global OEM Partners' },
      { icon: '🏨', label: 'Hospitality Chains' },
      { icon: '🏢', label: 'Corporate Procurement' },
      { icon: '🛒', label: 'Retail & E-commerce Brands' },
    ],
    cta: { title: 'Discover Next-Generation Display Production', subtitle: "Share your volume and size requirements — we'll respond within 24 hours.", ghostLabel: 'Download Spec Sheet', primaryLabel: 'Request a Quote →' },
    sidebarLabel: 'Smart Displays',
    sidebarSub: 'TV · IFPD',
  },
  {
    id: 'robotics',
    icon: '🤖',
    eyebrow: 'Future Tech',
    title: 'AI Robotics',
    description: 'Joint Design Manufacturing (JDM) in partnership with Kody. Industrial robotic arms, medical robots, surveillance systems, and cleaning robots were developed through collaborative design and built for scalable production.',
    dark: true,
    capacityNumber: '5,000',
    capacityUnit: 'units per year',
    capacityLabel: 'Current production run',
    gallery: [
      { src: './Product_page/AI_Robotics/img1.png', label: '' },
      { src: './Product_page/AI_Robotics/img2.png', label: '' },
      { src: './Product_page/AI_Robotics/img3.png', label: '' },
      { src: './Product_page/AI_Robotics/img4.png', label: '' },
      // { src: './Product_page/AI_Robotics/img5.png', label: '' },
    ],
    products: [
      { name: 'Odigo', spec: 'Odigo is an autonomous service robot designed for surveillance, assistance, and interactive engagement in commercial spaces. Built for reliable mobility, real-time monitoring, and scalable deployment.', badge: 'Custom runs', image: './Product_page/AI_Robotics/img4.png' },
      { name: 'Medical Robots', spec: 'Medical robots designed to monitor and record patient vitals with accuracy and consistency. Built to support healthcare teams with reliable, real-time health data.', badge: 'Under development', image: './Product_page/AI_Robotics/img6.png' },
      { name: 'Vulcan', spec: 'The Vulcan Robot is an industrial robotic arm designed for precision automation in manufacturing and assembly. Built for reliability and scalable deployment across high-volume production environments.', badge: 'Available now', image: './Product_page/AI_Robotics/img2.png' },
    ],
    useCases: [
      { icon: '🏭', label: 'Manufacturing Plants' },
      { icon: '🏥', label: 'Hospitals & Healthcare' },
      { icon: '🔒', label: 'Security & Surveillance' },
      { icon: '🏬', label: 'Retail & Hospitality' },
      { icon: '✈️', label: 'Airports & Public Spaces' },
    ],
    cta: { title: 'Ready to explore robotics for your operations?', subtitle: "Collaborate with our R&D team from concept to deployment.", ghostLabel: 'Download Brochure', primaryLabel: 'Start a Conversation →' },
    sidebarLabel: 'AI Robotics',
    sidebarSub: 'Industrial · Medical',
  },
  {
    id: 'audio',
    icon: '🔊',
    eyebrow: 'Consumer Ecosystem',
    title: 'Smart Audio',
    description: 'Smart audio systems for consumer and commercial use, are manufactured at our Greater Noida facility. Soundbars, wireless speakers, home theatre systems, and professional audio solutions are designed for dependable performance and scalable production.',
    dark: false,
    capacityNumber: '120K',
    capacityUnit: 'sq. ft. facility',
    capacityLabel: 'Greater Noida campus',
    gallery: [
      { src: galleryAudioSpeaker, label: 'Smart Wireless Speaker' },
      { src: './Product_page/Audio/audio1.png', label: 'Home Theatre System' },
      { src: facilityNoida, label: 'Assembly Line' },
      // { src: galleryAudioComponents, label: 'Speaker Components' },
      { src: galleryAudioTesting, label: 'Audio Testing Room' },
    ],
    products: [
      { name: 'Smart Wireless Speakers', spec: 'Bluetooth and Wi-Fi-enabled speakers with voice assistant support. Available in multiple sizes and power options.', badge: 'Volume pricing', image: galleryAudioSpeaker },
      { name: 'Soundbars & Home Theatre', spec: 'Home audio systems from 2.0 to 5.1 channel setups. Supports Dolby and DTS. Available for OEM and ODM manufacturing.', badge: 'Available now', image: galleryAudioSoundbar },
      { name: 'Home Audio & Party Speakers ', spec: 'Home audio systems and party speakers designed for powerful, room-filling sound. Built for consistent performance, modern features, and scalable manufacturing.', badge: 'B2B orders', image: galleryAudioTesting },
    ],
    useCases: [
      { icon: '📱', label: 'Consumer Electronics Brands' },
      { icon: '📺', label: 'Smart TV Bundling Partners' },
      { icon: '🏨', label: 'Hospitality & Hotels' },
      { icon: '🎓', label: 'Education Institutions' },
      { icon: '🏢', label: 'Enterprise & Offices' },
    ],
    cta: { title: 'Looking for an audio manufacturing partner?', subtitle: "ODM from concept, or OEM from your spec — we do both.", ghostLabel: 'Download Spec Sheet', primaryLabel: 'Request a Quote →' },
    sidebarLabel: 'Smart Audio',
    sidebarSub: 'Consumer · Pro',
  },
  {
    id: 'energy',
    icon: '⚡',
    eyebrow: 'Upcoming Category',
    title: 'Next-Generation Tech',
    description: "Built to support new business segments such as EV systems, solar solutions, air purification, and other future-focused categories.",
    dark: true,
    capacityNumber: '200K',
    capacityUnit: 'sq. ft. expansion',
    capacityLabel: 'Dedicated new facility',
    gallery: [
      { src: galleryEnergyCharging, label: 'EV Charging Station' },
      { src: certSolar, label: 'Solar Panel Installation' },
      { src: galleryEnergyBattery, label: 'Battery Pack Assembly' },
      { src: galleryEnergyConstruction, label: 'New Facility Construction' },
      // { src: galleryEnergyLab, label: 'R&D Laboratory' },
    ],
    products: [
      { name: 'EV Charging Stations', spec: 'Advanced stations combining speed, connectivity, and reliability to support growing electric vehicle networks.', badge: 'Coming soon', image: galleryEnergyCharging },
      { name: 'Battery Management Systems', spec: 'Systems that help run operations smoothly and make work easier for everyone.', badge: 'In development', image: galleryEnergyBattery },
      { name: 'Solar-Integrated Power Solutions', spec: 'Integrated solar solutions that combine clean energy with reliable power management.', badge: 'Coming FY26', image: certSolar },
    ],
    useCases: [
      { icon: '🚗', label: 'EV & Automotive Brands' },
      { icon: '🏗️', label: 'Infrastructure Developers' },
      { icon: '🏠', label: 'Housing & Real Estate' },
      { icon: '📡', label: 'Telecom & Data Centres' },
    ],
    cta: { title: 'Connect with us', subtitle: "Register your interest now — be first in line when production begins.", ghostLabel: 'Learn More', primaryLabel: 'Register Interest →' },
    sidebarLabel: 'Next-Generation Tech',
    sidebarSub: 'EV · Battery',
  },
  // {
  //   id: 'signage',
  //   icon: '🖥️',
  //   eyebrow: 'B2B Growth Engine',
  //   title: 'Digital Signage & IFPDs',
  //   description: 'Commercial-grade digital signage from 32"–75" and Interactive Flat Panel Displays from 55"–75". Built for enterprise, education, retail, and government — with full ODM capability and BIS certification.',
  //   dark: false,
  //   capacityNumber: '24K',
  //   capacityUnit: 'units per year',
  //   capacityLabel: '18K signage + 6K IFPDs',
  //   gallery: [
  //     { src: gallerySignageRetail, label: 'Retail Digital Signage' },
  //     { src: gallerySignageClassroom, label: 'IFPD in Classroom' },
  //     { src: productSignage, label: 'Display Manufacturing' },
  //     { src: gallerySignageVideowall, label: 'Office Video Wall' },
  //     { src: gallerySignageAirport, label: 'Airport Signage' },
  //   ],
  //   products: [
  //     { name: 'Digital Signage (32"–75")', spec: 'Commercial displays with 16/7 and 24/7 operation rating. Built-in media player, CMS compatible. BIS certified.', badge: '18,000 units/yr', image: gallerySignageRetail },
  //     { name: 'IFPD (55"–75")', spec: 'Interactive Flat Panel Displays with 20-point touch, 4K resolution, built-in Android OS and whiteboarding software.', badge: '6,000 units/yr', image: gallerySignageClassroom },
  //     { name: 'Video Wall Solutions', spec: 'Ultra-narrow bezel video wall panels for control rooms, retail, and corporate lobbies. Custom configurations.', badge: 'On order', image: gallerySignageVideowall },
  //   ],
  //   useCases: [
  //     { icon: '🎓', label: 'Schools & Universities' },
  //     { icon: '🏛️', label: 'Government & Public Sector' },
  //     { icon: '🏪', label: 'Retail Chains' },
  //     { icon: '🏨', label: 'Hotels & Hospitality' },
  //     { icon: '🏥', label: 'Hospitals & Healthcare' },
  //     { icon: '✈️', label: 'Airports & Transit' },
  //   ],
  //   cta: { title: 'Need commercial display solutions?', subtitle: "Institutional pricing and bulk order capability available.", ghostLabel: 'Download Catalogue', primaryLabel: 'Request a Quote →' },
  //   sidebarLabel: 'Digital Signage',
  //   sidebarSub: '32"–75"',
  // },
];

const jumpPills = [
  { id: 'smart-displays', icon: '📺', label: 'Smart Displays', badge: 'CORE' },
  { id: 'robotics', icon: '🤖', label: 'AI Robotics', badge: 'FUTURE' },
  { id: 'audio', icon: '🔊', label: 'Smart Audio', badge: '' },
  { id: 'energy', icon: '⚡', label: 'Next-Gen Tech', badge: 'NEW' },
  // { id: 'signage', icon: '🖥️', label: 'Digital Signage & IFPD', badge: '' },
];

// ─── Sub-components ───

function GalleryImage({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative overflow-hidden group aspect-square rounded-lg">
      <img
        src={src}
        alt={label}
        loading="lazy"
        className="w-full h-full object-cover brightness-[0.9] group-hover:brightness-100 group-hover:scale-[1.06] transition-all duration-500 ease-out rounded-lg"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D1F3A]/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-chivo font-bold text-[11px] uppercase text-white tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
}

function ProductCard({ product, dark }) {
  return (
    <div
      className={`group rounded-xl overflow-hidden border 
                  transition-all duration-300 hover:-translate-y-1 
                  flex flex-col h-full
                  ${dark
          ? 'bg-white/5 border-white/10 hover:border-wems-yellow hover:shadow-lg hover:shadow-yellow-500/5'
          : 'bg-white border-grey-200 hover:border-blue-light hover:shadow-lg'
        }`}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h4 className={`font-chivo font-bold text-base mb-1 ${dark ? 'text-white' : 'text-blue-deep'}`}>
          {product.name}
        </h4>

        <p className={`font-chivo font-light text-xs leading-relaxed mb-3.5 ${dark ? 'text-white/50' : 'text-grey-400'}`}>
          {product.spec}
        </p>

        <div className={`flex items-center justify-between pt-3 border-t mt-auto ${dark ? 'border-white/10' : 'border-grey-200'}`}>
          <span className="font-chivo font-bold text-[11px] text-wems-yellow">
            {product.badge}
          </span>

          <a href="#contact" className={`font-chivo font-bold text-[11px] group/link flex items-center gap-1 ${dark ? 'text-white/50 hover:text-wems-yellow' : 'text-blue-mid hover:text-blue-deep'}`}>
            Enquire
            <span className="inline-block group-hover/link:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ cat, index }: { cat: CategoryData; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const bgClass = cat.dark ? 'bg-blue-deep' : index % 2 === 0 ? 'bg-white' : 'bg-grey-100';

  return (
    <section
      id={cat.id}
      ref={ref}
      className={`${bgClass} py-20 px-8 lg:px-14`}
    >
      {/* A. Header */}
      <div className={`grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-xl ${cat.dark ? 'bg-white/[0.08]' : 'bg-blue-tint'}`}>
              {cat.icon}
            </div>
            <span className={`font-chivo font-bold text-[11px] uppercase tracking-[2px] ${cat.dark ? 'text-wems-yellow' : 'text-blue-mid'}`}>
              — {cat.eyebrow}
            </span>
          </div>
          <h2 className={`font-chivo font-black text-[40px] tracking-tight leading-tight mb-3 ${cat.dark ? 'text-white' : 'text-blue-deep'}`}>
            {cat.title}
          </h2>
          <p className={`font-chivo font-light text-[15px] leading-[1.75] max-w-[560px] ${cat.dark ? 'text-white/50' : 'text-[#4A5568]'}`}>
            {cat.description}
          </p>
        </div>
        <div className={`rounded-xl p-5 text-right border ${cat.dark ? 'bg-white/5 border-white/10' : 'bg-blue-pale border-grey-200'}`}>
          <div className="font-chivo font-black text-[32px] text-wems-yellow">{cat.capacityNumber}</div>
          <div className={`font-chivo font-bold text-[13px] ${cat.dark ? 'text-white/50' : 'text-blue-mid'}`}>{cat.capacityUnit}</div>
          <div className="font-chivo font-light text-[11px] text-grey-400 mt-1">{cat.capacityLabel}</div>
        </div>
      </div>

      {/* B. Gallery */}
      <div className={`mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] mb-[3px]">
          {cat.gallery.map((img) => (
            <div key={img.label}>
              <GalleryImage src={img.src} label={img.label} />
            </div>
          ))}
        </div>
      </div>

      {/* C. Products Grid */}
      <div className={`mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-5 h-[3px] bg-wems-yellow" />
          <span className={`font-chivo font-bold text-[10px] uppercase tracking-[2px] ${cat.dark ? 'text-white/40' : 'text-blue-mid'}`}>
            Products in this category
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cat.products.map((p, i) => (
            <div key={p.name} style={{ transitionDelay: `${200 + i * 80}ms` }} className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <ProductCard product={p} dark={cat.dark} />
            </div>
          ))}
        </div>
      </div>

      {/* D. Use Cases */}
      <div className={`mb-12 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-5 h-[3px] bg-wems-yellow" />
          <span className={`font-chivo font-bold text-[10px] uppercase tracking-[2px] ${cat.dark ? 'text-white/40' : 'text-blue-mid'}`}>
            Who it's for
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {cat.useCases.map((uc) => (
            <span
              key={uc.label}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border font-chivo font-medium text-[13px] transition-colors ${cat.dark
                ? 'bg-white/[0.06] border-white/10 text-white/70 hover:bg-[rgba(255,200,24,0.1)] hover:border-[rgba(255,200,24,0.3)] hover:text-wems-yellow'
                : 'bg-blue-pale border-grey-200 text-blue-deep hover:bg-blue-tint hover:border-blue-light'
                }`}
            >
              <span>{uc.icon}</span> {uc.label}
            </span>
          ))}
        </div>
      </div>

      {/* E. CTA Bar */}
      <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-xl p-7 border transition-all duration-700 delay-[400ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } ${cat.dark ? 'bg-white/[0.04] border-white/10' : 'bg-blue-pale border-grey-200'}`}>
        <div>
          <h4 className={`font-chivo font-bold text-lg ${cat.dark ? 'text-white' : 'text-blue-deep'}`}>{cat.cta.title}</h4>
          <p className="font-chivo font-light text-[13px] text-grey-400 mt-1">{cat.cta.subtitle}</p>
        </div>
        <div className="flex gap-3 shrink-0">
          {/* <a href="#" className={`font-chivo font-bold text-[13px] px-5 py-2.5 rounded-lg border transition-colors ${cat.dark
            ? 'border-white/20 text-white/70 hover:bg-white/10'
            : 'border-grey-200 text-blue-deep hover:bg-blue-tint'
            }`}>
            {cat.cta.ghostLabel}
          </a> */}
          <a href="#contact" className="font-chivo font-bold text-[13px] px-5 py-2.5 rounded-lg bg-wems-yellow text-blue-deep hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
            {cat.cta.primaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ───

export default function Products() {
  // start with no active category so the first item isn't forced active
  const [activeId, setActiveId] = useState<string | null>(null);

  // IntersectionObserver for sidebar active state
  useEffect(() => {
    const sectionEls = categories.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    if (sectionEls.length === 0) return;

    // choose the currently most-visible section (largest intersectionRatio)
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topEntry = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
        setActiveId(topEntry.target.id);
      },
      // multiple thresholds so intersectionRatio updates as sections scroll
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-68px 0px -40% 0px' }
    );

    sectionEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar />
      <section
        className="relative pt-[68px] bg-blue-deep overflow-hidden"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,200,24,0.02) 60px, rgba(255,200,24,0.02) 61px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wems-yellow font-chivo font-bold text-[12px] text-blue-deep mb-6">
              Our Products
            </span>
            <h1 className="font-chivo font-black text-[30px] lg:text-[40px] text-white leading-[1.1] tracking-[-1.5px] mb-5">
              Multi-Category Manufacturing {' '}
              <span className="font-light italic text-white/50">Excellence.</span>
            </h1>
            <p className="font-chivo font-light text-[15px] text-white/50 leading-[1.75] max-w-lg">
              From Smart Displays to AI Robotics — every product category below is manufactured in-house with ODM/OEM precision at our Indian facilities.
            </p>
          </div>

          {/* Right — jump pills */}
          <div>
            <span className="font-chivo font-bold text-[11px] uppercase tracking-[1.5px] text-white/30 mb-4 block">
              Jump to category
            </span>
            <div className="grid grid-cols-2 gap-2">
              {jumpPills.map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => { setActiveId(pill.id); scrollTo(pill.id); }}
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 bg-white/[0.06] border-white/[0.12] text-white/70 hover:bg-wems-yellow hover:text-blue-deep hover:border-wems-yellow"
                >
                  <span>{pill.icon}</span>
                  <span className="font-chivo font-bold text-[13px]">{pill.label}</span>
                  {pill.badge && (
                    <span className="font-chivo font-bold text-[9px] uppercase px-1.5 py-0.5 rounded bg-[rgba(255,200,24,0.2)] text-wems-yellow group-hover:bg-[rgba(13,31,58,0.15)] group-hover:text-blue-deep transition-colors">
                      {pill.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BODY: Sidebar + Content ─── */}
      <div className="flex">
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block w-[220px] shrink-0 bg-blue-pale border-r border-grey-200 sticky top-[68px] h-[calc(100vh-68px)] overflow-y-auto">
          <div className="py-10">
            <span className="block px-5 font-chivo font-bold text-[9px] uppercase tracking-[2px] text-grey-400 mb-4">
              Categories
            </span>
            <nav className="space-y-0.5">
              {categories.map((cat, i) => (
                <div key={cat.id}>
                  {i === 4 && <div className="mx-5 my-2 border-t border-grey-200" />}
                  <button
                    onClick={() => { setActiveId(cat.id); scrollTo(cat.id); }}
                    className={`w-full text-left flex items-center gap-3 pl-3 pr-4 py-2.5 border-l-[3px] transition-all ${activeId === cat.id
                      ? 'bg-white border-wems-yellow'
                      : 'border-transparent hover:bg-blue-tint hover:border-blue-light'
                      }`}
                  >
                    <div className={`w-[30px] h-[30px] rounded-lg flex items-center justify-center text-sm shrink-0 ${activeId === cat.id ? 'bg-[rgba(255,200,24,0.12)]' : 'bg-blue-tint'
                      }`}>
                      {cat.icon}
                    </div>
                    <div>
                      <div className="font-chivo font-bold text-[12px] text-blue-deep">{cat.sidebarLabel}</div>
                      <div className="font-chivo font-light text-[10px] text-grey-400">{cat.sidebarSub}</div>
                    </div>
                  </button>
                </div>
              ))}
            </nav>
            <div className="px-6 mt-6">
              <a
                href="#contact"
                className="block w-full text-center font-chivo font-bold text-[12px] bg-wems-yellow text-blue-deep py-2.5 rounded-lg hover:shadow-md transition-shadow"
              >
                Request a Quote →
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {categories.map((cat, i) => (
            <CategorySection key={cat.id} cat={cat} index={i} />
          ))}
        </main>
      </div>

      <FooterSection />
    </>
  );
}
