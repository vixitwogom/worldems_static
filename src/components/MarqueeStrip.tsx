const items = [
  'Hyundai', 'Schneider Electric', 'Smart Displays', 'AI Robotics',
  'METEC Partnership', 'ODM Manufacturing', 'ISO Certified',
  'Make in India', 'PLI Scheme', 'Next Gen Electronics Systems',
];

export default function MarqueeStrip() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-6 whitespace-nowrap p-6">
      <span className="font-chivo font-bold uppercase text-xs tracking-[2px] text-primary-foreground/35">
        {item}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
    </span>
  ));

  return (
    <div className="bg-blue-deep py-4 overflow-hidden">
      <div className="animate-marquee flex items-center gap-6">
        {content}
        {content}
      </div>
    </div>
  );
}
