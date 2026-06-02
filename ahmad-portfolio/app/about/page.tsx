import PageWrapper from '@/components/page-wrapper'
import AboutHero from '@/components/about/about-hero'
import ProfessionalBackground from '@/components/about/professional-background'
import Specializations from '@/components/about/specializations'
import Philosophy from '@/components/about/philosophy'
import Achievements from '@/components/about/achievements'

export default function AboutPage() {
  return (
    <PageWrapper>
      <AboutHero />
      <ProfessionalBackground />
      <Specializations />
      <Philosophy />
      <Achievements />
    </PageWrapper>
  )
}
