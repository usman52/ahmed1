import PageWrapper from '@/components/page-wrapper'
import IndustriesHero from '@/components/industries/industries-hero'
import IndustriesList from '@/components/industries/industries-list'
import CommonChallenges from '@/components/industries/common-challenges'
import IndustriesCTA from '@/components/industries/industries-cta'

export default function IndustriesPage() {
  return (
    <PageWrapper>
      <IndustriesHero />
      <IndustriesList />
      <CommonChallenges />
      <IndustriesCTA />
    </PageWrapper>
  )
}
