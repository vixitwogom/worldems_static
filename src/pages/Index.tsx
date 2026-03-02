import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MarqueeStrip from '@/components/MarqueeStrip';
import ProductsSection from '@/components/ProductsSection';
import ManufacturingSection from '@/components/ManufacturingSection';
import StrengthsSection from '@/components/StrengthsSection';
import TimelineSection from '@/components/TimelineSection';
import LeadershipSection from '@/components/LeadershipSection';
import CertificationsSection from '@/components/CertificationsSection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';
import StatsBar from '@/components/StatsBar';

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <StatsBar />
      <ProductsSection />
      <ManufacturingSection />
      <StrengthsSection />
      <TimelineSection />
      <LeadershipSection />
      <CertificationsSection />
      <CTASection />
      <FooterSection />
    </>
  );
};

export default Index;
