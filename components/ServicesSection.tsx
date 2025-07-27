import { Service } from '@/types'
import ServiceCard from './ServiceCard'
import Link from 'next/link'

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const displayServices = services.slice(0, 3) // Show first 3 services

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape. 
            From strategy to execution, we've got you covered.
          </p>
        </div>

        {displayServices.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No services available at the moment.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {services.length > 3 && (
              <div className="text-center">
                <Link href="/services" className="btn-primary">
                  View All Services
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}