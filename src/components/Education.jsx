import { GraduationCap, Award } from 'lucide-react'

const Education = () => {
  return (
    <section className="max-w-6xl mx-auto mb-16 sm:mb-24 scroll-reveal">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Education */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2 text-green-400" />
            Education
          </h2>
          <div className="card-hover bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-2">University of Illinois at Chicago</h3>
            <p className="text-gray-400">Bachelor of Science — Computer Science</p>
            <p className="text-gray-400">Minor in Mathematics</p>
            <p className="text-green-400 mt-3 font-medium">Graduated May 2021</p>
          </div>
        </div>

        {/* Certification */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center">
            <Award className="w-6 h-6 mr-2 text-green-400" />
            Certification
          </h2>
          <div className="card-hover bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-2">ISC2 Certification</h3>
            <p className="text-gray-400">Certified in Cybersecurity</p>
            <p className="text-green-400 mt-3 font-medium">June 2023</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
