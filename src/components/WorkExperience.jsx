import { useState } from 'react'
import { Building2, ChevronDown, ChevronUp, Zap } from 'lucide-react'

const WorkExperience = () => {
  const [showFullDetails, setShowFullDetails] = useState(false)

  const impactHighlights = [
    'Architected 10+ microservices optimizing for efficiency and reliability',
    'Reduced deployment time by up to 80% through Kubernetes automation',
    'Improved database performance by up to 99% via query optimization',
    'Led incident response & on-call rotations, reducing resolution time by 40%',
  ]

  const fullAchievements = [
    'Architected and deployed over 10 microservices, optimizing for maximum efficiency and reliability',
    'Automated the deployment of containerized applications to Kubernetes clusters integrating Nexus, Docker, and Spinnaker, reducing deployment time by up to 80%',
    'Coordinated with development and operations teams across multiple regions, including Spain and Ireland, ensuring seamless communication and project alignment',
    'Delivered regular project updates and feature demos to stakeholders and team members, enhancing transparency, gathering feedback, and ensuring alignment with organizational goals',
    'Designed and executed automated test suites using Cypress, increasing test coverage by 60% and reducing regression testing time by up to 90%',
    'Developed and optimized build pipelines in Bitbucket, leveraging parallelization techniques to reduce build times by 75%',
    'Implemented comprehensive monitoring and logging solutions using Datadog, Grafana, and ElasticSearch, leading up to a 90% improvement in issue detection and resolution times',
    'Leveraged Jira for tracking project progress and managing sprints; documented project workflows and knowledge in Confluence, enhancing team collaboration and reducing onboarding time for new team members by up to 30%',
    'Performed elaborate code reviews and managed pull requests, ensuring code quality and adherence to best practices',
    'Revamped database performance through query optimization and strategic indexing; slashed query execution time by up to 99% and introduced caching for frequently accessed data, dramatically reducing overall database load',
    'Served as a first responder for critical system issues, taking shifts every quarter and ensuring a rapid response time, which contributed to a 40% reduction in average incident resolution time',
  ]

  return (
    <section className="max-w-6xl mx-auto mb-16 sm:mb-24 scroll-reveal">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center">
        <Building2 className="w-6 h-6 mr-2 text-green-400" />
        Work Experience
      </h2>

      <div className="bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-700 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-700 pb-4">
          <div>
            <h3 className="text-xl font-bold">Senior Software Engineer</h3>
            <p className="text-gray-400">LevelBlue, Chicago, IL</p>
          </div>
          <p className="text-green-400 mt-2 sm:mt-0">September 2022 – Present</p>
        </div>

        {/* Impact Highlights */}
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-green-400" />
            Key Impact
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactHighlights.map((highlight, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-200 text-sm">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Collapsible Full Details */}
        <div>
          <button
            onClick={() => setShowFullDetails(!showFullDetails)}
            className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors font-medium"
          >
            <span>{showFullDetails ? 'Hide' : 'View'} full experience</span>
            {showFullDetails ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              showFullDetails ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="space-y-3 pt-4 border-t border-gray-700">
              {fullAchievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-400 mr-3 flex-shrink-0">•</span>
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
