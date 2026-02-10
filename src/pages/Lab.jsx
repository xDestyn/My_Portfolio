import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'
import MagneticButton from '../components/MagneticButton'

const EXPERIMENTS = [
  {
    title: 'Terminal Portfolio',
    description:
      'This site! A creative, interactive portfolio with command palette navigation, smooth animations, and magnetic button effects. Built to showcase projects and ideas in an authentic, technically interesting way.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'MDX'],
    status: 'Complete',
    github: 'https://github.com/xDestyn/My_Portfolio',
    demo: '/',
  },
]

export default function Lab() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 border border-green-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-mono text-green-500">Experiments in progress</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-6">The Lab</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Side projects, technical experiments, and weekend builds. Where ideas become reality.
          </p>
        </motion.div>

        {/* Experiments Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {EXPERIMENTS.map((experiment, index) => (
            <ExperimentCard key={index} experiment={experiment} delay={index * 0.1} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center p-12 bg-gray-900 border border-gray-800 rounded-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
            Have an idea? Let's build it.
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to collaborating on interesting projects or discussing new ideas.
          </p>
          <MagneticButton>
            <a
              href="mailto:omar.flores.cs@outlook.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-gray-950 font-medium rounded-lg transition-colors"
            >
              Get in touch
              <ExternalLink className="w-4 h-4" />
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  )
}

function ExperimentCard({ experiment, delay }) {
  const statusColors = {
    Complete: 'bg-green-500/10 text-green-500 border-green-500/20',
    'In Progress': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    Planning: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="h-full p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-green-500/50 transition-all">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-100 group-hover:text-green-500 transition-colors">
            {experiment.title}
          </h3>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full border ${statusColors[experiment.status]}`}
          >
            {experiment.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-4 leading-relaxed">{experiment.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {experiment.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800 text-gray-300 text-xs font-mono rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {experiment.github && (
            <a
              href={experiment.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-500 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {experiment.demo && (
            <a
              href={experiment.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-500 transition-colors"
            >
              <Play className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
