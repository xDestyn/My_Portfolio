import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react'

// Metadata for Field Notes (imported from FieldNotes.jsx for consistency)
const FIELD_NOTES_META = {
  'building-this-site': {
    title: 'Building This Site',
    date: '2026-02-09',
    category: 'Build',
    tags: ['react', 'vite', 'design', 'framer-motion'],
    location: null,
  },
}

export default function FieldNoteDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [MDXContent, setMDXContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const noteMeta = FIELD_NOTES_META[slug]

  useEffect(() => {
    // Dynamically import the MDX file based on slug
    const loadMDX = async () => {
      try {
        setLoading(true)
        const module = await import(`../content/field-notes/${slug}.mdx`)
        setMDXContent(() => module.default)
        setError(false)
      } catch (err) {
        console.error('Failed to load MDX:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      loadMDX()
    }
  }, [slug])

  if (!noteMeta || error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-100 mb-4">Note not found</h1>
          <Link to="/field-notes" className="text-green-500 hover:text-green-400 transition-colors">
            Back to Field Notes
          </Link>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  const categoryColors = {
    Eat: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    Go: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    Build: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    Learn: 'bg-green-500/10 text-green-500 border-green-500/20',
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/field-notes')}
            className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Field Notes
          </button>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          {/* Category badge */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full border ${categoryColors[noteMeta.category]}`}
            >
              {noteMeta.category}
            </span>
            {noteMeta.location && (
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                {noteMeta.location}
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6 leading-tight">
            {noteMeta.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(noteMeta.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {noteMeta.tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-gray-900 text-gray-400 text-sm rounded-full border border-gray-800"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* MDX Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-green max-w-none"
        >
          <div className="field-note-content">{MDXContent && <MDXContent />}</div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <Link
            to="/field-notes"
            className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            View all Field Notes
          </Link>
        </motion.footer>
      </article>
    </div>
  )
}
