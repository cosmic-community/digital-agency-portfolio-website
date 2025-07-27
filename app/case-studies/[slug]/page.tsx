// app/case-studies/[slug]/page.tsx
import { getCaseStudy, getCaseStudies } from '@/lib/cosmic'
import { CaseStudy } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon, ExternalLinkIcon } from '@heroicons/react/24/outline'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies() as CaseStudy[]
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug) as CaseStudy | null

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.metadata?.project_title || caseStudy.title} - Case Study`,
    description: caseStudy.metadata?.project_overview || 'Client case study',
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug) as CaseStudy | null

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {caseStudy.metadata?.project_title || caseStudy.title}
              </h1>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8">
                {caseStudy.metadata?.client_name && (
                  <div>
                    <span className="font-medium">Client:</span> {caseStudy.metadata.client_name}
                  </div>
                )}
                {caseStudy.metadata?.project_duration && (
                  <div>
                    <span className="font-medium">Duration:</span> {caseStudy.metadata.project_duration}
                  </div>
                )}
              </div>

              {caseStudy.metadata?.project_url && (
                <a
                  href={caseStudy.metadata.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center btn-primary"
                >
                  View Live Project
                  <ExternalLinkIcon className="w-5 h-5 ml-2" />
                </a>
              )}
            </div>

            {caseStudy.metadata?.featured_image && (
              <div className="mb-12">
                <img
                  src={`${caseStudy.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                  alt={caseStudy.metadata?.project_title || caseStudy.title}
                  className="w-full rounded-lg shadow-lg"
                  width="1200"
                  height="600"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Overview */}
            {caseStudy.metadata?.project_overview && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {caseStudy.metadata.project_overview}
                </p>
              </div>
            )}

            {/* Challenge */}
            {caseStudy.metadata?.challenge && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <div
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }}
                />
              </div>
            )}

            {/* Solution */}
            {caseStudy.metadata?.solution && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <div
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }}
                />
              </div>
            )}

            {/* Project Gallery */}
            {caseStudy.metadata?.project_gallery && caseStudy.metadata.project_gallery.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {caseStudy.metadata.project_gallery.map((image, index) => (
                    <img
                      key={index}
                      src={`${image.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
                      alt={`${caseStudy.metadata?.project_title || caseStudy.title} - Image ${index + 1}`}
                      className="rounded-lg shadow-md"
                      width="400"
                      height="300"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {caseStudy.metadata?.results && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
                <div
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }}
                />
              </div>
            )}

            {/* Related Services */}
            {caseStudy.metadata?.related_services && caseStudy.metadata.related_services.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.metadata.related_services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.metadata?.service_name || service.title}
                      </h3>
                      {service.metadata?.short_description && (
                        <p className="text-gray-600">
                          {service.metadata.short_description}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}