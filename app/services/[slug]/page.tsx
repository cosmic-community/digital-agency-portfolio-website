// app/services/[slug]/page.tsx
import { getService, getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = await getServices() as Service[]
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const service = await getService(slug) as Service | null

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.metadata?.service_name || service.title} - Digital Agency Portfolio`,
    description: service.metadata?.short_description || 'Professional digital service',
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = await getService(slug) as Service | null

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-primary-100 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {service.metadata?.service_name || service.title}
                </h1>
                <p className="text-xl text-primary-100 mb-8">
                  {service.metadata?.short_description}
                </p>
                {service.metadata?.starting_price && (
                  <div className="text-2xl font-semibold mb-8">
                    {service.metadata.starting_price}
                  </div>
                )}
                <Link href="/#contact" className="btn-secondary">
                  Get Quote
                </Link>
              </div>
              
              {service.metadata?.featured_image && (
                <div className="relative">
                  <img
                    src={`${service.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                    alt={service.metadata?.service_name || service.title}
                    className="rounded-lg shadow-2xl"
                    width="600"
                    height="400"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {service.metadata?.full_description && (
                  <div className="prose prose-lg max-w-none">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: service.metadata.full_description
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {service.metadata?.key_features && service.metadata.key_features.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {service.metadata.key_features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 bg-primary-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Contact us today to discuss your project and see how we can help.
                  </p>
                  <Link href="/#contact" className="btn-primary w-full text-center">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}