import { Hero } from '@/components/sections/Hero';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { TrustSection } from '@/components/sections/TrustSection';
import { RevenueFeatures } from '@/components/sections/RevenueFeatures';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <TrustSection />
      <RevenueFeatures />
    </>
  );
}
