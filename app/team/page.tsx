import { getTeamMembers } from '@/lib/cosmic'
import { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'

export const metadata = {
  title: 'Our Team - Digital Agency Portfolio',
  description: 'Meet our talented team of designers, developers, and digital marketing experts dedicated to delivering exceptional results.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers() as TeamMember[]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-primary-100">
              Our diverse team of talented professionals brings expertise, creativity, and passion 
              to every project. Get to know the people behind our success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {teamMembers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No team members available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}