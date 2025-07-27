import { Service } from '@/types'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {service.metadata?.featured_image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={`${service.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={service.metadata?.service_name || service.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            width="400"
            height="267"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {service.metadata?.service_name || service.title}
        </h3>
        
        {service.metadata?.short_description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {service.metadata.short_description}
          </p>
        )}

        {service.metadata?.starting_price && (
          <div className="text-primary-600 font-semibold mb-4">
            {service.metadata.starting_price}
          </div>
        )}

        <div className="flex justify-between items-center">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}