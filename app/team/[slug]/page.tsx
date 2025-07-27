// app/team/[slug]/page.tsx
import { getTeamMember, getTeamMembers } from '@/lib/cosmic'
import { TeamMember } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const teamMembers = await getTeamMembers() as TeamMember[]
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const member = await getTeamMember(slug) as TeamMember | null

  if (!member) {
    return {
      title: 'Team Member Not Found',
    }
  }

  return {
    title: `${member.metadata?.full_name || member.title} - Digital Agency Portfolio`,
    description: member.metadata?.bio || 'Team member profile',
  }
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params
  const member = await getTeamMember(slug) as TeamMember | null

  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-8">
          <Link
            href="/team"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Team
          </Link>
        </div>
      </section>

      {/* Team Member Profile */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Image and Info */}
              <div className="lg:col-span-1">
                <div className="text-center">
                  {member.metadata?.profile_photo ? (
                    <img
                      src={`${member.metadata.profile_photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                      alt={member.metadata?.full_name || member.title}
                      className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg mb-6"
                      width="256"
                      height="256"
                    />
                  ) : (
                    <div className="w-64 h-64 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-6">
                      <span className="text-6xl text-gray-400">
                        {(member.metadata?.full_name || member.title).charAt(0)}
                      </span>
                    </div>
                  )}
                  
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {member.metadata?.full_name || member.title}
                  </h1>
                  
                  {member.metadata?.job_title && (
                    <p className="text-xl text-primary-600 mb-6">
                      {member.metadata.job_title}
                    </p>
                  )}

                  {/* Contact Info */}
                  <div className="space-y-3">
                    {member.metadata?.email && (
                      <a
                        href={`mailto:${member.metadata.email}`}
                        className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <EnvelopeIcon className="w-5 h-5 mr-2" />
                        {member.metadata.email}
                      </a>
                    )}
                    
                    {member.metadata?.linkedin_url && (
                      <div>
                        <a
                          href={member.metadata.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bio and Skills */}
              <div className="lg:col-span-2">
                {member.metadata?.bio && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">About</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {member.metadata.bio}
                    </p>
                  </div>
                )}

                {member.metadata?.skills && member.metadata.skills.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills & Expertise</h2>
                    <div className="flex flex-wrap gap-3">
                      {member.metadata.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}