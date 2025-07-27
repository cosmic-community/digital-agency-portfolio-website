'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-8">
          We encountered an error while loading this page. Please try again.
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="btn-primary w-full"
          >
            Try again
          </button>
          <Link href="/" className="btn-secondary w-full text-center">
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}