const productLinks = [
  { label: 'Smart Displays', href: '/products' },
  { label: 'AI Robotics', href: '/products' },
  { label: 'Smart Audio', href: '/products' },
  { label: 'New Energy', href: '/products' },
  { label: 'Digital Signage', href: '/products' }
];
const companyLinks = [
  // { label: 'About', href: '/#about' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Our Journey', href: '/#timeline' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Infrastructures', href: '/infrastructure' },
  { label: 'Contact', href: '/contact' }
];
const mfgLinks = [
  { label: 'Ahmedabad Facility', href: '/infrastructure' },
  { label: 'Greater Noida', href: '/infrastructure' },
  { label: 'Global Sourcing', href: '/infrastructure' }
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-chivo font-bold text-sm text-primary-foreground/40 uppercase tracking-wider mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="font-chivo font-light text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterSection() {
  return (
    <footer className="bg-wems-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-chivo font-black text-xl">
              {/* <span className="text-primary-foreground">WORLD</span>
              <span className="text-accent ml-0.5">EMS</span> */}
              <img src="./logos/WEMS_White.png" alt="" style={{height:'40px'}}/>
            </span>
            <p className="font-chivo font-light text-sm text-primary-foreground/40 mt-4 leading-relaxed">
              Your partner in next-generation electronics brand building. Precision. Innovation. Sustainability.
            </p>
            <div className="flex gap-2 mt-5">
              {['LinkedIn', 'X', 'YouTube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/40 hover:text-accent hover:bg-primary-foreground/10 transition-colors font-chivo text-xs font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Products" links={productLinks} />
          <LinkColumn title="Company" links={companyLinks} />
          <LinkColumn title="Manufacturing" links={mfgLinks} />
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="font-chivo font-light text-xs text-primary-foreground/30">
            © 2025 World EMS. All rights reserved.
          </span>
          <span className="font-chivo font-light text-xs text-primary-foreground/30 text-right">
            Survey No. 644, Near Sahajanand Farm, Ghumasan Railway Station, Village Ghumasan, Taluka Kadi, Dangarva, Gujarat – 384450
          </span>
        </div>
      </div>
    </footer>
  );
}
