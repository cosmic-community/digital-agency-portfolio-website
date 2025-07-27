import { getCaseStudies } from '@/lib/cosmic'
import { CaseStudy } from '@/types'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies - Digital Agency Portfolio',
  description: 'Explore our successful client projects and see how we\'ve helped businesses achieve their digital goals through our expert services.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies() as CaseStudy[]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600">
              Discover how we've helped businesses transform their digital presence and achieve 
              measurable results through our strategic approach and expert execution.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {caseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No case studies available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}