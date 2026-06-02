import PageWrapper from '@/components/page-wrapper'
import CertificationsHero from '@/components/certifications/certifications-hero'
import AcademicExcellence from '@/components/certifications/academic-excellence'
import ProfessionalCertifications from '@/components/certifications/professional-certifications'
import TechnicalExpertise from '@/components/certifications/technical-expertise'
import AwardsRecognition from '@/components/certifications/awards-recognition'
import CertificationsCTA from '@/components/certifications/certifications-cta'

export default function CertificationsPage() {
  return (
    <PageWrapper>
      <CertificationsHero />
      <AcademicExcellence />
      <ProfessionalCertifications />
      <TechnicalExpertise />
      <AwardsRecognition />
      <CertificationsCTA />
    </PageWrapper>
  )
}
