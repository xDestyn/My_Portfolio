import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Tag, MapPin, Search, X } from 'lucide-react'

// Import field notes (will be populated with actual MDX files)
const FIELD_NOTES = [
  {
    slug: 'building-this-site',
    title: 'Building This Site',
    date: '2026-02-09',
    category: 'Build',
    tags: ['react', 'vite', 'design', 'framer-motion'],
    excerpt:
      'Reflections on building a personal site that feels authentic and technically interesting.',
    coverImage: null,
    location: null,
  },
]

const CATEGORIES = ['All', 'Eat', 'Go', 'Build', 'Learn']

export default function FieldNotes() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set()
    FIELD_NOTES.forEach((note) => note.tags.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
  }, [])

  // Filter notes
  const filteredNotes = useMemo(() => {
    return FIELD_NOTES.filter((note) => {
      const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory
      const matchesSearch =
        searchQuery === '' ||
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((tag) => note.tags.includes(tag))

      return matchesCategory && matchesSearch && matchesTags
    })
  }, [selectedCategory, searchQuery, selectedTags])

  const toggleTag = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-6">
            Field Notes
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Thoughts, meals, builds, and travels. A living collection of experiences and learnings.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notes..."
              className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-green-500 text-gray-950'
                    : 'bg-gray-900 text-gray-400 hover:text-gray-200 border border-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tag Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-500">Filter by tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  selectedTags.includes(tag)
                    ? 'bg-green-500/20 text-green-500 border border-green-500/50'
                    : 'bg-gray-900 text-gray-500 hover:text-gray-300 border border-gray-800'
                }`}
              >
                {tag}
                {selectedTags.includes(tag) && <X className="inline-block w-3 h-3 ml-1" />}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Notes Grid */}
        {filteredNotes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note, index) => (
              <NoteCard key={note.slug} note={note} delay={index * 0.05} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">No notes found matching your filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function NoteCard({ note, delay }) {
  const categoryColors = {
    Eat: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    Go: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    Build: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    Learn: 'bg-green-500/10 text-green-500 border-green-500/20',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/field-notes/${note.slug}`} className="block h-full group">
        <div className="h-full p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-green-500/50 transition-all">
          {/* Category badge */}
          <div className="flex items-center justify-between mb-4">
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full border ${categoryColors[note.category]}`}
            >
              {note.category}
            </span>
            {note.location && (
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <MapPin className="w-3 h-3" />
                {note.location}
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-100 mb-3 group-hover:text-green-500 transition-colors">
            {note.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">{note.excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {note.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                #{tag}
              </span>
            ))}
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            {new Date(note.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
