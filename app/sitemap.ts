import { MetadataRoute } from 'next'
import { getServices, getTeamMembers, getCaseStudies } from '@/lib/cosmic'
import { Service, TeamMember, CaseStudy } from '@/types'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yoursite.com' // Replace with your actual domain

  try {
    const [services, teamMembers, caseStudies] = await Promise.all([
      getServices(),
      getTeamMembers(), 
      getCaseStudies()
    ])

    const serviceUrls = services.map((service: Service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(service.modified_at),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

    const teamUrls = teamMembers.map((member: TeamMember) => ({
      url: `${baseUrl}/team/${member.slug}`,
      lastModified: new Date(member.modified_at),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    const caseStudyUrls = caseStudies.map((caseStudy: CaseStudy) => ({
      url: `${baseUrl}/case-studies/${caseStudy.slug}`,
      lastModified: new Date(caseStudy.modified_at),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/team`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/case-studies`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      ...serviceUrls,
      ...teamUrls,
      ...caseStudyUrls,
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
    ]
  }
}