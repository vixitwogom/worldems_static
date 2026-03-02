import { useScrollReveal } from '@/hooks/useScrollReveal';
import productDisplay from '@/assets/product-smart-display.jpg';
import productRobotics from '@/assets/product-robotics.jpg';
import productAudio from '@/assets/product-audio.jpg';
import productEnergy from '@/assets/product-energy.jpg';
import productSignage from '@/assets/product-signage.jpg';
import ScrollReveal from './ScrollReveal';

interface ProductCardProps {
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  tall?: boolean;
}

function ProductCard({ image, tag, title, subtitle, tall }: ProductCardProps) {
  return (
    <div className={`reveal relative overflow-hidden rounded-xl group cursor-pointer ${tall ? 'row-span-2 min-h-[400px] md:min-h-[520px]' : 'min-h-[350px]'}`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--blue-deep)/0.9)] via-[hsl(var(--blue-deep)/0.3)] to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <span className="font-chivo font-bold text-[10px] uppercase tracking-[2px] text-accent bg-accent/20 px-3 py-1 rounded-full w-fit mb-3">
          {tag}
        </span>
        <h3 className="font-chivo font-black text-xl md:text-2xl text-primary-foreground">{title}</h3>
        <p className="font-chivo font-light text-sm text-primary-foreground/55 mt-1">{subtitle}</p>
        <span className="font-chivo font-bold text-sm text-accent mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Explore range →
        </span>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const ref = useScrollReveal();

  return (
    <>
      <section id="products" className="bg-card py-20 md:py-10" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="reveal eyebrow text-blue-mid mb-3 block">What We Make</span>
          <h2 className="reveal font-chivo font-black text-3xl md:text-5xl text-blue-deep tracking-tight mb-12">
            Built Across Verticals
          </h2>

          {/* Primary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] mb-[3px]">
            <ProductCard
              image={'./Home_Page_Images/tv.png'}
              tag="Core Business"
              title="Smart Displays"
              subtitle="LED & Smart TVs from 32″ to 115″ — ODM design to delivery"
              tall
            />
            <div className="grid grid-rows-2 gap-[3px]">
              <ProductCard
                image={'./Home_Page_Images/airobotics.png'}
                tag="Future Tech"
                title="AI Robotics"
                subtitle="Service robots, medical robotics & industrial automation"
              />
              <ProductCard
                image={productAudio}
                tag="Consumer Ecosystem"
                title="Smart Audio"
                subtitle="Bluetooth speakers, soundbars & home audio systems"
              />
            </div>
          </div>

          {/* Secondary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
            <ProductCard
              image={productEnergy}
              tag="Upcoming"
              title="Next Gen Electronics Systems"
              subtitle="EV chargers, battery management & solar inverters"
            />
            <ProductCard
              image={productSignage}
              tag="B2B Growth"
              title="Digital Signage & IFPDs"
              subtitle="Commercial displays, interactive flat panels & kiosks"
            />
          </div>
        </div>
      </section>
      <section className="py-20 md:py-15 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-[#007fff] font-chivo tracking-widest uppercase">Industry Context</span>
              <h2 className="font-chivo text-3xl md:text-4xl font-bold text-foreground mt-3">
                What We Stand On
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Three core principles that define how we operate, scale, and deliver.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Design-Led OEM / ODM", desc: "End-to-end product development capability from concept and engineering to production readiness. Enables brands to innovate while leveraging manufacturing precision." },
              { num: "02", title: "Scalable Stability", desc: "Our infrastructure, supply chain integration, and production planning are designed to support high-volume manufacturing without compromising consistency. As demand scales, performance remains steady; because stability is engineered into our foundation." },
              { num: "03", title: "From Build to Beyond", desc: "Comprehensive lifecycle management including testing & validation, packaging, reverse logistics, repair, and refurbishment, extending value beyond production." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-8 bg-card rounded-lg shadow-card h-full border border-border/50 hover:shadow-card-hover transition-all duration-300">
                  <span className="font-heading text-4xl font-chivo font-bold text-[#007fff]/20">{item.num}</span>
                  <h3 className="font-heading font-bold font-chivo text-xl text-card-foreground mt-3 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-chivo leading-relaxed text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
