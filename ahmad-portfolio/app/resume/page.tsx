import PageWrapper from '@/components/page-wrapper'
import ResumeHero from '@/components/resume/resume-hero'
import ResumeContent from '@/components/resume/resume-content'
import ResumeDownload from '@/components/resume/resume-download'

export default function ResumePage() {
  return (
    <PageWrapper>
      <ResumeHero />
      <ResumeContent />
      <ResumeDownload />
    </PageWrapper>
  )
}
