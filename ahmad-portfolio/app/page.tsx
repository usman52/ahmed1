import PageWrapper from '@/components/page-wrapper'
import HeroSection from '@/components/home/hero-section'
import ImpactSection from '@/components/home/impact-section'
import ServicesPreview from '@/components/home/services-preview'
import IndustriesPreview from '@/components/home/industries-preview'
import CTASection from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <ImpactSection />
      <ServicesPreview />
      <IndustriesPreview />
      <CTASection />
    </PageWrapper>
  )
}
