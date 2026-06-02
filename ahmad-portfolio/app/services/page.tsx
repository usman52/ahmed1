import PageWrapper from '@/components/page-wrapper'
import ServicesHero from '@/components/services/services-hero'
import ServicesList from '@/components/services/services-list'
import WhyWorkWithMe from '@/components/services/why-work-with-me'
import IndustriesServed from '@/components/services/industries-served'
import ServicesCTA from '@/components/services/services-cta'

export default function ServicesPage() {
  return (
    <PageWrapper>
      <ServicesHero />
      <ServicesList />
      <WhyWorkWithMe />
      <IndustriesServed />
      <ServicesCTA />
    </PageWrapper>
  )
}
