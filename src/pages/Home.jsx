import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BookOpen, Beaker, User, Terminal } from 'lucide-react'
import MagneticButton from '../components/MagneticButton'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(34, 197, 94) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Terminal badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-full mb-8"
          >
            <Terminal className="w-4 h-4 text-green-500" />
            <span className="text-sm font-mono text-green-500">System online</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </motion.div>

          {/* Main heading with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-100 via-green-400 to-gray-100 bg-clip-text text-transparent">
              Building systems.
            </span>
            <br />
            <span className="text-gray-300">Documenting moments.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            I build software, explore cities, and document the journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton>
              <Link
                to="/field-notes"
                className="group flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-gray-950 font-medium rounded-lg transition-colors"
              >
                Read Field Notes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => {
                  const event = new KeyboardEvent('keydown', {
                    key: 'k',
                    metaKey: true,
                    bubbles: true,
                  })
                  window.dispatchEvent(event)
                }}
                className="flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg border border-gray-700 transition-colors"
              >
                <Terminal className="w-5 h-5" />
                Open Command Palette
              </button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-[15vh] left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-green-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Cards Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">Explore the space</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A collection of thoughts, experiments, and experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={BookOpen}
              title="Field Notes"
              description="Thoughts on builds, meals, travels, and lessons learned along the way."
              link="/field-notes"
              delay={0}
            />
            <FeatureCard
              icon={Beaker}
              title="Lab"
              description="Side projects, experiments, and technical explorations."
              link="/lab"
              delay={0.1}
            />
            <FeatureCard
              icon={User}
              title="About"
              description="Who I am, what I'm working on, and what's happening now."
              link="/about"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Stats or additional content section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-6">
              Engineer by trade. Creator by instinct.
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              I build cloud-native systems, automate workflows, and explore AI tooling. When I'm not
              coding, I'm documenting meals, travels, and everything in between.
            </p>
            <MagneticButton>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg border border-gray-700 transition-colors"
              >
                More about me
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description, link, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
    >
      <Link to={link} className="block h-full group">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="h-full p-8 bg-gray-900 border border-gray-800 rounded-xl hover:border-green-500/50 transition-colors"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-lg mb-6 group-hover:bg-green-500/20 transition-colors">
            <Icon className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-100 mb-3 group-hover:text-green-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
          <div className="mt-6 flex items-center text-green-500 font-medium group-hover:gap-2 transition-all">
            Explore
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
