import { CaseStudy } from '@/types'
import CaseStudyCard from './CaseStudyCard'
import Link from 'next/link'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const displayCaseStudies = caseStudies.slice(0, 2) // Show first 2 case studies

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve 
            remarkable results through our strategic approach and expert execution.
          </p>
        </div>

        {displayCaseStudies.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No case studies available at the moment.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {displayCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>

            {caseStudies.length > 2 && (
              <div className="text-center">
                <Link href="/case-studies" className="btn-primary">
                  View All Case Studies
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}