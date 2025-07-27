import { Testimonial } from '@/types'
import { StarIcon } from '@heroicons/react/24/solid'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = parseInt(testimonial.metadata?.rating?.key || '5')

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-primary-300 transition-colors duration-300">
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      {testimonial.metadata?.testimonial_text && (
        <blockquote className="text-gray-700 mb-6 italic">
          "{testimonial.metadata.testimonial_text}"
        </blockquote>
      )}

      {/* Client Info */}
      <div className="flex items-center">
        {testimonial.metadata?.client_photo ? (
          <img
            src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={testimonial.metadata?.client_name || 'Client'}
            className="w-12 h-12 rounded-full object-cover mr-4"
            width="48"
            height="48"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
            <span className="text-gray-600 font-medium">
              {(testimonial.metadata?.client_name || 'C').charAt(0)}
            </span>
          </div>
        )}
        
        <div>
          <div className="font-semibold text-gray-900">
            {testimonial.metadata?.client_name}
          </div>
          <div className="text-sm text-gray-600">
            {testimonial.metadata?.job_title && testimonial.metadata?.company ? (
              `${testimonial.metadata.job_title}, ${testimonial.metadata.company}`
            ) : testimonial.metadata?.job_title ? (
              testimonial.metadata.job_title
            ) : testimonial.metadata?.company ? (
              testimonial.metadata.company
            ) : null}
          </div>
          {testimonial.metadata?.related_service && (
            <div className="text-xs text-primary-600 mt-1">
              {testimonial.metadata.related_service.metadata?.service_name || testimonial.metadata.related_service.title}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}