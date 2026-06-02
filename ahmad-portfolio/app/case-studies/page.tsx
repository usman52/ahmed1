import PageWrapper from '@/components/page-wrapper'
import CaseStudiesHero from '@/components/case-studies/case-studies-hero'
import CaseStudyList from '@/components/case-studies/case-study-list'
import ExpertiseDemonstrated from '@/components/case-studies/expertise-demonstrated'
import CaseStudiesCTA from '@/components/case-studies/case-studies-cta'

export default function CaseStudiesPage() {
  return (
    <PageWrapper>
      <CaseStudiesHero />
      <CaseStudyList />
      <ExpertiseDemonstrated />
      <CaseStudiesCTA />
    </PageWrapper>
  )
}
