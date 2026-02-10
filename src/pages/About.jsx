import { motion } from 'framer-motion'
import { MapPin, Coffee, Code, Rocket } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-400">Engineer, explorer, and perpetual learner.</p>
        </motion.div>

        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 space-y-6 text-gray-300 leading-relaxed"
        >
          <p className="text-lg">
            I'm <span className="text-green-500 font-medium">Omar Flores</span>, a Senior Software
            Engineer with a passion for building systems that scale. I specialize in cloud-native
            architectures, automation, and AI tooling.
          </p>

          <p>
            By day, I architect solutions that handle millions of requests. By night, I explore new
            technologies, document my travels, hunt for the perfect meal, and build side projects
            that solve real problems.
          </p>

          <p>
            This site is my digital playground—a place where code meets creativity, and where I
            document the journey of building, learning, and exploring.
          </p>
        </motion.section>

        {/* Now Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-100 mb-8">What I'm doing now</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <NowCard
              icon={Code}
              title="Building"
              items={[
                'Cloud-native microservices',
                'AI-powered automation tools',
                "This personal site you're on",
              ]}
            />
            <NowCard
              icon={Rocket}
              title="Learning"
              items={[
                'Advanced observability patterns',
                'LLM integration strategies',
                'Modern frontend frameworks',
              ]}
            />
            <NowCard
              icon={Coffee}
              title="Enjoying"
              items={['Boba exploration', 'Cooking experiments', 'Photography walks']}
            />
            <NowCard
              icon={MapPin}
              title="Exploring"
              items={["Chicago's hidden gems", 'Weekend road trips', 'Outdoor adventures']}
            />
          </div>

          <p className="text-sm text-gray-500 mt-8">Last updated: February 2026</p>
        </motion.section>

        {/* Tech Focus */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-100 mb-8">Current tech focus</h2>

          <div className="space-y-4">
            <TechFocus
              category="Primary Stack"
              items={[
                'Go (Echo, Gin)',
                'Java (Spring Boot, Vert.x)',
                'Node.js (Nest.js, Express)',
                'TypeScript / JavaScript',
              ]}
            />
            <TechFocus
              category="Platforms & Infrastructure"
              items={[
                'AWS',
                'Bitbucket Pipelines',
                'Docker',
                'Kubernetes',
                'n8n',
                'Spinnaker',
                'Terraform',
              ]}
            />
            <TechFocus
              category="Databases"
              items={['DynamoDB', 'ElasticSearch', 'MongoDB', 'MySQL', 'PostgreSQL', 'Supabase']}
            />
            <TechFocus
              category="Testing & Quality"
              items={[
                'Anchore',
                'Cypress',
                'Ginkgo / Gomega',
                'Jest',
                'JUnit',
                'Mockito',
                'SonarQube',
              ]}
            />
            <TechFocus
              category="AI & LLMs"
              items={['Claude', 'OpenAI', 'Gemini AI', 'Warp Terminal', 'Github Copilot']}
            />
          </div>
        </motion.section>

        {/* Connect */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 bg-gray-900 border border-gray-800 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Let's connect</h2>
          <p className="text-gray-400 mb-6">
            I'm always open to interesting conversations about tech, travel, or anything in between.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:omar.flores.cs@outlook.com"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-gray-950 font-medium rounded-lg transition-colors"
            >
              Send me an email
            </a>
            <a
              href="https://www.linkedin.com/in/flores-omar/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg border border-gray-700 transition-colors"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/xDestyn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg border border-gray-700 transition-colors"
            >
              Follow on GitHub
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

function NowCard({ icon: Icon, title, items }) {
  return (
    <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center bg-green-500/10 rounded-lg">
          <Icon className="w-5 h-5 text-green-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
            <span className="text-green-500 mt-1">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TechFocus({ category, items }) {
  return (
    <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
      <h3 className="text-lg font-semibold text-gray-100 mb-3">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full border border-green-500/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
