import { TeamMember } from '@/types'
import TeamMemberCard from './TeamMemberCard'
import Link from 'next/link'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const displayMembers = teamMembers.slice(0, 3) // Show first 3 team members

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of designers, developers, and strategists brings years of experience 
            and passion to every project we undertake.
          </p>
        </div>

        {displayMembers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No team members available at the moment.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>

            {teamMembers.length > 3 && (
              <div className="text-center">
                <Link href="/team" className="btn-primary">
                  Meet the Full Team
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}