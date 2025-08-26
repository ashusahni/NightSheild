import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - Page Not Found | NightShield',
  description: 'The page you are looking for could not be found.',
}

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-400 text-lg mb-8">
            The page you are looking for could not be found.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-6">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">
            Night<span className="text-red-500">Shield</span>
          </h3>
          <p className="text-gray-400">AI Surveillance That Protects</p>
        </div>

        <Link 
          href="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
