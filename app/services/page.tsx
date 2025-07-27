import { getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services - Digital Agency Portfolio',
  description: 'Explore our comprehensive digital services including web design, development, branding, SEO, and digital marketing solutions.',
}

export default async function ServicesPage() {
  const services = await getServices() as Service[]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We offer comprehensive digital solutions to help your business grow and succeed online. 
              From web design to digital marketing, we've got you covered.
            </p>
            <Link href="/#contact" className="btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {services.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No services available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}