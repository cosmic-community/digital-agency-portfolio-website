import { TeamMember } from '@/types'
import Link from 'next/link'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6 text-center">
        {member.metadata?.profile_photo ? (
          <img
            src={`${member.metadata.profile_photo.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
            alt={member.metadata?.full_name || member.title}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            width="96"
            height="96"
          />
        ) : (
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <span className="text-2xl text-gray-400">
              {(member.metadata?.full_name || member.title).charAt(0)}
            </span>
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {member.metadata?.full_name || member.title}
        </h3>
        
        {member.metadata?.job_title && (
          <p className="text-primary-600 font-medium mb-3">
            {member.metadata.job_title}
          </p>
        )}

        {member.metadata?.bio && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {member.metadata.bio}
          </p>
        )}

        {member.metadata?.skills && member.metadata.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {member.metadata.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
            {member.metadata.skills.length > 3 && (
              <span className="text-xs text-gray-500">
                +{member.metadata.skills.length - 3} more
              </span>
            )}
          </div>
        )}

        <Link
          href={`/team/${member.slug}`}
          className="inline-block text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  )
}