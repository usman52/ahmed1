import PageWrapper from '@/components/page-wrapper'
import ContactHero from '@/components/contact/contact-hero'
import ContactInfo from '@/components/contact/contact-info'
import ContactForm from '@/components/contact/contact-form'
import ContactCTA from '@/components/contact/contact-cta'

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactCTA />
    </PageWrapper>
  )
}
