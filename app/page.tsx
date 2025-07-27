import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'
import { Service, TeamMember, CaseStudy, Testimonial } from '@/types'

export default async function Home() {
  const [services, teamMembers, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials()
  ])

  return (
    <>
      <Hero />
      <ServicesSection services={services as Service[]} />
      <TeamSection teamMembers={teamMembers as TeamMember[]} />
      <CaseStudiesSection caseStudies={caseStudies as CaseStudy[]} />
      <TestimonialsSection testimonials={testimonials as Testimonial[]} />
    </>
  )
}