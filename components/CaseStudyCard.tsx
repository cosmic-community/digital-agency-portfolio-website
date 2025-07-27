import { CaseStudy } from '@/types'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {caseStudy.metadata?.featured_image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={`${caseStudy.metadata.featured_image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={caseStudy.metadata?.project_title || caseStudy.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width="600"
            height="338"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          {caseStudy.metadata?.client_name && (
            <span>{caseStudy.metadata.client_name}</span>
          )}
          {caseStudy.metadata?.project_duration && (
            <>
              <span>•</span>
              <span>{caseStudy.metadata.project_duration}</span>
            </>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {caseStudy.metadata?.project_title || caseStudy.title}
        </h3>
        
        {caseStudy.metadata?.project_overview && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {caseStudy.metadata.project_overview}
          </p>
        )}

        {caseStudy.metadata?.related_services && caseStudy.metadata.related_services.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.metadata.related_services.slice(0, 2).map((service) => (
              <span
                key={service.id}
                className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
              >
                {service.metadata?.service_name || service.title}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          Read Case Study
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}